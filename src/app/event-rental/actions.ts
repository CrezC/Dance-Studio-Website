"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function submitEventRentalInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    throw new Error("Missing required fields");
  }

  await prisma.eventRentalInquiry.create({
    data: { name, email, message },
  });

  redirect("/event-rental?submitted=1");
}
