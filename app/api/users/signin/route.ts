// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;

  try {
    // Validate input data
    if (!email || !password) {
      return NextResponse.json({
        message: "Please provide all required fields.",
      });
    }

    //checking user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "no user with this email exists" });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      const respose = NextResponse.json({
        Message: "Incorrect username or password",
      });
    }

    //creating token data
    const tokenData = {
      id: user.userid,
      fullName: user.fullName,
      email: user.email,
    };

    //creating the token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    const respose = NextResponse.json({
      Message: "you are now loggedin",
      success: true,
    });

    respose.cookies.set("token", token, {
      httpOnly: true,
    });

    return respose;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
