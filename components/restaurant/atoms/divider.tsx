import * as React from "react";

export interface IDividerProps {
  text: string;
}

export function Divider({ text }: IDividerProps) {
  return (
    <div className="flex grsid-cols-[auto_sauto] mt-8 gap-2">
      {/* <div className="border my-auto border-gray-100 rounded-full" /> */}
      <h3 className="text-center text-gray-500 font-normal tracking-widest text-nowrap">
        {text.toUpperCase()}
      </h3>
      <div className="border my-auto border-gray-100 rounded-full w-full" />
    </div>
  );
}
