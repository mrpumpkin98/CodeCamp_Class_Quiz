import { useQuery, gql } from "@apollo/client";
import type { MouseEvent } from "react";

export default function StaticRoutingPage(): JSX.Element {
  const onClickButton = () => {
    console.log(123);
  };
  return (
    <div>
      <button onClick={onClickButton}>이건 버튼</button>
    </div>
  );
}
