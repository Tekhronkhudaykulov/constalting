// import { useTranslation } from "react-i18next";
// import {
//   DavlatIcon,
//   HomeIcon,
//   HujjatIcon,
//   QabulIcon,
//   UniverIcon,
//   Visaicon,
// } from "../assets/Icons";

// const Services = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="">
//       <div className="px-15   grid lg:grid-cols-[repeat(6,285px)] md:grid-cols-[repeat(3,215px)]  grid-cols-2  justify-center items-center sm:gap-7 gap-2  -translate-y-13  w-full">
//         {/* ---------- */}
//         <div className="flex flex-col sm:p-6 p-4 items-center justify-center  bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <HomeIcon className="w-[65px] h-[65px]  group-hover:text-white text-[#f15c36] --- servic_icon  servic_icon_sm" />
//           <h1
//             className="text-[18px]  font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service1")}
//           </h1>
//         </div>

//         {/* ----------------- */}
//         <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <HujjatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
//           <h1
//             className="text-[18px] text-center  font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service2")}
//           </h1>
//         </div>
//         <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <DavlatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
//           <h1
//             className="text-[18px] text-center font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service3")}
//           </h1>
//         </div>
//         <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <UniverIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
//           <h1
//             className="text-[18px] text-center font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service4")}
//           </h1>
//         </div>
//         <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <QabulIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
//           <h1
//             className="text-[18px] text-center font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service5")}
//           </h1>
//         </div>
//         <div className="flex flex-col p-4 items-center justify-center bg-[#F0F5FB] servic_card_sm servic_card transition-all group hover:bg-[#f15c36]">
//           <Visaicon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
//           <h1
//             className="text-[18px] text-center font-bold font-georgia group-hover:text-white text-[#323232]  servic_text_sm {
//     font-size: ;
//   } "
//           >
//             {t("services.service6")}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import { useTranslation } from "react-i18next";
import {
  DavlatIcon,
  HomeIcon,
  HujjatIcon,
  QabulIcon,
  UniverIcon,
  Visaicon,
} from "../assets/Icons";

const Services = () => {
  const { t } = useTranslation();

  // 🔥 Service cardlar uchun massiv
  const services = [
    { Icon: HomeIcon, text: "services.service1" },
    { Icon: HujjatIcon, text: "services.service2" },
    { Icon: DavlatIcon, text: "services.service3" },
    { Icon: UniverIcon, text: "services.service4" },
    { Icon: QabulIcon, text: "services.service5" },
    { Icon: Visaicon, text: "services.service6" },
  ];

  return (
    <div>
      <div
        className="px-15 grid  grid-cols-2
        lg:grid-cols-[repeat(3,300px)]
        xl:grid-cols-[repeat(6,180px)]
        2xl:grid-cols-[repeat(6,250px)]
       justify-center items-center sm:gap-4 gap-2 -translate-y-13 w-full"
      >
        {services.map(({ Icon, text }, i) => (
          <div
            key={i}
            className="flex flex-col sm:p-6 p-4 items-center justify-start bg-[#F0F5FB] servic_card_sm servic_card xl:h-[150px] transition-all group hover:bg-[#f15c36]"
          >
            <Icon className="w-[65px] h-[65px] xl:w-[55px] xl:h-[55px] group-hover:text-white text-[#f15c36] servic_icon servic_icon_sm" />
            <h1 className="text-[18px] xl:text-[16px] text-center font-bold font-georgia group-hover:text-white text-[#323232] servic_text_sm">
              {t(text)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
