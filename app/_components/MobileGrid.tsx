import React from "react";

export default function MobileGrid() {
  return (
    <div>
      <div className="absolute left-1/2 top-[50%] -z-10 grid h-[75vh] w-full -translate-x-1/2 -translate-y-[50%] transform grid-cols-4 gap-[0px] lg:hidden">
        {Array(32)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-full w-full border-[0.8px] border-primary-gray border-opacity-20 bg-transparent"
            ></div>
          ))}
      </div>
      <div className="absolute left-1/2 top-[50%] -z-10 hidden h-[75vh] w-full -translate-x-1/2 -translate-y-[50%] transform grid-cols-6 gap-[0px] lg:grid">
        {Array(36)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-full w-full border-[0.8px] border-primary-gray border-opacity-20 bg-transparent"
            ></div>
          ))}
      </div>
    </div>
  );
}
