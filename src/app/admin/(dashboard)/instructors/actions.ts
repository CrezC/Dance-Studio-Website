"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

function readInstructorFields(formData: FormData) {
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    bio: String(formData.get("bio") ?? "").trim(),
    photoUrl: String(formData.get("photoUrl") ?? "").trim() || null,
  };
}

export async function createInstructor(formData: FormData) {
  const data = readInstructorFields(formData);

  try {
    await prisma.instructor.create({ data });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      redirect(`/admin/instructors/new?error=slug-taken`);
    }
    throw e;
  }

  revalidatePath("/admin/instructors");
  revalidatePath("/instructors");
  redirect("/admin/instructors");
}

export async function updateInstructor(id: string, formData: FormData) {
  const data = readInstructorFields(formData);

  try {
    await prisma.instructor.update({ where: { id }, data });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      redirect(`/admin/instructors/${id}/edit?error=slug-taken`);
    }
    throw e;
  }

  revalidatePath("/admin/instructors");
  revalidatePath("/instructors");
  revalidatePath("/classes");
  redirect("/admin/instructors");
}

export async function deleteInstructor(id: string) {
  try {
    await prisma.instructor.delete({ where: { id } });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2003") {
      redirect(`/admin/instructors?error=has-classes`);
    }
    throw e;
  }

  revalidatePath("/admin/instructors");
  revalidatePath("/instructors");
  redirect("/admin/instructors");
}
