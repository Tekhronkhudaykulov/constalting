import { Link } from "react-scroll";
import {
  HomeIcon,
  HujjatIcon,
  DavlatIcon,
  ExportIcon,
  UniverIcon,
  QabulIcon,
} from "../assets/Icons";
import {
  About1,
  About2,
  colective1,
  colective2,
  colective3,
  colective4,
  davlat1,
  davlat2,
  davlat3,
  davlat4,
  davlat5,
  davlat6,
  formPng,
  jarayon1,
  jarayon2,
  jarayon3,
  jarayon4,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  Vector,
  Vector1,
  Vector2,
} from "../assets";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Main() {
  const { t, i18n } = useTranslation();
  return (
    <div className="overflow-x-hidden">
      {/* main page */}
      <div className="w-full h-screen  text-white">
        <div className="h-[5vh] bg-[#0b203b] flex flex-col  justify-center py-4  items-center text-white">
          <div className="container mx-auto flex  justify-between">
            <div className="flex gap-15">
              <p className="flex items-center gap-1 font-georgia ">
                <span className="text-[#f15c36] ">
                  {t("header.emailLabel")}
                </span>
                info@rfconsultingsupport.com
              </p>
              <p className="flex items-center gap-1 font-georgia ">
                <span className="text-[#f15c36] ">
                  {t("header.phoneLabel")}
                </span>
                {t("header.phoneNumber")}
              </p>
            </div>
            <div>
              <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
            <button className="px-4 py-1.5 bg-[#f15c36] font-georgia rounded-full">
              {t("header.btn")}
            </button>
          </div>
        </div>

        <div className=" h-[10vh] bg-white flex items-center">
          <div className="container mx-auto flex items-center justify-between ">
            <p className="text-black">logo</p>
            <div>
              <nav className="flex items-center gap-5">
                <Link
                  to="home"
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  {t("nav.home")}
                </Link>
                <Link
                  to="about" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  {t("nav.about")}
                </Link>
                <Link
                  to="event" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  {t("nav.event")}
                </Link>
                <Link
                  to="colictive" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  {t("nav.colictive")}
                </Link>
                <Link
                  to="city" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  {t("nav.city")}
                </Link>
              </nav>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="h-[85vh]  bg-blue-400">
          <div className="container mx-auto grid grid-cols-3 items-start justify-center relative">
            <div className=" col-span-2 absolute top-[300px]">
              <button className="border-white border-3 bg-[#243E6D] font-popins font-bold px-3 py-2 text-white text-[18px]">
                {t("hero.cta")}
              </button>
              <h1 className="text-[62px] font-bold font-playfair ">
                {t("hero.title1")}
                <span className="text-[#f15c36]"> {t("hero.title2")}</span>
                <br />
                {t("hero.title3")}
              </h1>
              <div className=" flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] font-medium ">{t("hero.point1")}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] font-medium ">
                    {t("hero.point2")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ta'limingizni keyingi bosqichga olib chiqish */}
      <div className="bg-[#0B203B]">
        <div className="container mx-auto flex items-center justify-center px-15 pt-15 pb-20">
          <h1 className="text-white text-[48px] font-popins font-bold">
            {t("education.title")}
          </h1>
        </div>
      </div>
      {/* cards 6 */}
      <div className="  grid lg:grid-cols-[repeat(6,300px)] md:grid-cols-[repeat(3,250px)]  justify-center items-center gap-7  -translate-y-13  w-full">
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HomeIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36] " />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service1")}
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HujjatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service2")}
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <DavlatIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service3")}
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <ExportIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service4")}
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <UniverIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service5")}
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <QabulIcon className="w-[65px] h-[65px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[20px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            {t("services.service6")}
          </h1>
        </div>
      </div>
      {/* About */}
      <div className="flex justify-between  container mx-auto  gap-7">
        <div className="w-[45%] ">
          <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
            {t("about.sectionTitle")}
          </p>
          <h1 className="text-[50px] font-semibold font-popins text-[#003760] mt-8  ">
            {t("about.title")} <br />
            <span className="text-[#F15C36]"> {t("about.highlight")}</span>
          </h1>
          <p className="text-[17px] text-[#7A8A9E] font-popins">
            {t("about.desc1")}
          </p>
          <p className="text-[17px] text-[#7A8A9E] font-popins">
            {t("about.desc2")}
          </p>

          <div className="mt-5 space-y-8  w-full">
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[98%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.admission")}
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[98%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[97%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  {" "}
                  {t("about.stats.visa")}
                </p>
                <p className="text-[16px] text-[#323232]">97% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[97%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[65%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  {" "}
                  {t("about.stats.grant")}{" "}
                </p>
                <p className="text-[16px] text-[#323232]">65% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[65%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.help")}
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[95%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  {t("about.stats.housing")}
                </p>
                <p className="text-[16px] text-[#323232]">74% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[74%] mt-1 translate-y-3"></div>
            </div>
          </div>
        </div>

        <div className="w-[55%] bg-amber-300 flex ">
          <div className="w-[65%] bg-red-500">
            <img src={About1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[40%] bg-red-200">
            <img src={About2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* statistika */}
      <div className="      my-10 py-8 flex items-center justify-center bg-[#F15C36]">
        <div className="grid grid-cols-4    container mx-auto">
          <div className="flex flex-col gap- items-start justify-center">
            <span className="flex items-center gap-2">
              <img src={Vector} alt="" />
              <h1 className="text-[45px] text-white font-bold font-georgia flex items-center">
                700 <Plus size={40} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] text-white font-georgia">
              {t("stats.universities")}
            </h1>
          </div>
          <div className="flex flex-col gap- items-start justify-center">
            <span className="flex items-center gap-2">
              <img src={Vector1} alt="" />
              <h1 className="text-[45px] text-white font-bold font-georgia flex items-center">
                2 <Plus size={40} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] text-white font-georgia">
              {t("stats.experience")}
            </h1>
          </div>
          <div className="flex flex-col gap- items-start justify-center">
            <span className="flex items-center gap-2">
              <img src={Vector2} alt="" />
              <h1 className="text-[45px] text-white font-bold font-georgia flex items-center">
                100 <Plus size={40} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] text-white font-georgia">
              {t("stats.happyClients")}
            </h1>
          </div>
          <div className="flex flex-col gap- items-start justify-center">
            <span className="flex items-center gap-2">
              <img src={Vector} alt="" />
              <h1 className="text-[45px] text-white font-bold font-georgia flex items-center">
                33 <Plus size={40} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] text-white font-georgia">
              {t("stats.partners1")} <br />
              {t("stats.partners2")}
            </h1>
          </div>
        </div>
      </div>
      {/* 
       Jarayon 
           */}
      <div className="container mx-auto flex flex-col items-center justify-center my-15">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("process.sectionTitle")}
        </p>
        <h1 className="text-[45px] font-popins text-[#003760] font-semibold mt-4">
          {t("process.title1")}
        </h1>
        <h1 className="text-[45px] font-playfair text-[#F15C36] font-semibold italic ">
          {t("process.title2")}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-25 mt-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon1}
                alt=""
                className="w-[210px] h-[210px] object-center"
              />

              <div className="absolute w-[210px] h-[210px] bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  01
                </p>
              </div>
            </div>

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A]">
              {t("process.step1")}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon2}
                alt=""
                className="w-[210px] h-[210px] object-center"
              />

              <div className="absolute w-[210px] h-[210px] bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  02
                </p>
              </div>
            </div>

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A] text-center">
              {t("process.step2")}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon3}
                alt=""
                className="w-[210px] h-[210px] object-center"
              />

              <div className="absolute w-[210px] h-[210px] bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  03
                </p>
              </div>
            </div>

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A] text-center">
              {t("process.step3")}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-[250px] h-[250px] flex items-center justify-center rounded-full overflow-hidden border-[#F15C36] border-2 relative">
              <img
                src={jarayon4}
                alt=""
                className="w-[210px] h-[210px] object-center"
              />

              <div className="absolute w-[210px] h-[210px] bg-black/40 rounded-full flex items-end justify-center">
                <p className="text-[48px] font-bold text-transparent custom-stroke border-white">
                  04
                </p>
              </div>
            </div>

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A] text-center">
              {t("process.step4")}
            </h1>
          </div>
        </div>
      </div>
      {/* Bizning jamoamiz */}
      <div className="container mx-auto flex items-center justify-center flex-col mb-20 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("team.sectionTitle")}
        </p>
        <p className="text-[20px] text-[#7A8A9E] font-inter  mt-6 ">
          {t("team.desc")}
        </p>
        <div className="container mx-auto mt-10 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={2}
            slidesPerView={4}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="mySwiper  "
          >
            {/* card1 */}
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective2}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card2.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card2.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card2.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective3}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card3.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card3.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card3.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective4}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card4.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card4.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card4.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-xl  my-5 mx-3 ">
                <div className="flex flex-col ">
                  <img
                    src={colective1}
                    alt=""
                    className="w-full max-h-[210px] h-full"
                  />
                  <div className="p-4 pb-6">
                    <h1 className="text-[18px] font-bold text-[#233876] font-inter mt-2">
                      {t("team.card1.name")}
                    </h1>
                    <p className="font-medium font-inter text-[16px] text-[#6B7280] mb-2">
                      {t("team.card1.job")}
                    </p>
                    <p className="font-inter font-normal text-[16px] text-[#6B7280]">
                      {t("team.card1.desc")}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <FaFacebookF size={22} className="text-[#6B7280]" />
                      <FaTwitter size={22} className="text-[#6B7280]" />
                      <FaGithub size={22} className="text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* davlatlar */}
      <div className="container mx-auto flex flex-col items-center justify-center mb-20 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("citys.sectionTitle")}
        </p>
        <h1 className="text-[45px] font-popins text-[#003760] font-semibold mt-4">
          {t("citys.title1")}
        </h1>
        <h1 className="text-[45px] font-playfair text-[#F15C36] font-semibold italic ">
          {t("citys.title2")}
        </h1>
        <p className="text-[16px] text-[#7A8A9E] font-roboto  mt-6 text-center ">
          {t("citys.desc")}
        </p>
        <div className="grid grid-cols-[repeat(3,450px)] gap-10 mt-8 ">
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat1}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat2}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat3}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat4}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat5}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            {/* Rasm */}
            <img
              src={davlat6}
              alt="team"
              className="w-full h-[315px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay + text */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white font-popins text-[30px]  font-bold">
                {t("citys.card1.title")}
              </h1>
              <p className="text-white   text-left px-7 text-[15px]/8 font-roboto">
                {t("citys.card1.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* partners */}
      <div className="container mx-auto flex flex-col items-center justify-center mb-20  py-5">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          {t("citys.sectionTitle")}
        </p>
        <div className="marquee mt-13">
          <div className="marquee__track">
            <img
              src={partner1}
              alt="Partner 1"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner2}
              alt="Partner 2"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner3}
              alt="Partner 3"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner4}
              alt="Partner 4"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner5}
              alt="Partner 5"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner1}
              alt="Partner 1"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner2}
              alt="Partner 2"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner3}
              alt="Partner 3"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner4}
              alt="Partner 4"
              className="w-[260px] h-[75px] object-cover"
            />
            <img
              src={partner5}
              alt="Partner 5"
              className="w-[260px] h-[75px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* form data */}
      <div className="w-full py-15 bg-[#F0F5FB]">
        <div className="container mx-auto flex items-center justifg-red-500 gap-10 px-5 ">
          {/* Form qismi */}
          <div className="w-[50%] flex flex-col">
            <h1 className="font-popins font-semibold text-[42px] text-[#003760]">
              <span className="text-[#F15C36]">{t("form.sectionTitle1")}</span>{" "}
              {t("form.sectionTitle2")}
            </h1>

            <form className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                className="outline-none border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder={t("form.fullName")}
              />
              <input
                type="text"
                className="outline-none border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder={t("form.city")}
              />
              <input
                type="text"
                className="outline-none border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder={t("form.phoneNumber")}
              />
              <input
                type="text"
                className="outline-none border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder={t("form.theme")}
              />
              <textarea
                rows={4}
                className="bg-white font-roboto text-[15px] text-[#7A8A9E] border-[#CED7E4] rounded-[5px] border-2 p-4 outline-none col-span-2"
                placeholder={t("form.textArea")}
              />
            </form>

            <button className="mt-4 bg-[#F15C36] text-white py-3 px-6 w-max rounded-md font-medium">
              {t("form.btn")}
            </button>
          </div>

          {/* Rasm qismi */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={formPng}
              alt="Form image"
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-60">s</div>
    </div>
  );
}
// grid-cols-[repeat(6,300px)]
// So'rov yuboring
