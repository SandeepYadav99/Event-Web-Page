import connectDB from "@/lib/db-utils";
import userRegistration from "@/models/registration";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json(
        {
          message: "Email is Required ",
        },
        { status: 400 }
      );
    }
    const data = await userRegistration.create({ email });
    return NextResponse.json(
      {
        message: "User registration successfully!",
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong !",
      },
      { status: 500 }
    );
  }
}