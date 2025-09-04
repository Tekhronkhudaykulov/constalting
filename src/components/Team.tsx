import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { colective1, colective2, colective3, colective4 } from "../assets";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

export default function Team() {
  const { t } = useTranslation();

  // 🔹 Barcha cardlarni massivga yig‘amiz
  const teamMembers = [
    {
      img: colective1,
      name: t("team.card1.name"),
      job: t("team.card1.job"),
      desc: t("team.card1.desc"),
    },
    {
      img: colective2,
      name: t("team.card2.name"),
      job: t("team.card2.job"),
      desc: t("team.card2.desc"),
    },
    {
      img: colective3,
      name: t("team.card3.name"),
      job: t("team.card3.job"),
      desc: t("team.card3.desc"),
    },
    {
      img: colective4,
      name: t("team.card4.name"),
      job: t("team.card4.job"),
      desc: t("team.card4.desc"),
    },
    {
      img: colective1,
      name: t("team.card1.name"),
      job: t("team.card1.job"),
      desc: t("team.card1.desc"),
    },
    {
      img: colective1,
      name: t("team.card1.name"),
      job: t("team.card1.job"),
      desc: t("team.card1.desc"),
    },
  ];
  const firstHalf = teamMembers.slice(0, 2);
  const secondHalf = teamMembers.slice(2);
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center flex-col mb-20 px-10 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("team.sectionTitle")}
        </p>
        <p className="text-[20px] text-[#7A8A9E] font-inter  mt-6 ">
          {t("team.desc")}
        </p>
        <div className="container mx-auto mt-3 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={2}
            slidesPerView={4}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="mySwiper  "
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3  ">
                  <div className="flex flex-col  ">
                    <div className="w-full h-[225px] team_img_card bg-red-500">
                      <img
                        src={member.img}
                        alt=""
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="p-4 pb- team_card flex flex-col justify-between">
                      <div>
                        <h1 className="text-[18px]  team_name font-bold text-[#233876] font-inter ">
                          {member.name}
                        </h1>
                        <p className="font-medium font-inter text-[16px]  text-[#6B7280] mb-2">
                          {member.job}
                        </p>
                      </div>
                      <div>
                        <p className="font-inter font-normal text-[16px] team_job text-[#6B7280] line-clamp-3">
                          {member.desc}
                        </p>
                        <div className="flex gap-5 mt-4">
                          <FaFacebookF size={22} className="text-[#6B7280]" />
                          <FaTwitter size={22} className="text-[#6B7280]" />
                          <FaGithub size={22} className="text-[#6B7280]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
