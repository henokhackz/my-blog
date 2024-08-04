"use server";

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/lib/actions/user.actions";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  // Check for missing headers
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", { status: 400 });
  }

  // Process the event
  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      // Extract user data from the event
      const newUser = {
        clerkId: evt.data.id,
        name: evt.data.first_name,
        email: evt.data.primary_email_address_id,
        password: evt.data.id,
        profileImgUrl: evt.data.image_url,
      };

      // Create the user
      await createUser({
        clerkId: newUser.clerkId,
        name: newUser.name,
        email: newUser.email,
        profileImgUrl: newUser.profileImgUrl,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response("Error occurred while creating user", {
        status: 500,
      });
    }
  }

  console.log(`Webhook with ID ${id} and type ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
