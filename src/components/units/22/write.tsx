import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Edit } from "../../../commons/stores/index";
import { useRecoilState } from "recoil";

export default function StaticRoutingPage(props): JSX.Element {
  return (
    <div>
      <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
    </div>
  );
}
