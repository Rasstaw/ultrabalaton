import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: NextRequest): Promise<void | Response> {
  const reqBody = await request.json();
  const { email, password } = reqBody;

  try {
    // Validate input data
    if (!email || !password) {
      return NextResponse.json({
        message: "Please provide all required fields.",
      });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "No user with this email exists" });
    }

    // Validate password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ message: "Incorrect username or password" });
    }

    // Creating token data
    const tokenData = {
      id: user.userid,
      fullName: user.fullName,
      email: user.email,
    };

    // Creating the token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    // Setting token in cookies
    const response = NextResponse.json({
      message: "You are now logged in",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
