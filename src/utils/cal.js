import { getCalApi } from "@calcom/embed-react";

/**
 * Preloads Cal.com embed API in the background (e.g. on navigation hover)
 * to eliminate cold-start delay when visiting the contact page.
 */
export function preloadCal() {
  if (typeof window !== 'undefined') {
    getCalApi({ namespace: 'audit' }).catch(() => {});
  }
}
