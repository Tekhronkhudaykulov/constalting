import { partner1, partner2, partner3, partner4, partner5 } from "../assets";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Partners() {
  const { t } = useTranslation();
  return (
    <section id="partners">
      {" "}
      <div className="container mx-auto flex flex-col items-center justify-center mb-20  py-5">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("citys.sectionTitle")}
        </p>
        <div className="marquee mt-13">
          <div className="marquee__track">
            <LazyLoadImage
              src={partner1}
              alt="Partner 1"
              effect="blur" // 👈 Lazy load paytida blur effekt
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner2}
              alt="Partner 2"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner3}
              alt="Partner 3"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner4}
              alt="Partner 4"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner5}
              alt="Partner 5"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner1}
              alt="Partner 1"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner2}
              alt="Partner 2"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner3}
              alt="Partner 3"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner4}
              alt="Partner 4"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
            <LazyLoadImage
              src={partner5}
              alt="Partner 5"
              effect="blur"
              className="w-[260px] h-[75px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
