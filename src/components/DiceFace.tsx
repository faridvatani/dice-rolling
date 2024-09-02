import React, { FC } from "react";
import { motion } from "framer-motion";

interface DiceFaceProps {
  number: number;
}

const dots: Record<number, [number, number][]> = {
  1: [[1, 1]],
  2: [
    [0, 0],
    [2, 2],
  ],
  3: [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  4: [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
  ],
  5: [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ],
  6: [
    [0, 0],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 2],
  ],
  7: [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
    [2, 1],
    [0, 1],
  ],
  8: [
    [0, 0],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 2],
    [0, 1],
    [2, 1],
  ],
  9: [
    [0, 0],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 2],
    [0, 1],
    [2, 1],
    [1, 1],
  ],
};

const DiceFace: FC<DiceFaceProps> = ({ number }) => {
  const dotPositions = dots[number] || [];
  return (
    <motion.div
      className="size-36 bg-white rounded-xl shadow-xl flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
    >
      {number < 10 ? (
        <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-1 w-full h-full p-2">
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <div
                key={`${row}-${col}-${number}`}
                className={`size-6 rounded-full ${
                  dotPositions.some(([r, c]) => r === row && c === col)
                    ? "bg-gray-700"
                    : ""
                }`}
              />
            )),
          )}
        </div>
      ) : (
        <div className="text-4xl font-bold">{number}</div>
      )}
    </motion.div>
  );
};

export default DiceFace;
