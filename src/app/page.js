"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export default function Page() {
  const boxElem = useRef();

  const handleDragTarget = (e) => {
    console.log(boxElem.current);
    console.log(e.clientX);
  };

  return (
    <div
      onDragOver={handleDragTarget}
      className={`h-full
     w-full border`}
    >
      <motion.div
        ref={boxElem}
        animate={{ x: 100 }}
        draggable
        className={`aspect-square border h-10 border-black bg-red-400`}
      />
    </div>
  );
}
