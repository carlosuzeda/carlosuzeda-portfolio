import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SocialMedia from '@/components/SocialMedia';
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import '../utils/i18n'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <SocialMedia/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
