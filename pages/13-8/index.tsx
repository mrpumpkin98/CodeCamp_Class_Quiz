import { useState } from "react";

export default function CounterStatePage() {
  const [state, setState] = useState(0);

  function onClickCountUp() {
    setState((prev) => prev + 4);
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
