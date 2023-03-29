import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LayoutBody(): JSX.Element {
  return <Wrapper>바디 영역 입니다</Wrapper>;
}
