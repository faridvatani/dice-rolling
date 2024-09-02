export const DiceFace = ({
  number,
  isRolling,
}: {
  number: number;
  isRolling: boolean;
}) => {
  const dots: { [key: number]: number[][] } = {
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
  };

  return (
    <div
      className={`w-16 h-16 bg-white border-2 border-gray-800 rounded-md grid grid-cols-3 grid-rows-3 gap-1 p-1 ${
        isRolling ? "animate-roll" : ""
      }`}
    >
      {dots[number].map((dot, index) => (
        <div
          key={index}
          className={`w-4 h-4 bg-gray-800 rounded-full col-start-${
            dot[0] + 1
          } row-start-${dot[1] + 1}`}
        ></div>
      ))}
    </div>
  );
};
