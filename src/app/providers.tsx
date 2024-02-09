// app/providers.tsx
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);
  return <NextUIProvider>{children}</NextUIProvider>;
}
