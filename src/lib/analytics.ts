export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  try {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) return;

    const preferences = JSON.parse(stored);
    if (preferences.analytics !== true) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  } catch (e) {
    console.warn("Error tracking event:", e);
  }
}

// Global declaration to avoid TS errors
declare global {
  interface Window {
    dataLayer: any[];
  }
}
