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
  jarayon1,
  jarayon2,
  jarayon3,
  jarayon4,
  Vector,
  Vector1,
  Vector2,
} from "../assets";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* main page */}
      <div className="w-full h-screen  text-white">
        <div className="h-[5vh] bg-[#0b203b] flex flex-col  justify-center py-4  items-center text-white">
          <div className="container mx-auto flex  justify-between">
            <div className="flex gap-15">
              <p className="flex items-center gap-1 font-georgia ">
                <span className="text-[#f15c36] ">Email:</span>
                info@rfconsultingsupport.com
              </p>
              <p className="flex items-center gap-1 font-georgia ">
                <span className="text-[#f15c36] ">
                  Hoziroq qo’ngiroq qiling:
                </span>
                +998 91 123-45-67
              </p>
            </div>
            <div>
              <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
            <button className="px-4 py-1.5 bg-[#f15c36] font-georgia rounded-full">
              Apply Now!
            </button>
          </div>
          
        </div>

        <div className=" h-[10vh] bg-white flex items-center">
          <div className="container mx-auto flex items-center justify-between ">
            <p className="text-black">logo</p>
            <div>
              <nav className="flex items-center gap-5">
                <Link
                  to="about" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  Bosh sahifa
                </Link>
                <Link
                  to="about" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  Bosh sahifa
                </Link>
                <Link
                  to="about" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  Bosh sahifa
                </Link>
                <Link
                  to="about" // Elementning name qiymati
                  smooth={true} // Smooth scrolling
                  duration={500} // Tezligi (ms)
                  className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline transition-all font-semibold font-popins text-[16px]"
                >
                  Bosh sahifa
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
                Oltin imkoniyatni qo’ldan boy bermang
              </button>
              <h1 className="text-[62px] font-bold font-playfair ">
                Yaxshi <span className="text-[#f15c36]">maslahatning</span>{" "}
                <br />
                kuchi
              </h1>
              <div className=" flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] font-medium ">
                    Dunyoni o’zgartirishni xohlovchilar uchun
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] font-medium ">
                    Talaba buyuk maqsadlar bilan{" "}
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
            Ta'limingizni keyingi bosqichga olib chiqish
          </h1>
        </div>
      </div>
      {/* cards 6 */}
      <div className="  grid grid-cols-[repeat(6,300px)] justify-center items-center gap-7  -translate-y-13  w-full">
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HomeIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36] " />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HujjatIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <DavlatIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <ExportIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <UniverIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <QabulIcon className="w-[80px] h-[80px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
      </div>
      {/* About */}
      <div className="flex justify-between  container mx-auto  gap-7">
        <div className="w-[45%] ">
          <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
            BIZ HAQIMIZDA
          </p>
          <h1 className="text-[50px] font-semibold font-popins text-[#003760] mt-8  ">
            Tajribali <br />
            <span className="text-[#F15C36]">Konsultantlar</span>
          </h1>
          <p className="text-[17px] text-[#7A8A9E] font-popins">
            Chet elda o'qish va viza bo'yicha maslahat xizmatlarini ko'rsatuvchi
            eng nufuzli provayder.
          </p>
          <p className="text-[17px] text-[#7A8A9E] font-popins">
            Bizning filiallarimiz Toshkent va Buxoroda.
          </p>

          <div className="mt-5 space-y-8  w-full">
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[98%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  Talabalarni qabul qilish
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[98%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[97%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">Talaba vizalari</p>
                <p className="text-[16px] text-[#323232]">97% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[97%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[65%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">Grant yutish</p>
                <p className="text-[16px] text-[#323232]">65% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[65%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  Viza olishda yordam
                </p>
                <p className="text-[16px] text-[#323232]">95% </p>
              </div>
              <div className="border-b-5 border-[#083D59]  w-[95%] mt-1 translate-y-3"></div>
            </div>
            <div className="bg-[#F0F5FB] rounded w-full">
              <div className="flex items-center  pl-3 justify-between w-[95%] py-1.5 ">
                <p className="text-[16px] text-[#323232]">
                  Talabani turar joy bilan taminlash
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
              Universetitlar
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
              Bir necha yillik tajriba
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
              Xursand mijozlar
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
              Davlatlar universitetlari <br /> bilan aloqadamiz
            </h1>
          </div>
        </div>
      </div>
      {/* 
       Jarayon 
           */}
      <div className="container mx-auto flex flex-col items-center justify-center my-15">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          Jarayon
        </p>
        <h1 className="text-[45px] font-popins text-[#003760] font-semibold mt-4">
          Bizni nima boshqalardan ajratib turadi
        </h1>
        <h1 className="text-[45px] font-playfair text-[#F15C36] font-semibold italic ">
          Chet elda o'qish bo'yicha konsultantlar
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
              Bepul maslahat xizmati
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

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A]">
              Mamlakat va universitet tanlashda yordam
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

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A]">
              Tez va ishonchli hujjat topshirish jarayoni
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

            <h1 className=" text-[20px] font-bold font-georgia text-[#1A1A1A]">
              Grant, viza va moliyaviy yordam olishda ko’rsatma
            </h1>
          </div>
        </div>
      </div>
      {/* Bizning jamoamiz */}
      <div className="container mx-auto flex items-center justify-center flex-col mb-20 ">
        <p className="text-[15px] text-[#7A8A9E] font-popins font-semibold border-b-3 border-[#7A8A9E] w-max ">
          BIZ HAQIMIZDA
        </p>
        <p className="text-[20px] text-[#7A8A9E] font-inter   ">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </>
  );
}
