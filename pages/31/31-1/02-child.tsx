import { memo, useMemo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);
  console.log("자이 자이 자식아!!!");

  return (
    <>
      <div>=============================</div>
      <h1>저는 자식 컴포넌트 입니다!!</h1>
      <div>=============================</div>
    </>
  );
}

export default memo(MemoizationWithChildPage);
