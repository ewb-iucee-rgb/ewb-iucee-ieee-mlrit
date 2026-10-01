"use client";

import { useCallback, useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashDone = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      {children}
    </>
  );
}
