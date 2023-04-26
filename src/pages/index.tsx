import Head from 'next/head'
import Image from 'next/image'
import homeDeveloper from '../assets/home-developer.svg'
import { Container } from '@/styles/pages/app'
import { ContainerHome, FragmentStyle, InfoHome } from '@/styles/pages/home'
import { Button } from '@/styles/button'
import { useTranslation } from 'react-i18next'



export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Carlos Uzeda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

      <ContainerHome>
      <div>
      <FragmentStyle>{"<>"}</FragmentStyle>

      <span>{t("Hi, my name is")}</span>
      <InfoHome>
      <span>{t("Carlos Uzeda.")}</span>
      <strong>{t("I’m Full Stack Developer")}</strong>
      </InfoHome>
      <span>{t("Welcome to my Web Portfolio!")}</span>
 
      <FragmentStyle>{"</>"}</FragmentStyle>
      <Button color='gray'>{t("Learn more")}</Button>
      </div>
      <Image src={homeDeveloper} alt=''/>
      </ContainerHome>
   
      </Container>
    
    </>
  )
}
