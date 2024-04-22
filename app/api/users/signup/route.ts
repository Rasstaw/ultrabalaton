import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { fullName, email, password } = reqBody;

  try {
    // Validate input data
    if (!fullName || !email || !password) {
      return NextResponse.json({
        message: "Please provide all required fields.",
      });
    }

    //checking user
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "Email address is already in use." });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Use Prisma to store the new user in the database
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "your account is created please login",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
