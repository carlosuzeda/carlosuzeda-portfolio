import { Container } from "@/styles/pages/app"
import { ButtonMobile, HeaderContainer, NavContainer } from "./style"
import { X, List} from "phosphor-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useState } from 'react'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isNavBar, setIsNavBar] = useState(false)

  function changeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  function HandleActiveButtonOfMobile(){
    setIsNavBar((state) => !state)
  }

  return (
  <Container>
  <HeaderContainer>
    <div>
    <strong>CarlosUzeda</strong>

    <ButtonMobile 
onClick={HandleActiveButtonOfMobile}>
  {isNavBar? <X size={32}/> : <List size={32}/> }
</ButtonMobile>

    </div>
   
    <NavContainer className={isNavBar? 'open' : 'close'}>
        <ul>
            <li><Link href="">{t("home")}</Link></li>
            <li><Link href="">{t("about")}</Link></li>
            <li><Link href="">{t("work")}</Link></li>
            <li><Link href="">{t("contact")}</Link></li>
            <button 
            onClick={() => changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}>
            {i18n.language === 'pt' ? 'PT' : 'EN'}
            </button>
        </ul>
    </NavContainer>
  </HeaderContainer>
  </Container>
  )
}

