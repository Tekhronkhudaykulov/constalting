import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function useAutoPlay(instanceRef: any, interval = 2000) {
  React.useEffect(() => {
    const slider = instanceRef.current; // Slider instansiyasini olish
    if (!slider) return; // Agar slider mavjud bo‘lmasa, hech narsa qilmaslik

    // let timeout: NodeJS.Timeout;
    let timeout: number;
    let mouseOver = false; // Sichqoncha slider ustida ekanligini kuzatish

    // Keyingi slaydga o‘tish funksiyasi
    const nextTimeout = () => {
      if (mouseOver) return; // Sichqoncha ustida bo‘lsa, hech narsa qilmaslik
      clearTimeout(timeout); // Oldingi timeout'ni tozalash
      timeout = setTimeout(() => {
        slider.next(); // Keyingi slaydga o‘tish
        nextTimeout(); // Qayta chaqirish (rekursiv)
      }, interval);
    };

    // Timeout'ni tozalash
    const clearNextTimeout = () => {
      clearTimeout(timeout);
    };

    // Sichqoncha hodisalari
    const handleMouseOver = () => {
      mouseOver = true;
      clearNextTimeout();
    };

    const handleMouseOut = () => {
      mouseOver = false;
      nextTimeout();
    };

    // Sichqoncha hodisalarini slider konteyneriga bog‘lash
    slider.container.addEventListener("mouseover", handleMouseOver);
    slider.container.addEventListener("mouseout", handleMouseOut);

    // Slider hodisalari
    slider.on("dragStarted", clearNextTimeout); // Drag boshlanganda to‘xtatish
    slider.on("animationEnded", nextTimeout); // Animatsiya tugaganda qayta boshlash
    slider.on("updated", nextTimeout); // Slider yangilanganda qayta boshlash

    // Sahifa yuklanganda darhol aylanishni boshlash
    nextTimeout();

    // useEffect tozalash funksiyasi
    return () => {
      clearTimeout(timeout);
      slider.container.removeEventListener("mouseover", handleMouseOver);
      slider.container.removeEventListener("mouseout", handleMouseOut);
    };
  }, [instanceRef, interval]); // instanceRef yoki interval o‘zgarsa qayta ishga tushadi
}

import { useTranslation } from "react-i18next";
import { colective1, colective2, colective3, colective4 } from "../assets";

export default function Team() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1, // Kichik ekranlar uchun default
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 }, // Kichik ekranlar (sm)
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 }, // Katta ekranlar (lg), bo‘shliqsiz
      },
    },
  });

  useAutoPlay(instanceRef, 2000);
  const { t } = useTranslation();
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

  return (
    <div className="container mx-auto my-15 px-10">
      <div className="mb-15 flex items-center justify-center">
        <p
          className="text-[15px]  text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
          data-aos="fade-down"
        >
          {t("citys.sectionTitle")}
        </p>
      </div>
      <div className="flex justify-center items-center   overflow-hidden">
        <div className="w-full ">
          <div ref={sliderRef} className="keen-slider">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="keen-slider__slide rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col h-full bg-gray-100 rounded-lg">
                  <div className="w-full h-[225px] bg-gray-200">
                    <LazyLoadImage
                      src={member.img}
                      alt={member.name}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h1 className="text-lg font-bold text-[#233876] font-inter">
                        {member.name}
                      </h1>
                      <p className="text-sm font-medium text-[#6B7280] mb-2">
                        {member.job}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] line-clamp-3">
                        {member.desc}
                      </p>
                      <div className="flex gap-4 mt-3">
                        <FaFacebookF size={20} className="text-[#6B7280]" />
                        <FaTwitter size={20} className="text-[#6B7280]" />
                        <FaGithub size={20} className="text-[#6B7280]" />
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
