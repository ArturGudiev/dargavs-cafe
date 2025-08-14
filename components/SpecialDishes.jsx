"use client"

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Book from './SpecialDish'
import specialDishes from '@/utils/specialDishes'
import styles from '@/styles/components/SpecialDishes.module.scss'
import { Modal } from "react-responsive-modal";

const styles2 = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function SpecialDishes() {
  // const [showModal, setShowModal] = useState(false);
  
  return (
    <section className={styles.home} id='home'>
      <Swiper
        key='home-swiper'
        className={styles.swiper}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false
        }}
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }}
        loop={true}
        wrapperClass='swiper-wrapper'
      >
        {specialDishes.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Book {...item} />
            </SwiperSlide>
          )
        })}
        <div className='swiper-pagination' />
      </Swiper>

      {/* <Modal open={true} onClose={() => showModal = false}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal> */}

    </section>
  )
}

export default SpecialDishes
