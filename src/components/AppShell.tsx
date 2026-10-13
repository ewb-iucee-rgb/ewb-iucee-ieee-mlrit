"use client";

import { useCallback, useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { EventAlert } from "@/components/EventAlert";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashDone = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      <EventAlert splashDone={splashDone} />
      {children}
    </>
  );
}
