import Herobg from "./components/heroBg"
import About from "./components/about"
import Sevices from "./components/services"
import Skills from "./components/skills"
import Subscribe from "./components/subscribe"
import Steps from "./components/steps"
import Questions from "./components/questions"
import OurWorks from "./components/ourworks"

export default function Home() {
  return (
    <div>

      <Herobg />
      <About />
      <Sevices/>
      <Skills/>
      <Steps/>
      <Questions/>
      <OurWorks/>
      <Subscribe/>
    </div>
  );
}
