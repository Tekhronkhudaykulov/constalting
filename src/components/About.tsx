// import { useTranslation } from "react-i18next";
// import { About1, About2 } from "../assets";

// export default function About() {
//   const { t } = useTranslation();

//   return (
//     <section id="about">
//       <div className="flex flex-col sm:flex-row justify-center  container mx-auto px-10  sm:gap-7 gap-12">
//         <div className="sm:w-[45%] w-full ">
//           <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
//             {t("about.sectionTitle")}
//           </p>
//           <h1 className="text-[50px]/13 about_title font-semibold font-popins text-[#003760] mt-6  ">
//             {t("about.title")} <br />
//             <span className="text-[#F15C36]"> {t("about.highlight")}</span>
//           </h1>
//           <p className="text-[17px] text-[#7A8A9E] font-popins">
//             {t("about.desc1")}
//           </p>
//           <p className="text-[17px] text-[#7A8A9E] font-popins">
//             {t("about.desc2")}
//           </p>

//           <div className="mt-5 space-y-8  w-full">
//             <div className="bg-[#F0F5FB] rounded w-full">
//               <div className="flex items-center  pl-3 justify-between w-[98%] py-1.5 ">
//                 <p className="text-[16px] text-[#323232]">
//                   {t("about.stats.admission")}
//                 </p>
//                 <p className="text-[16px] text-[#323232]">95% </p>
//               </div>
//               <div className="border-b-5 border-[#083D59]  w-[98%] mt-1 translate-y-3"></div>
//             </div>
//             <div className="bg-[#F0F5FB] rounded w-full">
//               <div className="flex items-center  pl-3 justify-between w-[97%] py-1.5 ">
//                 <p className="text-[16px] text-[#323232]">
//                   {" "}
//                   {t("about.stats.visa")}
//                 </p>
//                 <p className="text-[16px] text-[#323232]">97% </p>
//               </div>
//               <div className="border-b-5 border-[#083D59]  w-[97%] mt-1 translate-y-3"></div>
//             </div>
//             <div className="bg-[#F0F5FB] rounded w-full">
//               <div className="flex items-center  pl-3 justify-between w-[65%] py-1.5 ">
//                 <p className="text-[16px] text-[#323232]">
//                   {" "}
//                   {t("about.stats.grant")}{" "}
//                 </p>
//                 <p className="text-[16px] text-[#323232]">65% </p>
//               </div>
//               <div className="border-b-5 border-[#083D59]  w-[65%] mt-1 translate-y-3"></div>
//             </div>
//             <div className="bg-[#F0F5FB] rounded w-full">
//               <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
//                 <p className="text-[16px] text-[#323232]">
//                   {t("about.stats.help")}
//                 </p>
//                 <p className="text-[16px] text-[#323232]">95% </p>
//               </div>
//               <div className="border-b-5 border-[#083D59]  w-[95%] mt-1 translate-y-3"></div>
//             </div>
//             <div className="bg-[#F0F5FB] rounded w-full">
//               <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
//                 <p className="text-[16px] text-[#323232]">
//                   {t("about.stats.housing")}
//                 </p>
//                 <p className="text-[16px] text-[#323232]">74% </p>
//               </div>
//               <div className="border-b-5 border-[#083D59]  w-[74%] mt-1 translate-y-3"></div>
//             </div>
//           </div>
//         </div>

//         <div className="sm:w-[55%] w-full bg-amber-300 flex ">
//           <div className="w-[65%] bg-red-500">
//             <img src={About1} alt="" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-[40%] bg-red-200">
//             <img src={About2} alt="" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useTranslation } from "react-i18next";
import { About1, About2 } from "../assets";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="flex flex-col sm:flex-row justify-center container mx-auto px-10 sm:gap-7 gap-12">
        {/* Left text */}
        <div className="sm:w-[45%] w-full" data-aos="fade-right">
          <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max">
            {t("about.sectionTitle")}
          </p>
          <h1
            className="text-[50px]/13 about_title font-semibold font-popins text-[#003760] mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("about.title")} <br />
            <span className="text-[#F15C36]">{t("about.highlight")}</span>
          </h1>
          <p
            className="text-[17px] text-[#7A8A9E] font-popins"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("about.desc1")}
          </p>
          <p
            className="text-[17px] text-[#7A8A9E] font-popins"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("about.desc2")}
          </p>

          {/* Stats */}
          <div
            className="mt-5 space-y-8 w-full"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center pl-3 justify-between w-[98%] py-1.5">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.admission")}
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59] w-[98%] mt-1 translate-y-3"></div>
            </div>

            <div
              className="bg-[#F0F5FB] rounded w-full"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="flex items-center pl-3 justify-between w-[97%] py-1.5">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.visa")}
                </p>
                <p className="text-[16px] text-[#323232]">97% </p>
              </div>
              <div className="border-b-5 border-[#083D59] w-[97%] mt-1 translate-y-3"></div>
            </div>

            <div
              className="bg-[#F0F5FB] rounded w-full"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="flex items-center pl-3 justify-between w-[65%] py-1.5">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.grant")}
                </p>
                <p className="text-[16px] text-[#323232]">65% </p>
              </div>
              <div className="border-b-5 border-[#083D59] w-[65%] mt-1 translate-y-3"></div>
            </div>

            <div
              className="bg-[#F0F5FB] rounded w-full"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="flex items-center pl-3 justify-between w-[95%] py-1.5">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.help")}
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59] w-[95%] mt-1 translate-y-3"></div>
            </div>

            <div
              className="bg-[#F0F5FB] rounded w-full"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="flex items-center pl-3 justify-between w-[95%] py-1.5">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.housing")}
                </p>
                <p className="text-[16px] text-[#323232]">74% </p>
              </div>
              <div className="border-b-5 border-[#083D59] w-[74%] mt-1 translate-y-3"></div>
            </div>
          </div>
        </div>

        {/* Right images */}
        <div className="sm:w-[55%] w-full flex" data-aos="fade-left">
          <div className="w-[65%]">
            <img src={About1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[40%] ml-3">
            <img src={About2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
