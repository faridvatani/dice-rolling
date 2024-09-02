"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DiceFace from "@/components/DiceFace";
import { Dice, rollDices, RollResult } from "@/utils/utils";

export default function Home() {
  const [dice, setDice] = useState<Dice>({ sides: 6, quantity: 1 });
  const [result, setResult] = useState<RollResult | null>(null);

  const handleRoll = () => {
    setResult(rollDices(dice));
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-10 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-sm bg-white p-6 mx-auto mb-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Roll the dice</h1>
          <div className="mb-4">
            <label
              htmlFor="dice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of sides
            </label>
            <input
              type="number"
              id="dice"
              min={1}
              className="border border-gray-300 p-2 rounded w-full"
              value={dice.sides}
              onChange={(e) =>
                setDice({ ...dice, sides: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min={1}
              className="border border-gray-300 p-2 rounded w-full"
              value={dice.quantity}
              onChange={(e) =>
                setDice({ ...dice, quantity: parseInt(e.target.value) })
              }
            />
          </div>
          <button
            onClick={handleRoll}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Roll
          </button>
        </div>

        {result && (
          <motion.div
            key={result.total}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            <p className="text-lg font-semibold">Total Sum: {result.total}</p>
            <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row gap-5 mt-16">
              {result.rolls.map((roll, index) => (
                <DiceFace key={index} number={roll} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
