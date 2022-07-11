import { Swiper, SwiperSlide } from "swiper/react";
import { IFeatureComic, IFeatureComics } from "interfaces/home";
import { ComicFeatureItem } from "modules/comic";
import "swiper/css";

interface HomeFeatureProps {
  featureComics: IFeatureComics;
}

const HomeFeature = ({ featureComics }: HomeFeatureProps) => {
  return (
    <div className="mt-5">
      <h2 className="py-3 font-bold color-[#333]">{featureComics?.headline}</h2>
      <Swiper spaceBetween={12} slidesPerView={6}>
        {featureComics?.comics?.map((comic: IFeatureComic) => (
          <SwiperSlide key={comic.slug}>
            <ComicFeatureItem data={comic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeFeature;
