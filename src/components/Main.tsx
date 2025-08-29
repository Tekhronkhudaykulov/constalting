import { Link } from "react-scroll";
import {
  HomeIcon,
  HujjatIcon,
  DavlatIcon,
  ExportIcon,
  UniverIcon,
  QabulIcon,
} from "../assets/Icons";
export default function Main() {
  return (
    <>
      {/* main page */}
      <div className="w-full h-screen  text-white">
        <div className="h-[5vh] bg-[#0b203b] flex flex-col items-center text-white">
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
            <button className="px-4 py-2 bg-[#f15c36] font-georgia rounded-full">
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
      <div className="  grid grid-cols-[repeat(6,280px)] justify-center items-center gap-7 mx-15 -translate-y-13">
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HomeIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36] " />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <HujjatIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <DavlatIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <ExportIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <UniverIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
        <div className="flex flex-col p-7 items-center justify-center bg-[#F0F5FB] transition-all group hover:bg-[#f15c36]">
          <QabulIcon className="w-[70px] h-[70px] group-hover:text-white text-[#f15c36]" />
          <h1 className="text-[25px] font-bold font-georgia group-hover:text-white text-[#323232] ">
            Konsultatsiya
          </h1>
        </div>
      </div>
    </>
  );
}
