import { useState } from "react";

export const usecount = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return {
    onClickCountUp,
    count,
  };
};
