import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 70px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LayoutFooter(): JSX.Element {
  return <Wrapper>푸터영역</Wrapper>;
}
