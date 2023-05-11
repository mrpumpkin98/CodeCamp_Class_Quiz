import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .min(2, "작성자는 최소 2자리 이상 입력해 주세요.")
    .required("작성자를 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력입니다."),
  title: yup
    .string()
    .min(2, "제목은 최소 2자리 이상 입력해 주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .min(2, "내용은 최소 2자리 이상 입력해 주세요.")
    .required("내용을 입력해주세요."),
});

export default function Page(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br></br>
      비밀번호 : <input type="password" {...register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      <br></br>
      제목 : <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br></br>
      내용 : <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br></br>
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        요청하기
      </button>
    </form>
  );
}
