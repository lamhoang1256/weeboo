import { Swiper, SwiperSlide } from "swiper/react";
import { TopComicCard } from "modules/comic";
import { ITopComic, ITopComics } from "interfaces/home";
import "swiper/css";

interface HomeBannerProps {
  topComics: ITopComics;
}

const HomeBanner = ({ topComics }: HomeBannerProps) => {
  return (
    <div className="mt-8">
      <Swiper spaceBetween={20} slidesPerView={7}>
        {topComics?.comics?.map((comic: ITopComic) => (
          <SwiperSlide key={comic.slug}>
            <TopComicCard data={comic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
