export interface Dice {
  diceType: number;
  roll: number;
}

export const rollDice = (diceType: number = 6): number => {
  return Math.floor(Math.random() * diceType) + 1;
};

export const rollMultipleDice = (
  diceType: number = 6,
  numberOfDice: number = 1,
): Dice[] => {
  return Array.from({ length: numberOfDice }, () => ({
    diceType,
    roll: rollDice(diceType),
  }));
};
