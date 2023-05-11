import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../../src/commons/inputs/01";
import Button01 from "../../../src/commons/buttons/01";

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
      작성자 : <Input01 type="text" register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br></br>
      비밀번호 : <Input01 type="password" register={register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      <br></br>
      제목 : <Input01 type="text" register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br></br>
      내용 : <Input01 type="text" register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br></br>
      <Button01 title="요청하기" isActive={formState.isValid} />
    </form>
  );
}
