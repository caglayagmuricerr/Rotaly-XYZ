"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/support/tickets");
  }, [router]);

  return null;
}
