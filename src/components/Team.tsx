import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { colective1, colective2, colective3, colective4 } from "../assets";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export default function Team() {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div className="container mx-auto flex items-center justify-center flex-col mb-20 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("team.sectionTitle")}
        </p>
        <p className="text-[20px] text-[#7A8A9E] font-inter  mt-6 ">
          {t("team.desc")}
        </p>
        <div className="container mx-auto mt-10 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={2}
            slidesPerView={4}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="mySwiper  "
          >
            {/* card1 */}
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective2}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card2.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card2.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card2.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective3}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card3.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card3.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card3.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective4}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card4.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card4.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card4.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
