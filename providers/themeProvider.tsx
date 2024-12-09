"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { isServer } from "@/common/helper/cookies";

export default function ThemeProvider({ children }: PropsWithChildren) {
  if (!isServer)
    return (
      <NextThemesProvider attribute="class" defaultTheme={"light"}>
        {children}
      </NextThemesProvider>
    );
}
