import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 70px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LayoutNavigation(): JSX.Element {
  return <Wrapper>내비게이션 영역</Wrapper>;
}
