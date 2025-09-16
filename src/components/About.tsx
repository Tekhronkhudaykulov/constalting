import { useTranslation } from "react-i18next";
import { About1, About2 } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProgressBars from "./ProgressBar";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { key: "about.stats.admission", value: 98 },
    { key: "about.stats.visa", value: 97 },
    { key: "about.stats.grant", value: 65 },
    { key: "about.stats.help", value: 95 },
    { key: "about.stats.housing", value: 74 },
  ];

  return (
    <section id="about">
      <div className="sm:grid grid-cols-2 flex  justify-center container mx-auto  px-10 sm:gap-7 gap-12">
        {/* Left text */}
        <div className="sm:block flex flex-col justify-center items-center w-full" data-aos="fade-right">
          <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max">
            {t("about.sectionTitle")}
          </p>

          <h1
            className="lg:text-[50px]/13 md:text-[35px] about_title about_title_sm font-semibold font-popins text-[#003760] mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("about.title")} <br />
            <span className="text-[#F15C36]">{t("about.highlight")}</span>
          </h1>

          <p
            className="sm:text-[16px] text-center sm:text-left text-[14px] text-[#7A8A9E] font-popins mt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("about.desc1")}
          </p>
          <p
            className="sm:text-[16px] text-[13px] text-[#7A8A9E] font-popins"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("about.desc2")}
          </p>

          {/* Stats */}
          <div className="mt-5 space-y-8 w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#F0F5FB] rounded w-full"
                data-aos="fade-up"
                data-aos-delay={800 + i * 100}
              >
                <div className="flex items-center pl-3 justify-between w-[95%] py-1.5">
                  <p className="sm:text-[16px] text-[13px] text-[#323232]">{t(stat.key)}</p>
                  <p className="sm:text-[16px] text-[13px] text-[#323232]">{stat.value}%</p>
                </div>
                <ProgressBars values={[stat.value]} />
              </div>
            ))}
          </div>
        </div>

        {/* Right images */}
        <div className="w-full hidden sm:grid grid-cols-2">
          <div className="w-full">
            <LazyLoadImage
              src={About1}
              alt="About image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <LazyLoadImage
              src={About2}
              alt="About image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
