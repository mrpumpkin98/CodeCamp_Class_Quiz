import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("컴포넌트가 마운트됐습니다~");
  }, []);

  useEffect(() => {
    count && alert("컴포넌트가 변경됐습니다~");
  }, [count]);

  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  const onClickCounter = (): void => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
