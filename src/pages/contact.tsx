import Image from "next/image";
import ContactImg from '../assets/contact.svg'
export default function Contact(){
    return (
        <main>
            <div>
            <span>Get In Touch</span>
            <p>I’m interested in freelance and full-time opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate, my inbox is always open.</p>
            </div>
            <Image src={ContactImg} alt=""/>
        </main>
    )
}