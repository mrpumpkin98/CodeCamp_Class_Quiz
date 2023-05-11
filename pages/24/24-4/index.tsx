import { useState } from "react";
import { usecount } from "../../../src/commons/hooks/setCount";

export default function QuizPage() {
  const { onClickCountUp, count } = usecount();
  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
