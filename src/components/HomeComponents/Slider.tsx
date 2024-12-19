/* eslint-disable import/no-anonymous-default-export */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  const swiperRef = useRef<any>(null);
  const { t } = useTranslation("home");

  return (
    <div className="relative bg-dividers2 py-20">
      <div className="text-center mb-8">
        <p className="font-medium text-customRed mb-1 uppercase bg-dividers2">
          {t("board")}
        </p>
        <h2 className="text-3xl font-medium mb-20 text-center uppercase">
          {t("title_slider")}
        </h2>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            470: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            857: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1256: {
              slidesPerView: 3.5,
            },
            1512: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/738c/423d/f0e9814614aabaa22389f52a3d144969?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dn5xYSmSkmL9vGdGLd3EybKVzTTHiG9EgFYxvJ21bqLPTlQx-IBtJatCtVCXkv-~zCuDSIqCMz70l-dC6kvN4nXep2UPMIkjBf34I~SsJScXdKFC5Hug-PXpB84LrVKk4zJpnWu1ve3vbp2M5I-ipFFqGtsslnLP2R6swcTbmJD2xIChWB8jNKow828fOjXnbOF8~av8m3HIKnbqip3mtcj7pu5bMC82OUdrpGAko98~U9DMQ8kb5BM-I~gEVeX9E6S4U3VKSihwsYxaFt7r5a5pm80AYCfiZJ5al3WFL5ZyNm3tkLTuGnbboCOi0Yx5R5FY4GB0NXexTfjqup6y2A__"
              alt="Slide 1"
              className="w-full h-[536px] 2xl:h-[636px] object-cover"
            />
            <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-text via-slide to-transparent text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold uppercase">Full name</h3>
            <p className="text-sm">Position</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/1554/27ea/4976c364e681cd8e8d6ae5b6a58818f2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKiDqti9OpoBh0e9XmzQMMLaMTNvOadybUa8eAmRb9LARyoZm7BfzXlpL3mb5R6py7O8p1ruHzouxu2v83H5Cx3xyKALrC~xrECYSkqhgxfza1AoaSqYIco0f6ibE7lNHOxFMFQyuX9pfLRveRU0mxK6-8fzjDXeCkUCfwEcsKDf-nqOVCGQmx3HdWUkRW6QXdrdJi3BznMAwzTnJ8hNEzeI8v3qg0kz7icqX~~n6xvLH-TFl1KSxEtvi~CKddBnsA4zBCW14gDkt~yrKTJUrGZXdMSpPkzylAwy4VU~WLSeq581b~ltKOqLKZLFyxklMRUKUovEPVnW2cVlk2k-rA__"
              alt="Slide 2"
              className="w-full h-[536px] 2xl:h-[636px] object-cover"
            />
                        <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-text via-slide to-transparent text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold uppercase">Full name</h3>
            <p className="text-sm">Position</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4fpuyebcfkVW2amKWtH5fRxW5xk9O9SQK~VHQ5PzvQN0lhdYto7kw72spiCkKbUYzQCKKC5wV-r7jMVZ9-sWTwKHi0Ah7vlSKL5eCTXRTkgtR4LMEr12GQipxIS68AdIA65uUFZcPnwiJ6NpaBJcm8xGNPXh0cDvEVJlroLmdPSHuFhCkEv8WoS7f1~gCuhQIIb0PHX-~i6yBDcGUv7-IFZ2sPDvQHpWaVx80pQ2pi6D8IGPIB~J~dWGUfK2Lepl~eay4V4m1ESfzb0ZZu8is4zyPAu8m4MW6d8VQibzs6b0EYcX9EDy5lPuQq60p30c9Wc5Y3sNot0jQU9mP-l8g__"
              alt="Slide 3"
              className="w-full h-[536px] 2xl:h-[636px] object-cover"
            />
                        <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-text via-slide to-transparent text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold uppercase">Full name</h3>
            <p className="text-sm">Position</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4fpuyebcfkVW2amKWtH5fRxW5xk9O9SQK~VHQ5PzvQN0lhdYto7kw72spiCkKbUYzQCKKC5wV-r7jMVZ9-sWTwKHi0Ah7vlSKL5eCTXRTkgtR4LMEr12GQipxIS68AdIA65uUFZcPnwiJ6NpaBJcm8xGNPXh0cDvEVJlroLmdPSHuFhCkEv8WoS7f1~gCuhQIIb0PHX-~i6yBDcGUv7-IFZ2sPDvQHpWaVx80pQ2pi6D8IGPIB~J~dWGUfK2Lepl~eay4V4m1ESfzb0ZZu8is4zyPAu8m4MW6d8VQibzs6b0EYcX9EDy5lPuQq60p30c9Wc5Y3sNot0jQU9mP-l8g__"
              alt="Slide 4"
              className="w-full h-[536px] 2xl:h-[636px] object-cover"
            />
                        <div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-text via-slide to-transparent text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold uppercase">Full name</h3>
            <p className="text-sm">Position</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
