import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 20%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LayoutSidebar(): JSX.Element {
  return <Wrapper>사이드바 영역</Wrapper>;
}
