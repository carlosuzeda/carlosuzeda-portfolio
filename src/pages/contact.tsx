import Image from "next/image";
import ContactImg from '../assets/contact.svg'
import JSONContact from '../assets/JSONContact.svg'
import JSONContactPT from '../assets/JSONContactPT.svg'
import { Button } from "@/styles/button";
import { Container, FragmentStyle } from "@/styles/pages/app";
import { ContactColumn, ContactContainer } from "@/styles/pages/contact";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function Contact(){
    const { t, i18n } = useTranslation()

    return (
        <Container>
            <ContactContainer>
            <ContactColumn>
            <div>
            <FragmentStyle>{"<>"}</FragmentStyle><span>{t("Get In Touch")}</span><FragmentStyle>{"</>"}</FragmentStyle>
            </div>
            <p>{t("I’m interested in freelance and full-time opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate, my inbox is always open.")}</p>
            <Image src={i18n.language === 'pt' ? JSONContactPT : JSONContact} alt=""/>
            <Button color={"gray"}><Link href={"mailto:carlosuzeda.dev@gmail.com"}>{t("Say Hi")}</Link></Button>
            </ContactColumn>
            <Image src={ContactImg} alt=""/>
            </ContactContainer>
        </Container>
    )
}