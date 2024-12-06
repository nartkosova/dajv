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
  const { t } = useTranslation("slider");

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative bg-dividers2 h-screen">
      <div className="text-center mb-8">
        <p className="font-medium text-customRed mb-1 uppercase bg-dividers2">
          {t("board")}
        </p>
        <h2 className="text-3xl font-medium mb-20 text-center">
          LOREM IPSUM IS SIMPLY
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
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper: any) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/738c/423d/f0e9814614aabaa22389f52a3d144969?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aO1zE5efjX5xSD404QwONiRv327~0f377sc3AWO62yOCRNgx6jZi0EeueLW6KHzICkhS7vEvS0uZfemZVv31zpkrKHmIFj332RPuLqny1BHsz6PFMt-OUHm76sc0vwtywFPUBPYRl1OZU7KCVSuKsI1S0xBDVSbtvCe15Y5dAcskzCczbyLMWkt7aB06gneqvuPXAyaEAJYIbT8B1yGga59sGVSX0cmvWlluoA-M5NiMSGFojCadvxMbPDJljQ09Av2Js1kq1Huphy83vhWstEJJYGqQVh4gvGBJLbjL7YlLQaFPhgd4Yvjsihba~WwaBSr~MaMzrrmBbMWCeGEYgw__"
              alt="Slide 1"
              className="w-[404px] h-[536px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/1554/27ea/4976c364e681cd8e8d6ae5b6a58818f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WL1zx3cYyhmv1GJBm873zTtzmzr4fR-FC6BjPrhF0mdUh1Ybc00QWPksYSvug1eSNJq4TiF1BbKEU6s28Q7L1~Tybvav-cXDDkX9kQtxUCfA2Oiu9ohFIyE6ibo8LdBvaMUu~FKvn9USkhXNogeVB~Jfx33uTS0K5pfcwip9BqbzDS~3uYduQhb0vvqG3Y0UjvrF~Wg6xpN4sfnaVlM1gILM0jT~R3DGhwPv4s4F6AepY7e18QgyncBFS8P0XMqORxU1UssTMxrcsSgXFKnv2fl1Jt69762yuknRyNMtY6i07mBr-Yyuwoqs43v9ffY2XHfhLWj8~JK385DGJeLZVg__"
              alt="Slide 2"
              className="w-[404px] h-[536px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfeINBu3dY-TvwbTigHC6ZIaK2X0pbBCfjhsnht2n6CzTTVzCBeEKrSWLN03a3kZra0dUUpEMBf302bsw5ufi2RHCe7rqAAh~x8NloLiLRtDwx7cvJLCPAPl4NXeddJWvc7tvGtDSvRt2lPfd3RGpyGbjyf--tfa57vIr51cva4G5M1RNHaiZXPqbuZMkCS6VbqTC1ov9saZv5ygv9u~LQyVu-vxdwvGy2hw0ZqTdglxGRIIoXrUsLOiv9B4u4PbogxW5G20IdVJFyA8mK5jrexwX2p3ENS6fFHSVteYB9CJCmLw22pfKyEyMmWJgbsqczNvp0-nenV507qPXsUstg__"
              alt="Slide 3"
              className="w-[404px] h-[536px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/1554/27ea/4976c364e681cd8e8d6ae5b6a58818f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WL1zx3cYyhmv1GJBm873zTtzmzr4fR-FC6BjPrhF0mdUh1Ybc00QWPksYSvug1eSNJq4TiF1BbKEU6s28Q7L1~Tybvav-cXDDkX9kQtxUCfA2Oiu9ohFIyE6ibo8LdBvaMUu~FKvn9USkhXNogeVB~Jfx33uTS0K5pfcwip9BqbzDS~3uYduQhb0vvqG3Y0UjvrF~Wg6xpN4sfnaVlM1gILM0jT~R3DGhwPv4s4F6AepY7e18QgyncBFS8P0XMqORxU1UssTMxrcsSgXFKnv2fl1Jt69762yuknRyNMtY6i07mBr-Yyuwoqs43v9ffY2XHfhLWj8~JK385DGJeLZVg__"
              alt="Slide 4"
              className="w-[404px] h-[536px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
