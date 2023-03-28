import Ideal from "@/src/components/ideal/Ideal";
import Branding from "../src/components/branding/Branding";
import Introduce from "../src/components/introduce/Introduce";
import Main from "../src/components/main/Main";
import Skill from "../src/components/skill/Skill";
import { Footer } from "@/src/components/common/component/component";
import Ending from "@/src/components/ending/Ending";
import Opening from "@/src/components/opening/Opening";

export default function Home() {
  return (
    <>
      <Main />
      <Opening />
      <Introduce />
      <Branding />
      <Skill />
      <Ideal />
      <Ending />
      <Footer />
    </>
  );
}
