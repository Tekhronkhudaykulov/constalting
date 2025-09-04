import { useTranslation } from "react-i18next";
import {
  DavlatIcon,
  ExportIcon,
  HomeIcon,
  HujjatIcon,
  QabulIcon,
  UniverIcon,
} from "../assets/Icons";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="px-10   grid lg:grid-cols-[repeat(6,285px)] md:grid-cols-[repeat(3,215px)]  grid-cols-3  justify-center items-center sm:gap-7 gap-4  -translate-y-13  w-full">
        {/* ---------- */}
        <div className="flex flex-col p-6 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <HomeIcon className="w-[65px] h-[65px]  group-hover:text-white text-[#f15c36] --- servic_icon  servic_icon_sm" />
          <h1
            className="text-[18px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service1")}
          </h1>
        </div>

        {/* ----------------- */}
        <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <HujjatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
          <h1
            className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service2")}
          </h1>
        </div>
        <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <DavlatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
          <h1
            className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service3")}
          </h1>
        </div>
        <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <ExportIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
          <h1
            className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service4")}
          </h1>
        </div>
        <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <UniverIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
          <h1
            className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service5")}
          </h1>
        </div>
        <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
          <QabulIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
          <h1
            className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
    font-size: ;
  } "
          >
            {t("services.service6")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
