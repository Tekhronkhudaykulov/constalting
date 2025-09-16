import { jarayon1, jarayon2, jarayon3, jarayon4 } from "../assets";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Process() {
  const { t } = useTranslation();

  const steps = [
    { img: jarayon1, title: t("process.step1") },
    { img: jarayon2, title: t("process.step2") },
    { img: jarayon4, title: t("process.step3") },
    { img: jarayon3, title: t("process.step4") },
  ];
  return (
    <section id="event">
      <div
        className="container mx-auto px-10 flex flex-col items-center justify-center py-15"
        data-aos="fade-up"
      >
        <p
          className="text-[16px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
          data-aos="fade-down"
        >
          {t("process.sectionTitle")}
        </p>
        <h1
          className="text-[40px] proces_title font-popins text-[#003760] font-semibold mt-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {t("process.title1")}
        </h1>
        <h1
          className="text-[40px] proces_title font-playfair text-[#F15C36] font-semibold italic"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {t("process.title2")}
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center sm:gap-3 gap-6 mt-6">
          {steps.map((item, index) => (
            <div
              className="flex flex-col  items-center justify-start gap-4 proces_cards proces_cards_sm h-[350px]  "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
                <LazyLoadImage
                  src={item.img}
                  alt="About image 1"
                  effect="blur"
                  className="w-[210px] h-[210px] max-[480px]:h-full max-[480px]:w-full proces_img object-center rounded-full"
                />
                <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
                  <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <h1 className="sm:text-[18px] text-[16px] text-center font-bold font-georgia text-[#1A1A1A]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
