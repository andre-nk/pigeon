import { ChevronDown } from "lucide-react";
import React from "react";

export default function GradientBar({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative">
      <div className="chevron-container absolute inset-0 -top-[0.2px] z-10 flex items-start justify-center">
        <div
          className="relative flex h-12 w-1/6 items-center justify-center rounded-b-xl border border-t-0 bg-white shadow-lg"
          onClick={onClick}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </div>
      <div
        id="desktop-gradient-bar"
        className="-z-30 h-4 w-full drop-shadow-xl"
      />
    </div>
  );
}
