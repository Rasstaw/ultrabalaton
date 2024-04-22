// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fullName, email, password } = req.body;

      // Validating input data
      if (!fullName || !email || !password) {
        return res
          .status(400)
          .json({ message: "Please provide all required fields." });
      }
      console.log("Received data:", req.body);
      if (!fullName || !email || !password) {
        console.log("Missing fields:", { fullName, email, password });
        return res
          .status(400)
          .json({ message: "Please provide all required fields." });
      }

      // Check if user with the provided email already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email address is already in use." });
      }

      // Hash the password using bcryptjs
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(password, salt);

      console.log(hashedPassword);

      // Use Prisma to store the new user in the database
      const newUser = await prisma.user.create({
        data: {
          fullName,
          email,
          password: hashedPassword,
        },
      });

      // Return the newly created user or a success message
      res
        .status(201)
        .json({ message: "User created successfully!", user: newUser });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Request error", errorMessage);
      res.status(500).json({ error: "Error creating user", errorMessage });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
