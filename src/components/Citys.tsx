import {
  davlat1,
  davlat2,
  davlat3,
  davlat4,
  davlat5,
  davlat6,
} from "../assets";
import { useTranslation } from "react-i18next";

export default function Citys() {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div className="container mx-auto flex flex-col items-center justify-center mb-20 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("citys.sectionTitle")}
        </p>
        <h1 className="text-[45px] font-popins text-[#003760] font-semibold mt-4">
          {t("citys.title1")}
        </h1>
        <h1 className="text-[45px] font-playfair text-[#F15C36] font-semibold italic ">
          {t("citys.title2")}
        </h1>
        <p className="text-[16px] text-[#7A8A9E] font-roboto  mt-6 text-center ">
          {t("citys.desc")}
        </p>
        <div className="grid grid-cols-[repeat(3,450px)] gap-10 mt-8 ">
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat1}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat2}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat3}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat4}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat5}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat6}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
