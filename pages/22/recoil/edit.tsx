import BoardDetail from "../../../src/components/units/22/write";
import { Edit } from "../../../src/commons/stores/index";
import { useRecoilState } from "recoil";

export default function StaticRoutingPage(): JSX.Element {
  return (
    <div>
      <BoardDetail isEdit={Edit} />
    </div>
  );
}
