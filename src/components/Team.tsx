import "keen-slider/keen-slider.min.css";
import { FaFacebookF, FaTelegram, FaLinkedin } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { colective1, colective2, colective3, colective4 } from "../assets";

export default function Team() {
  const { t } = useTranslation();
  const teamMembers = [
    {
      img: colective1,
      name: t("team.card1.name"),
      job: t("team.card3.job"),
      desc: t("team.card3.desc"),
      desc2: t("team.card3.desc2"),
      facebook: "#",
      telegram: "https://t.me/+447511988672",
      linkendin: "www.linkedin.com/in/rakhmonjon-khamidov-312974195",
    },
    {
      img: colective3,
      name: t("team.card3.name"),
      job: t("team.card1.job"),
      desc: t("team.card1.desc"),
      desc2: t("team.card1.desc2"),
      facebook: "#",
      telegram: "https://t.me/+998996838844",
      linkendin: "https://www.linkedin.com/in/iroda-khamidova-48280825a",
    },
    {
      img: colective4,
      name: t("team.card4.name"),
      job: t("team.card4.job"),
      desc: t("team.card4.desc"),
      desc2: t("team.card4.desc2"),
      facebook: "#",
      telegram: "#",
      linkendin: "#",
    },
    {
      img: colective2,
      name: t("team.card2.name"),
      job: t("team.card2.job"),
      desc: t("team.card2.desc"),
      facebook: "#",
      telegram: "#",
      linkendin: "#",
    },
  ];

  return (
    <div className="container mx-auto my-15 px-10">
      <div className="mb-8 flex items-center justify-center">
        <p
          className="text-[15px]  text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
          data-aos="fade-down"
        >
          {t("team.sectionTitle")}
        </p>
      </div>
      <div className="flex justify-center items-center   overflow-hidden">
        <div className="w-full ">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col h-full bg-gray-100 rounded-lg  md:text-left text-center">
                  <div className="h-[250px]">
                    <LazyLoadImage
                      src={member.img}
                      alt={member.name}
                      effect="blur"
                      className="h-[250px] object-cover "
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <div>
                      <h1 className="text-lg font-bold text-[#233876] font-inter">
                        {member.name}
                      </h1>
                      <p className="text-sm font-medium text-[#6B7280] mb-2">
                        {member.job}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] line-clamp-6 md:line-clamp-5">
                        {member.desc}
                        <br />
                        <br />
                        {member.desc2}
                      </p>
                      <div className="flex gap-4 md:justify-normal mt-4 justify-center">
                        <a target="_blank" href={member.facebook}>
                          <FaFacebookF size={20} className="text-[#6B7280]" />
                        </a>
                        <a target="_blank" href={member.telegram}>
                          <FaTelegram size={20} className="text-[#6B7280]" />
                        </a>
                        <a target="_blank" href={member.linkendin}>
                          <FaLinkedin size={20} className="text-[#6B7280]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
