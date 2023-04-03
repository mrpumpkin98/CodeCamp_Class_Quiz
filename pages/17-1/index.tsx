import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [counter, setCount] = useState(false);
  const router = useRouter();

  useEffect(() => {
    alert("Rendered");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [counter]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickCountUp = (): void => {
    console.log(counter);
    setCount(true);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={onClickCountUp}>변경</button>
      <button onClick={onClickMove}>나가라우</button>
    </>
  );
}
