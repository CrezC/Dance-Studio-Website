"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

function readClassFields(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    dayOfWeek: String(formData.get("dayOfWeek") ?? "").trim(),
    startTime: String(formData.get("startTime") ?? "").trim(),
    endTime: String(formData.get("endTime") ?? "").trim(),
    price: String(formData.get("price") ?? "").trim(),
    availability: String(formData.get("availability") ?? "OPEN") as "OPEN" | "LIMITED" | "FULL",
    registrationUrl: String(formData.get("registrationUrl") ?? "").trim(),
    paymentUrl: String(formData.get("paymentUrl") ?? "").trim() || null,
    instructorId: String(formData.get("instructorId") ?? ""),
  };
}

export async function createClass(formData: FormData) {
  const data = readClassFields(formData);

  try {
    await prisma.class.create({ data });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      redirect(`/admin/classes/new?error=slug-taken`);
    }
    throw e;
  }

  revalidatePath("/admin/classes");
  revalidatePath("/classes");
  revalidatePath("/");
  redirect("/admin/classes");
}

export async function updateClass(id: string, formData: FormData) {
  const data = readClassFields(formData);

  try {
    await prisma.class.update({ where: { id }, data });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      redirect(`/admin/classes/${id}/edit?error=slug-taken`);
    }
    throw e;
  }

  revalidatePath("/admin/classes");
  revalidatePath("/classes");
  revalidatePath(`/classes/${data.slug}`);
  revalidatePath("/");
  redirect("/admin/classes");
}

export async function deleteClass(id: string) {
  await prisma.class.delete({ where: { id } });

  revalidatePath("/admin/classes");
  revalidatePath("/classes");
  revalidatePath("/");
  redirect("/admin/classes");
}
