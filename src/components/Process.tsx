// import { jarayon1, jarayon2, jarayon3, jarayon4 } from "../assets";
// import { useTranslation } from "react-i18next";

// export default function Process() {
//   const { t } = useTranslation();
//   return (
//     <section id="event">
//       <div className="container mx-auto px-10 flex flex-col items-center justify-center my-15">
//         <p className="text-[16px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
//           {t("process.sectionTitle")}
//         </p>
//         <h1 className="text-[40px] proces_title font-popins text-[#003760] font-semibold mt-4">
//           {t("process.title1")}
//         </h1>
//         <h1 className="text-[40px]  proces_title font-playfair text-[#F15C36] font-semibold italic ">
//           {t("process.title2")}
//         </h1>
//         <div className="grid grid-cols-2 md:grid-cols-4  gap-3  mt-6 ">
//           <div className="flex flex-col  items-start justify-start gap-4 proces_cards proces_cards_sm">
//             <div className="w-[250px] h-[250px]  proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
//               <img
//                 src={jarayon1}
//                 alt=""
//                 className="w-[210px] h-[210px] proces_img object-center"
//               />
//               <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
//                 <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
//                   01
//                 </p>
//               </div>
//             </div>

//             <h1 className=" text-[17px] text-center font-bold font-georgia text-[#1A1A1A]">
//               {t("process.step1")}
//             </h1>
//           </div>
//           {/*  */}
//           <div className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm">
//             <div className="w-[250px] h-[250px]  proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
//               <img
//                 src={jarayon2}
//                 alt=""
//                 className="w-[210px] h-[210px] proces_img object-center"
//               />

//               <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
//                 <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
//                   02
//                 </p>
//               </div>
//             </div>

//             <h1 className=" text-[17px] font-bold font-georgia text-[#1A1A1A] text-center">
//               {t("process.step2")}
//             </h1>
//           </div>
//           <div className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm">
//             <div className="w-[250px] h-[250px]  proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
//               <img
//                 src={jarayon3}
//                 alt=""
//                 className="w-[210px] h-[210px] proces_img object-center"
//               />

//               <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
//                 <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
//                   03
//                 </p>
//               </div>
//             </div>

//             <h1 className=" text-[17px] text-center font-bold font-georgia text-[#1A1A1A] ">
//               {t("process.step3")}
//             </h1>
//           </div>

//           <div className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm">
//             <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
//               <img
//                 src={jarayon4}
//                 alt=""
//                 className="w-[210px] h-[210px] proces_img object-center"
//               />

//               <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
//                 <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
//                   04
//                 </p>
//               </div>
//             </div>

//             <h1 className=" text-[17px] font-bold font-georgia text-[#1A1A1A] text-center">
//               {t("process.step4")}
//             </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { jarayon1, jarayon2, jarayon3, jarayon4 } from "../assets";
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();
  return (
    <section id="event">
      <div
        className="container mx-auto px-10 flex flex-col items-center justify-center my-15"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {/* Step 01 */}
          <div
            className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon1}
                alt=""
                className="w-[210px] h-[210px] proces_img object-center"
              />
              <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  01
                </p>
              </div>
            </div>
            <h1 className="text-[17px] text-center font-bold font-georgia text-[#1A1A1A]">
              {t("process.step1")}
            </h1>
          </div>

          {/* Step 02 */}
          <div
            className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon2}
                alt=""
                className="w-[210px] h-[210px] proces_img object-center"
              />
              <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  02
                </p>
              </div>
            </div>
            <h1 className="text-[17px] font-bold font-georgia text-[#1A1A1A] text-center">
              {t("process.step2")}
            </h1>
          </div>

          {/* Step 03 */}
          <div
            className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon3}
                alt=""
                className="w-[210px] h-[210px] proces_img object-center"
              />
              <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  03
                </p>
              </div>
            </div>
            <h1 className="text-[17px] text-center font-bold font-georgia text-[#1A1A1A]">
              {t("process.step3")}
            </h1>
          </div>

          {/* Step 04 */}
          <div
            className="flex flex-col items-start justify-start gap-4 proces_cards proces_cards_sm"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <div className="w-[250px] h-[250px] proces_card flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon4}
                alt=""
                className="w-[210px] h-[210px] proces_img object-center"
              />
              <div className="absolute w-[210px] h-[210px] proces_card_bg bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  04
                </p>
              </div>
            </div>
            <h1 className="text-[17px] font-bold font-georgia text-[#1A1A1A] text-center">
              {t("process.step4")}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
