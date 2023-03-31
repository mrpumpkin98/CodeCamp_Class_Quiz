import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "나만의폰트";
  }

  @font-face {
    font-family: "나만의폰트";
    src: url("/fonts/SCDream4.otf");
  }
`;
