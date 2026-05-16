/**
 * Booking trigger — bridges any page CTA to the always-on B4 sticky bar.
 * BookingStickyBar listens for this event and opens its details overlay.
 */
export const OPEN_BOOKING_EVENT = "lumiere:open-booking";

export function openBooking() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_BOOKING_EVENT));
  }
}
