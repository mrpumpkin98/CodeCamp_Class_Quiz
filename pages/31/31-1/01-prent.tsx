import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationPage(): JSX.Element {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억

  const aaa = useMemo(() => Math.random(), []);

  // 2. useCallback으로 함수 기억

  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback으로 함수 기억 => state 사용 주의

  const onClickCountState = useCallback((): void => {
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>=============================</div>
      <h1>저는 부모 컴포넌트 입니다!!</h1>
      <div>카운트(let) : {countLet} </div>
      <button onClick={onClickCountLet}>카운트(state) +1 올리기</button>

      <div>카운트(state) : {countState} </div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <div>=============================</div>
      <MemoizationWithChildPage />
    </>
  );
}
