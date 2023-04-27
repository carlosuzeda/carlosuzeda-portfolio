// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WorkContainer, WorkHeader, WorkItems } from "@/styles/pages/work";
import { Container, FragmentStyle } from "@/styles/pages/app";
import Link from "next/link";
import { Button } from "@/styles/button";
import WorkImage from "../assets/WorkImage.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import { getWork } from "@/lib/work";

interface WorkProps {
  jobs: {
    id: number;
    image: string;
    name: string;
    techs: string;
    url: string;
  }[];
}

export default function Work({ jobs }: WorkProps) {
  const { t } = useTranslation();

  return (
    <main>
      <WorkHeader>
        <FragmentStyle>{"<>"}</FragmentStyle>
        <span>{t("work")}</span>
        <FragmentStyle>{"</>"}</FragmentStyle>
      </WorkHeader>
      <WorkContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >

          {jobs.map((work) => {
            console.log(work.image)
            return (
              <SwiperSlide key={work.id}>
                <WorkItems>
                  <Image src={work.image || WorkImage} width={188} height={188} alt="" />
                  <footer>
                    <strong>{work.name}</strong>
                    <p>{work.techs}</p>
                    <Button color={"black"}>
                      <Link href={work.url} target="_blank">{t("View Project")}</Link>
                    </Button>
                  </footer>
                </WorkItems>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WorkContainer>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getWork();
  return {
    props: {
      jobs,
    },
    revalidate: 60 * 60 * 2,
  };
};
