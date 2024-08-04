"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/User.model";
import { connectToDatabase } from "../database/mongoose";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
    throw new Error("Could not connect to database");
  }
}
