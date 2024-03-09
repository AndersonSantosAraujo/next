"use client";

import { revalidateTagAction } from "@/actions/revalidatePath";

export default function RefreshProducts() {
  return revalidateTagAction("products");
}
