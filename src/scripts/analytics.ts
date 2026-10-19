// Funnel tracking. Sends the same events to whichever tools are installed
// (Plausible, GA4 via gtag, or Google Tag Manager via dataLayer).
//
// On-site funnel:  pageview → book_click → booking_calendar_viewed → booking_time_selected → booking_completed
// The rest (attended → qualified → client) happens off-site; track it per booking in a CRM or spreadsheet.

type Props = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, props: Props = {}): void {
  window.plausible?.(event, { props });
  window.gtag?.('event', event, props);
  window.dataLayer?.push({ event, ...props });
}

// Any element with data-track="event_name" (and optional data-location) reports clicks.
document.addEventListener('click', (e) => {
  const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
  if (el?.dataset.track) track(el.dataset.track, { location: el.dataset.location ?? '' });
});

// Scripts can report events without importing this module: dispatch a 'track' CustomEvent.
document.addEventListener('track', (e) => {
  const { event, props } = (e as CustomEvent<{ event: string; props?: Props }>).detail;
  track(event, props);
});

// Calendly's inline widget posts its progress to the parent page.
const calendlyEvents: Record<string, string> = {
  'calendly.event_type_viewed': 'booking_calendar_viewed',
  'calendly.date_and_time_selected': 'booking_time_selected',
  'calendly.event_scheduled': 'booking_completed',
};

window.addEventListener('message', (e) => {
  if (e.origin !== 'https://calendly.com') return;
  const name = (e.data as { event?: unknown } | null)?.event;
  if (typeof name === 'string' && name in calendlyEvents) track(calendlyEvents[name]);
});
