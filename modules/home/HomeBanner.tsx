import { IHomeBannerItem } from "interfaces/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "components/image";
import "swiper/css";

interface HomeBannerProps {
  banners: IHomeBannerItem[][];
}

const HomeBanner = ({ banners }: HomeBannerProps) => {
  return (
    <div className="mt-6 rounded-[10px] overflow-hidden">
      <Swiper spaceBetween={12} slidesPerView={1}>
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className={`relative w-full aspect-2`}>
              {banner?.map((item) => (
                <Image
                  key={item.id}
                  alt="banner"
                  url={item.imageUrl}
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
