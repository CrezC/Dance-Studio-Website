"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { WAIVER_VERSION } from "./waiver-content";

export async function submitWaiver(formData: FormData) {
  const isMinor = formData.get("isMinor") === "on";
  const signerName = formData.get("signerName");
  const signerEmail = formData.get("signerEmail");
  const childName = formData.get("childName");
  const relationship = formData.get("relationship");
  const agreedToTerms = formData.get("agreedToTerms") === "on";

  if (typeof signerName !== "string" || typeof signerEmail !== "string" || !signerName.trim()) {
    throw new Error("Missing required fields");
  }

  if (!agreedToTerms) {
    throw new Error("You must agree to the waiver terms");
  }

  if (isMinor && (typeof childName !== "string" || !childName.trim())) {
    throw new Error("Child name is required when signing on behalf of a minor");
  }

  const ipAddress = (await headers()).get("x-forwarded-for");

  await prisma.waiverSubmission.create({
    data: {
      waiverVersion: WAIVER_VERSION,
      isMinor,
      signerName: signerName.trim(),
      signerEmail: signerEmail.trim(),
      childName: isMinor && typeof childName === "string" ? childName.trim() : null,
      relationship: isMinor && typeof relationship === "string" ? relationship.trim() : null,
      agreedToTerms,
      ipAddress,
    },
  });

  redirect("/waiver?submitted=1");
}
