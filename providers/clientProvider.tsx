"use client";
import ScrollToTopButton from "@/components/form/buttons/scrollToTop";
import { PropsWithChildren } from "react";

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
    <div>
      <ScrollToTopButton />
      {/* <CustomizeSection /> */}
      {children}
    </div>
  );
}
