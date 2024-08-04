"use server";

import User from "../database/models/User.model";

interface UserData {
  clerkId: string;
  name: string | null;
  email: string | null;
  profileImgUrl: string;
}

export async function createUser({
  clerkId,
  name,
  email,
  profileImgUrl,
}: UserData) {
  try {
    const newUser = await User.create({
      clerkId,
      name,
      email,
      profileImgUrl,
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
}
