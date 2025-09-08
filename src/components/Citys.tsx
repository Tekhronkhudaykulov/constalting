import {
  davlat1,
  davlat2,
  davlat3,
  davlat4,
  davlat5,
  davlat6,
} from "../assets";

import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Citys() {
  const { t } = useTranslation();

  // 🔥 Cardlar uchun massiv
  const cards = [
    {
      img: davlat1,
      aos: "fade-right",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
    {
      img: davlat2,
      aos: "fade-up",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
    {
      img: davlat3,
      aos: "fade-left",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
    {
      img: davlat4,
      aos: "flip-right",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
    {
      img: davlat5,
      aos: "flip-left",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
    {
      img: davlat6,
      aos: "zoom-in",
      title: "citys.card1.title",
      desc: "citys.card1.desc",
    },
  ];

  return (
    <section id="city">
      <div className="container mx-auto mb-20 px-10">
        <div className="flex flex-col items-center justify-center">
          <p
            className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
            data-aos="fade-down"
          >
            {t("citys.sectionTitle")}
          </p>
          <h1
            className="text-[45px] max-[480px]:text-[20px] max-[480px]:text-center font-popins text-[#003760] font-semibold mt-4"
            data-aos="fade-up"
          >
            {t("citys.title1")}
          </h1>
          <h1
            className="text-[45px] max-[480px]:text-[20px] max-[480px]:text-center font-playfair text-[#F15C36] font-semibold italic"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("citys.title2")}
          </h1>
          <p
            className="text-[16px] max-[480px]:text-[10px] text-[#7A8A9E] font-roboto mt-6 text-center"
            data-aos="zoom-in"
          >
            {t("citys.desc")}
          </p>

          {/* 🔥 Map orqali cardlarni chiqarish */}
          <div className="grid 2xl:grid-cols-[repeat(3,350px)] md:grid-cols-[repeat(2,300px)] max-[480px]:grid-cols-[repeat(1,300px)] gap-10 max-[480px]:gap-3 mt-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-2xl"
                data-aos={card.aos}
              >
                <div className="md:h-[320px]  max-[768px]:h-[300px]">
                  <LazyLoadImage
                    src={card.img}
                    alt={`city-${i}`}
                    effect="blur"
                    className="w-full h-[325px] object-cover transition-all duration-1000 group-hover:scale-105 "
                  />
                </div>

                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                    {t(card.title)}
                  </h1>
                  <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                    {t(card.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
