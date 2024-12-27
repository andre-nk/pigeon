"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function Greetings({ letter }: { letter: any }) {
  return (
    <div className="flex h-[77.5vh] flex-col items-start justify-center space-y-1 px-6 md:h-[80vh] md:px-[10%]">
      <h2 className="text-[4.5rem] leading-[5.5rem]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(letter.fields.greet)
              .callFunction(() => {
                document.querySelector(".Typewriter__cursor")?.remove();
              })
              .start();
          }}
          options={{
            cursor: "|",
            delay: 75,
            deleteSpeed: Infinity,
            autoStart: false,
            loop: false,
          }}
        />
      </h2>
      <h2 className="text-[4.5rem] font-bold leading-[5rem]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(letter.fields.greet.length * 75)
              .typeString(letter.fields.subject)
              .callFunction(() => {
                document.querySelector(".Typewriter__cursor")?.remove();
              })
              .start();
          }}
          options={{
            cursor: "|",
            delay: 75,
            deleteSpeed: Infinity,
            autoStart: false,
            loop: false,
          }}
        />
      </h2>
    </div>
  );
}
