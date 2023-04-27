import Image from "next/image";
import Profile from "../assets/profile.svg";
import Link from "next/link";
import { Container } from "@/styles/pages/app";
import { AboutColumn, AboutContainer, SkillsColumn, Status } from "@/styles/pages/about";
import { FragmentStyle } from "@/styles/pages/app";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation()

  return (
    <Container>
        <AboutContainer>
      <SkillsColumn>
        <Image src={Profile} alt="" />
        <ul>
          <li>
            <span>Front-end</span>
            <Status color={"yellow"}></Status>
          </li>
          <li>
            <span>Back-end</span>
            <Status color={"red"}></Status>
          </li>
          <li>
            <span>ReactJs</span>
            <Status color={"blue"}></Status>
          </li>
          <li>
            <span>NextJs</span>
            <Status color={"green"}></Status>
          </li>
        </ul>
      </SkillsColumn>

      <AboutColumn>
        <div>
        <FragmentStyle>{"<>"}</FragmentStyle><span>{t("About Me")}</span><FragmentStyle>{"</>"}</FragmentStyle>
        </div>
        <p>
          {t("I’m a Full Stack Developer located in Brazil. I have important skills such as critical thinking, sense of urgency, focus on results, good teamwork, proactivity, good dynamics and professional flexibility.")}
        </p>
        <p>
          {t("My focus is on creating engaging, accessible & performant interfaces for humans.")}
        </p>
        <p>
          {t("In recent months I have been studying NextJs and TypeScript. I am completely dedicated to development studies, I even do some personal projects to put into practice everything I have been learning.")}
        </p>
        <p>
          {t("Visit my")} <Link href="https://www.linkedin.com/in/carlos-uzeda/" target="_blank">LinkedIn</Link> {t("profile for more details")}
        </p>
        </AboutColumn>
      </AboutContainer>
    </Container>
  );
}
