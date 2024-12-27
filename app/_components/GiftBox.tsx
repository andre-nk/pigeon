"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

export default function GiftBox() {
  const [showSecondText, setShowSecondText] = useState(false);

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-black p-6 py-32">
      <h2
        className="cursor-pointer text-2xl font-semibold text-white"
        onClick={() => setShowSecondText(true)}
      >
        Eh? Ada kado??!!
      </h2>
      <div
        className={`flex w-full flex-col items-center justify-center space-y-16 ${showSecondText ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="mt-4 text-2xl font-semibold text-white transition-opacity duration-500">
          Ada dong! 😎
        </h2>
        <Dialog>
          <DialogTrigger>
            <button className="flex items-center justify-center rounded-xl bg-white px-10 py-5 text-2xl font-semibold text-black">
              Buka disini! 🎁
            </button>
          </DialogTrigger>
          <DialogContent className="w-[80%] rounded-xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Tunggu dulu yah! 😅
              </DialogTitle>
              <DialogDescription className="text-xl">
                Dijamin bagus!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
