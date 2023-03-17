/** @jsxImportSource @emotion/react */
import { textProps } from "@/@types/type";
import { css } from "@emotion/react";
import React from "react";
import {
  ApplyButton,
  BackGroundImg,
  Icon,
  IconBox,
  MainArticle,
  MainTitle,
} from "./component/component";
import backgroundImg from "../../../images/background.png";
import scroll from "../../../images/scroll.png";

export default function Main() {
  return (
    <section
      css={css`
        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <BackGroundImg src={backgroundImg} />
      <MainArticle />
      <IconBox />
      <Icon src={scroll} alt="스크롤" />
    </section>
  );
}
