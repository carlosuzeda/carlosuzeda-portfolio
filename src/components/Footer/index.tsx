import { useTranslation } from "react-i18next";
import { FooterContainer } from "./style";

export default function Footer() {
  const { t } = useTranslation()
    return (
    <FooterContainer>
      <span>{t("Designed & Built by Carlos Uzeda")}</span>
    </FooterContainer>
      );
  }
  