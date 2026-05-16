import { Suspense } from "react";
import type { Metadata } from "next";
import BookingConfirmationView from "@/components/booking/BookingConfirmationView";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your appointment request at Lumière Salon & Spa.",
  robots: { index: false, follow: false },
};

export default function BookingConfirmationPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-parchment">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Loading your reservation…
          </p>
        </main>
      }
    >
      <BookingConfirmationView />
    </Suspense>
  );
}
