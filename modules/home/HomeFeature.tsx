import { Swiper, SwiperSlide } from "swiper/react";
import { ITopComic, ITopComics } from "interfaces/home";
import { ComicFeatureItem } from "modules/comic";
import "swiper/css";

interface HomeFeatureProps {
  topComics: ITopComics;
}

const HomeFeature = ({ topComics }: HomeFeatureProps) => {
  return (
    <div className="mt-5">
      <h2 className="py-3 font-bold color-[#333]">{topComics.headline}</h2>
      <Swiper spaceBetween={12} slidesPerView={7}>
        {topComics?.comics?.map((comic: ITopComic) => (
          <SwiperSlide key={comic.slug}>
            <ComicFeatureItem data={comic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeFeature;
