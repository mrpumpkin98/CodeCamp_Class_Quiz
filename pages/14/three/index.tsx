import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutSidebar from "./sidebar";
import LayoutBody from "./body";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();

  const Wrapper = styled.div`
    display: flex;
    height: 500px;
  `;

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
