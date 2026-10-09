"use server";

import { revalidatePath } from "next/cache";
import type { InquiryStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  await prisma.eventRentalInquiry.update({ where: { id }, data: { status } });
  revalidatePath("/admin/event-rental");
  revalidatePath("/admin");
}
