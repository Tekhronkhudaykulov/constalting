// import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
// import { colective1, colective2, colective3, colective4 } from "../assets";
// import { useTranslation } from "react-i18next";
// // @ts-ignore
// import "swiper/css";
// // @ts-ignore
// import "swiper/css/autoplay";

// export default function Team() {
//   const { t } = useTranslation();

//   // 🔹 Barcha cardlarni massivga yig‘amiz
//   const teamMembers = [
//     {
//       img: colective1,
//       name: t("team.card1.name"),
//       job: t("team.card1.job"),
//       desc: t("team.card1.desc"),
//     },
//     {
//       img: colective2,
//       name: t("team.card2.name"),
//       job: t("team.card2.job"),
//       desc: t("team.card2.desc"),
//     },
//     {
//       img: colective3,
//       name: t("team.card3.name"),
//       job: t("team.card3.job"),
//       desc: t("team.card3.desc"),
//     },
//     {
//       img: colective4,
//       name: t("team.card4.name"),
//       job: t("team.card4.job"),
//       desc: t("team.card4.desc"),
//     },
//     {
//       img: colective1,
//       name: t("team.card1.name"),
//       job: t("team.card1.job"),
//       desc: t("team.card1.desc"),
//     },
//     {
//       img: colective1,
//       name: t("team.card1.name"),
//       job: t("team.card1.job"),
//       desc: t("team.card1.desc"),
//     },
//   ];

//   return (
//     <section id="colictive">
//       <div
//         className="container mx-auto flex items-center justify-center flex-col mb-20 px-10"
//         data-aos="fade-up"
//       >
//         <p
//           className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max"
//           data-aos="fade-down"
//         >
//           {t("team.sectionTitle")}
//         </p>
//         <p
//           className="text-[16px] text-center text-[#7A8A9E] font-inter mt-6"
//           data-aos="fade-right"
//           data-aos-delay="200"
//         >
//           {t("team.desc")}
//         </p>

//         <div className="container mx-auto mt-3">
//           {/* 1-Swiper: faqat 480px dan katta ekranlarda */}
//           <div className="hidden min-[481px]:block">
//             <Swiper
//               modules={[Autoplay]}
//               spaceBetween={2}
//               slidesPerView={4}
//               autoplay={{ delay: 2000 }}
//               loop={true}
//               className="mySwiper"
//             >
//               {teamMembers.map((member, index) => (
//                 <SwiperSlide key={index}>
//                   <div
//                     className="rounded-lg overflow-hidden shadow-xl my-5 mx-3"
//                     data-aos="zoom-in"
//                     data-aos-delay={index * 200}
//                   >
//                     <div className="flex flex-col">
//                       <div className="w-full h-[225px] team_img_card team_img_card_sm bg-red-500">
//                         <img
//                           src={member.img}
//                           alt=""
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="p-4 team_card team_card_text_sm flex flex-col justify-between">
//                         <div>
//                           <h1 className="team_name_sm text-[18px] team_name font-bold text-[#233876] font-inter">
//                             {member.name}
//                           </h1>
//                           <p className="font-medium font-inter text-[16px] team_job text-[#6B7280] mb-2">
//                             {member.job}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="font-inter font-normal text-[16px] text-[#6B7280] line-clamp-3">
//                             {member.desc}
//                           </p>
//                           <div className="flex gap-5 mt-4">
//                             <FaFacebookF size={22} className="text-[#6B7280]" />
//                             <FaTwitter size={22} className="text-[#6B7280]" />
//                             <FaGithub size={22} className="text-[#6B7280]" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           {/* 2-Swiper: faqat 480px va kichik ekranlarda */}
//           <div className="block min-[481px]:hidden">
//             <Swiper
//               modules={[Autoplay]}
//               spaceBetween={2}
//               slidesPerView={2}
//               autoplay={{ delay: 2000 }}
//               loop={true}
//               className="mySwiper"
//             >
//               {teamMembers.map((member, index) => (
//                 <SwiperSlide key={index}>
//                   <div
//                     className="rounded-lg overflow-hidden shadow-xl my-5 mx-3"
//                     data-aos="zoom-in"
//                     data-aos-delay={index * 200}
//                   >
//                     <div className="flex flex-col">
//                       <div className="team_img_card team_img_card_sm bg-red-500">
//                         <img
//                           src={member.img}
//                           alt=""
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="p-4 team_card_sm flex flex-col justify-between">
//                         <div>
//                           <h1 className="text-[12px] font-bold text-[#233876] font-inter">
//                             {member.name}
//                           </h1>
//                           <p className="font-medium font-inter text-[10px] text-[#6B7280] mb-2">
//                             {member.job}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="font-inter font-normal text-[10px]/4 text-[#6B7280] line-clamp-3">
//                             {member.desc}
//                           </p>
//                           <div className="flex gap-5 mt-4">
//                             <FaFacebookF size={22} className="text-[#6B7280]" />
//                             <FaTwitter size={22} className="text-[#6B7280]" />
//                             <FaGithub size={22} className="text-[#6B7280]" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// useAutoPlay funksiyasi: Sliderni sahifa yuklanganda avtomatik aylantirish
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

// Team komponenti: Ikkita slider (3 ta va 2 ta kartali)
export default function Team() {
  // 3 ta kartali slider sozlamalari
  const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({
    loop: true, // Cheksiz aylanish
    slides: {
      perView: 4, // Bir vaqtda 3 ta slayd
      spacing: 15, // Slaydlar orasidagi masofa
    },
  });
  useAutoPlay(instanceRef1, 3000); // 2 soniyada bir marta aylanish

  // 2 ta kartali slider sozlamalari
  const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2, // Bir vaqtda 2 ta slayd
      spacing: 15,
    },
  });
  useAutoPlay(instanceRef2, 3500); // 2.5 soniyada bir marta aylanish

  return (
    <div className="container mx-auto p-4">
      {/* 3 ta kartali slider */}
      <h2 className="text-2xl font-bold mb-4">3 ta karta aylanuvchi</h2>
      <div ref={sliderRef1} className="keen-slider">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`keen-slider__slide bg-red-500 h-40 flex items-center justify-center text-white font-bold text-xl`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* 2 ta kartali slider */}
      <h2 className="text-2xl font-bold mt-10 mb-4">2 ta karta aylanuvchi</h2>
      <div ref={sliderRef2} className="keen-slider">
        {["A", "B", "C", "D", "E"].map((letter, index) => (
          <div
            key={index}
            className={`keen-slider__slide bg-green-600 h-40 flex items-center justify-center text-white font-bold text-xl`}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
