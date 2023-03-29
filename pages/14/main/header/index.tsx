import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 70px;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LayoutHeader(): JSX.Element {
  return <Wrapper>푸터영역</Wrapper>;
}
