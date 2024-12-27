"use client";

import React, { useRef } from "react";
import Image from "next/image";
import GradientBar from "./GradientBar";

export default function LetterPageClient({ letter }: { letter: any }) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <GradientBar onClick={scrollToGallery} />
      {letter.fields.gallery && (
        <div
          ref={galleryRef}
          className="mt-[20vh] flex h-fit shrink-0 snap-y snap-mandatory flex-col items-center space-y-8 overflow-y-scroll px-6 md:px-[10%] lg:px-[20%]"
        >
          {letter.fields.gallery.map((photo: any) => {
            return (
              <div
                key={photo!.sys.id}
                className="flex snap-center flex-col items-center justify-center space-y-2"
              >
                <Image
                  src={`https:${photo!.fields.file!.url}`}
                  alt={photo!.fields.title!}
                  width={photo!.fields.file!.details.image!.width}
                  height={photo!.fields.file!.details.image!.height}
                  className="rounded-2xl"
                />
                <p className="font-mono">{photo.fields.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
