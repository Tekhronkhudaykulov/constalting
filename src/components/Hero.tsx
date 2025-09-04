import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { herooBg } from "../assets";
import { Menu } from "lucide-react";

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="w-full  h-screen  text-white">
        <div className="h-[5vh] px-8 bg-[#0b203b] flex flex-col  justify-center py-6  items-center text-white">
          <div className="container mx-auto flex items-center  justify-between">
            <div className="flex gap-12 nav_hidden">
              <p className="flex items-center gap-1 font-georgia text-size ">
                <span className="text-[#f15c36] ">
                  {t("header.emailLabel")}
                </span>
                info@rfconsultingsupport.com
              </p>
              <p className="flex items-center gap-1 font-georgia text-size ">
                <span className="text-[#f15c36] ">
                  {t("header.phoneLabel")}
                </span>
                {t("header.phoneNumber")}
              </p>
            </div>
            <div></div>
            {/* <div>
              <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div> */}
            <button className="px-4 py-1.5 bg-[#f15c36]   nav-btn font-georgia rounded-full">
              {t("header.btn")}
            </button>
          </div>
        </div>

        <div className=" h-[10vh] bg-white flex ">
          <div className="container mx-auto px-15  flex items-center justify-between ">
            <p className="text-black">logo</p>

            <nav className="flex items-center gap-5 nav_hidden">
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
            <div className="flex ">
              <Menu size={25} className=" block md:hidden text-black" />
            </div>
          </div>
        </div>

        <div
          className="h-[85vh] relative bg-right bg-cover  hero_img"
          style={{
            backgroundImage: `url(${herooBg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B203B] via-[#2E3B4B]/70 to-transparent"></div>

          {/* Kontent (gradient ustida ko‘rinadi) */}
          <div className="container mx-auto  bg-red-500  flex items-center justify-center relative z-10">
            <div className=" absolute top-[25vh] left-10 lg:left-35">
              <button className="border-white border-3   bg-[#243E6D] font-popins font-bold px-3 py-2 text-white text-[16px]">
                {t("hero.cta")}
              </button>
              <h1 className="text-[62px]/20 hero_title font-bold font-playfair mt-4">
                {t("hero.title1")}
                <span className="text-[#f15c36]"> {t("hero.title2")}</span>
                <br />
                {t("hero.title3")}
              </h1>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] hero_disc font-medium">
                    {t("hero.point1")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#f15c36] rounded-full"></span>
                  <p className="text-[20px] hero_disc font-medium">
                    {t("hero.point2")}
                  </p>
                </div>
              </div>
              <button className="px-6 py-2 rounded-full bg-[#f15c36] text-white mt-10 ">
                {t("hero.btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B203B]">
        <div className="container mx-auto flex items-center justify-center px-15 pt-15 pb-20">
          <h1 className="text-white text-[40px] hero_b_title_md  hero_b_title_sm font-popins font-bold">
            {t("education.title")}
          </h1>
        </div>
      </div>
    </div>
  );
}
