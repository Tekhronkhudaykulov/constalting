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
import { useState } from "react";

export default function Citys() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null);

  // 🔥 Cardlar uchun massiv
  const cards = [
    {
      img: davlat1,
      aos: "fade-right",
      title: "citys.card1.title",
      desc: "citys.card1.desc1",
      desc2: "citys.card1.desc2",
    },
    {
      img: davlat2,
      aos: "fade-up",
      title: "citys.card2.title",
      desc: "citys.card2.desc1",
      desc2: "citys.card2.desc2",
    },
    {
      img: davlat3,
      aos: "fade-left",
      title: "citys.card3.title",
      desc: "citys.card3.desc1",
      desc2: "citys.card3.desc2",
    },
    {
      img: davlat4,
      aos: "flip-right",
      title: "citys.card4.title",
      desc: "citys.card4.desc1",
      desc2: "citys.card4.desc2",
    },
    {
      img: davlat5,
      aos: "flip-left",
      title: "citys.card5.title",
      desc: "citys.card5.desc1",
      desc2: "citys.card5.desc2",
    },
    {
      img: davlat6,
      aos: "zoom-in",
      title: "citys.card6.title",
      desc: "citys.card6.desc1",
      desc2: "citys.card6.desc2",
    },
  ];

  const handleCardClick = (index: any) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="city">
      <div className="container mx-auto mb-20 px-10 py-15">
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
            className="text-[16px] max-[480px]:text-[14px] text-[#7A8A9E] font-roboto mt-6 text-center"
            data-aos="zoom-in"
          >
            {t("citys.desc")}
          </p>

          <div className="grid 2xl:grid-cols-[repeat(3,350px)] md:grid-cols-[repeat(3,300px)] max-[480px]:grid-cols-[repeat(1,300px)] gap-10 max-[480px]:gap-3 mt-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-2xl"
                data-aos={card.aos}
                onClick={() => handleCardClick(i)}
              >
                <div className="md:h-[420px] max-[768px]:h-[350px]">
                  <LazyLoadImage
                    src={card.img}
                    alt={`city-${i}`}
                    effect="blur"
                    className="w-full h-[425px] object-fill transform transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-102"
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-around transition-opacity duration-500 ${
                    activeCard === i || "group-hover:opacity-100 opacity-0"
                  }`}
                >
                  <h1 className="text-white font-popins md:text-[20px] text-[16px] font-bold">
                    {t(card.title)}
                  </h1>
                  <p className="text-white text-left px-7 md:text-[14px]/[18px] text-[12px] font-roboto">
                    {t(card.desc)}
                    <br />
                    <br />
                    {t(card.desc2)}
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