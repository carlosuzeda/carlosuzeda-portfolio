// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { WorkContainer, WorkHeader, WorkItems } from '@/styles/pages/work'
import { Container, FragmentStyle } from '@/styles/pages/app'
import Link from 'next/link'
import { Button } from '@/styles/button'
import WorkImage from '../assets/WorkImage.svg'
import Image from 'next/image'

export default function Work(){
    return (
        <main>
            <WorkHeader>
            <FragmentStyle>{"<>"}</FragmentStyle><span>Work</span><FragmentStyle>{"</>"}</FragmentStyle>
            </WorkHeader>
        <WorkContainer>
        <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
            380: {
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
  
            <SwiperSlide>
              <WorkItems>
                <Image src={WorkImage} alt="" />
                <footer>
                  <strong>Anos 3000</strong>
                  <p>ReactJs etc</p>
                  <Button color={"black"}>
                    <Link href={""}>
                      View Project
                    </Link>
                  </Button>
                </footer>
              </WorkItems>
            </SwiperSlide>

            <SwiperSlide>
              <WorkItems>
                <Image src={WorkImage} alt="" />
                <footer>
                  <strong>Anos 3000</strong>
                  <p>ReactJs etc</p>
                  <Button color={"black"}>
                    <Link href={""}>
                      View Project
                    </Link>
                  </Button>
                </footer>
              </WorkItems>
            </SwiperSlide>

            <SwiperSlide>
              <WorkItems>
                <Image src={WorkImage} alt="" />
                <footer>
                  <strong>Anos 3000</strong>
                  <p>ReactJs etc</p>
                  <Button color={"black"}>
                    <Link href={""}>
                      View Project
                    </Link>
                  </Button>
                </footer>
              </WorkItems>
            </SwiperSlide>


            <SwiperSlide>
              <WorkItems>
                <Image src={WorkImage} alt="" />
                <footer>
                  <strong>Anos 3000</strong>
                  <p>ReactJs etc</p>
                  <Button color={"black"}>
                    <Link href={""}>
                      View Project
                    </Link>
                  </Button>
                </footer>
              </WorkItems>
            </SwiperSlide>

      </Swiper>
      </WorkContainer>
        </main>
        
    )
}