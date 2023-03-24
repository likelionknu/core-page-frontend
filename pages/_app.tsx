import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IndexHeader } from "./components/common/component/component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://knu-likelion.org/" />
        <meta property="og:title" content="멋쟁이사자처럼 강남대학교" />
        <meta property="og:image" content="https://url.kr/mzrxb6" />
        <meta
          property="og:description"
          content="멋쟁이사자처럼 강남대학교 지원 사이트"
        />
        <meta
          property="og:site_name"
          content="멋쟁이사자처럼 강남대학교 지원 사이트"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="description"
          content="멋쟁이사자처럼 강남대학교 지원 사이트"
        />
        <title> 멋쟁이사자처럼 </title>
      </Head>
      <GlobalStyles />
      <IndexHeader />
      <Component {...pageProps} />
    </>
  );
}
//gud dlrj gksrmffh djzp qkRnsms rjdpdy alcls aorqnr gkskeh ahfmrpTsp bb

//형 이거 안글러 어케 바꾸는 거에요 밈친 맥북 마나도 모르게ㅆ네 ㅠㅠ
