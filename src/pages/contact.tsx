import Image from "next/image";
import ContactImg from '../assets/contact.svg'
import JSONContact from '../assets/JSONContact.svg'
import { Button } from "@/styles/button";
import { Container, FragmentStyle } from "@/styles/pages/app";
import { ContactColumn, ContactContainer } from "@/styles/pages/contact";
export default function Contact(){
    return (
        <Container>
            <ContactContainer>
            <ContactColumn>
            <div>
            <FragmentStyle>{"<>"}</FragmentStyle><span>Get In Touch</span><FragmentStyle>{"</>"}</FragmentStyle>
            </div>
            <p>I’m interested in freelance and full-time opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate, my inbox is always open.</p>
            <Image src={JSONContact} alt=""/>
            <Button color={"gray"}>Say Hi</Button>
            </ContactColumn>
            <Image src={ContactImg} alt=""/>
            </ContactContainer>
        </Container>
    )
}