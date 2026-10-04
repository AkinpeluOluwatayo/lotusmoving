"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { waLink } from "@/lib/site";

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = waLink();
  }, []);

  return (
    <div className="container-lotus py-40 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Redirecting to WhatsApp...</h1>
      <p className="mt-4 text-muted-foreground">Opening direct chat with LOTUS Moving Service on WhatsApp.</p>
      <a
        href={waLink()}
        className="mt-6 inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lift"
      >
        Click here if not redirected automatically
      </a>
    </div>
  );
}
