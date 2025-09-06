import {
  davlat1,
  davlat2,
  davlat3,
  davlat4,
  davlat5,
  davlat6,
} from "../assets";

import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component"; // 🔥 qo'shildi
import "react-lazy-load-image-component/src/effects/blur.css"; // 🔥 qo'shildi

export default function Citys() {
  const { t } = useTranslation();
  return (
    <section id="city">
      <div className="container mx-auto mb-20 px-10">
        <div className=" flex flex-col items-center justify-center">
          <p
            className="text-[15px]  text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
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

          <div className="grid  min-[1280px]:grid-cols-[repeat(3,400px)] max-[768px]:grid-cols-[repeat(3,130px)] max-[480px]:grid-cols-[repeat(2,150px)] gap-10 max-[480px]:gap-3 mt-8">
            {/* Card 1 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="fade-right"
            >
              <LazyLoadImage
                src={davlat1}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 py-2 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white min-[768px]:text-[20px] font-popins text-[30px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="fade-up"
            >
              <LazyLoadImage
                src={davlat2}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <LazyLoadImage
                src={davlat3}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="flip-right"
            >
              <LazyLoadImage
                src={davlat4}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="flip-left"
            >
              <LazyLoadImage
                src={davlat5}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="relative group rounded-lg overflow-hidden shadow-2xl"
              data-aos="zoom-in"
            >
              <LazyLoadImage
                src={davlat6}
                alt="team"
                effect="blur"
                className="w-full h-[315px] max-[768px]:h-[150px] max-[480px]:h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white font-popins text-[30px] min-[768px]:text-[20px] font-bold">
                  {t("citys.card1.title")}
                </h1>
                <p className="text-white text-left px-7 text-[15px]/5 min-[768px]:text-[12px] line-clamp-6 font-roboto">
                  {t("citys.card1.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
