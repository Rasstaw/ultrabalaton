import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest): Promise<void | Response> {
  const reqBody = await request.json();
  const { fullName, email, password } = reqBody;

  try {
    // Validate input data
    if (!fullName || !email || !password) {
      return NextResponse.json({
        message: "Please provide all required fields.",
      });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "Email address is already in use." });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "Your account is created. Please log in.",
      success: true,
    });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
