import connectDB from "@/lib/db-utils";
import userComments from "@/models/comments";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { eventId } = await params;

  try {
    await connectDB();
    const body = await request.json();

    const { email, name, text } = body;
    if (!email || !name || !text) {
      return NextResponse.json(
        {
          error: true,
          message: "Invalid comment data!",
        },
        { status: 400 }
      );
    }
    const data = await userComments.create({
      email,
      name,
      text,
      eventId,
    });
    return NextResponse.json(
      {
        response_code: 1,
        response_obj: data,
        error: false,
        authorization: true,
        message: "User comment successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: true,

        message: "Something went wrong !",
      },
      { status: 500 }
    );
  }
}


export async function GET(request, { params }) {
  const { eventId } = await params;
try {
  await connectDB();
  const comment = await userComments.find({eventId});
  console.log(comment, "Comment")
  return NextResponse.json(
    {
      response_code: 1,
      response_obj: comment,
      error: false,
      authorization: true,
      message: "User comment successfully!",
    },
    { status: 201 }
  );
} catch (error) {
  return NextResponse.json(
    {
      error: true,

      message: "Something went wrong !",
    },
    { status: 500 }
  );
}
}