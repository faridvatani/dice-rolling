/**
 * Represents a dice with a specified number of sides and quantity.
 */
export interface Dice {
  sides: number;
  quantity: number;
}

/**
 * Represents the result of rolling dice.
 */
export interface RollResult {
  total: number;
  rolls: number[];
}

/**
 * Rolls a single dice with the specified number of sides.
 * @param sides - The number of sides on the dice.
 * @returns A random number between 1 and the number of sides.
 */
export const rollDice = (sides: number = 6): number => {
  return Math.floor(Math.random() * sides) + 1;
};

/**
 * Validates if the given dice object is valid.
 * @param dice - The dice object to validate.
 * @returns True if the dice is valid, otherwise false.
 */
export const isValidDice = (dice: Dice): boolean => {
  return (
    Number.isInteger(dice.sides) &&
    dice.sides > 0 &&
    Number.isInteger(dice.quantity) &&
    dice.quantity > 0
  );
};

/**
 * Rolls the specified number of dice and returns the result.
 * @param dice - The dice object specifying the number of sides and quantity.
 * @returns An object containing the total and individual rolls.
 * @throws Will throw an error if the dice object is invalid.
 */
export const rollDices = (dice: Dice): RollResult => {
  if (!isValidDice(dice)) {
    throw new Error(`Invalid dice configuration: ${JSON.stringify(dice)}`);
  }

  const rolls = Array.from({ length: dice.quantity }, () =>
    rollDice(dice.sides),
  );
  const total = rolls.reduce((sum, roll) => sum + roll, 0);

  return { total, rolls };
};
