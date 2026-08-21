import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CookiePreferences {
  necessary: boolean; // always true
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  hasInteracted: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  isSettingsOpen: boolean;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        setPreferences(JSON.parse(stored));
        setHasInteracted(true);
      }
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
  }, []);

  const saveAndSet = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    setHasInteracted(true);
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  };

  const acceptAll = () => {
    saveAndSet({ necessary: true, analytics: true, marketing: true });
    setIsSettingsOpen(false);
  };

  const rejectAll = () => {
    saveAndSet({ necessary: true, analytics: false, marketing: false });
    setIsSettingsOpen(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    saveAndSet({ ...prefs, necessary: true });
    setIsSettingsOpen(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasInteracted,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings: () => setIsSettingsOpen(true),
        closeSettings: () => setIsSettingsOpen(false),
        isSettingsOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
