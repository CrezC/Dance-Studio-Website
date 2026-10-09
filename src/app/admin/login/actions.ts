"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, checkPassword, createSessionToken } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string" || !checkPassword(password)) {
    redirect("/admin/login?error=1");
  }

  (await cookies()).set(ADMIN_SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  redirect("/admin");
}
