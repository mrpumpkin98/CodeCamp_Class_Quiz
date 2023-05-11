import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

export default function Page(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <br></br>
      비밀번호 : <input type="password" {...register("password")} />
      <br></br>
      제목 : <input type="text" {...register("title")} />
      <br></br>
      내용 : <input type="text" {...register("contents")} />
      <br></br>
      <button>요청하기</button>
    </form>
  );
}
