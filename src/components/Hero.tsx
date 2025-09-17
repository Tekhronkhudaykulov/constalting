import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { herooBg } from "../assets";
import { Menu, X } from "lucide-react";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { headerimg } from "../assets";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  type Language = "uz" | "en" | "ru"; // misol uchun ruscha ham qo‘shilsa

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="home">
      {/* Header yuqori kontakt qismi */}
      <div className="w-full h-screen text-white">
        <div className="h-[5vh] sm:flex hidden  bg-[#0b203b] flex-col justify-center py-8 items-center text-white">
          <div className="container flex items-center justify-between">
            <div
              className="flex max-[475px]:flex-col sm:gap-12 gap-2"
              data-aos="fade-right"
            >
              <p className="flex items-center gap-1 font-georgia text-size max-[1280px]:text-[12px] ">
                <span className="text-[#f15c36] ">
                  {t("header.emailLabel")}
                </span>
                info@rfconsultingsupport.com
              </p>
              <p className="flex items-center gap-1 font-georgia max-[1280px]:text-[12px]">
                <span className="text-[#f15c36] ">
                  {t("header.phoneLabel")}
                </span>
                {t("header.phoneNumber")}
              </p>
            </div>
            <button
              className="sm:px-4 sm:py-1.5 px-2 py-1 text-[10px] bg-[#f15c36] nav-btn font-georgia rounded-full"
              data-aos="fade-left"
            >
              {t("header.btn")}
            </button>
          </div>
        </div>

        {/* Navbar */}
        <div className="h-[10vh] bg-white flex">
          <div className="container  gap-2 flex items-center justify-between  ">
            <div>
              <img src={headerimg} className="md:w-16 md:h-16 w-12 h-12 object-contain" alt="" />
            </div>

            {/* Desktop menu */}
            <nav
              className="flex items-center gap-3 nav_hidden"
              data-aos="fade-down"
            >
              <Link
                to="home"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline  transition-all font-semibold font-popins max-[1280px]:text-[12px]"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="about"
                duration={600}
                smooth
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="event"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.event")}
              </Link>
              <Link
                to="colictive"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.colictive")}
              </Link>
              <Link
                to="city"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.city")}
              </Link>
              <Link
                to="partners"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.partners")}
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="cursor-pointer text-[#323232] hover:text-[#f15c36] hover:underline max-[1280px]:text-[12px]  transition-all font-semibold font-popins text-[16px]"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <div>
              <div className="gap-2 hidden md:flex" data-aos="fade-left">
                <button
                  onClick={() => {
                    changeLanguage("uz");
                    setIsOpen(false);
                  }}
                  className={`max-[1280px]:text-[10px]  px-3 py-1 rounded font-semibold transition-colors ${
                    i18n.language === "uz"
                      ? "bg-[#F15C36] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => {
                    changeLanguage("en"); // ✅ to‘g‘rilandi
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1  max-[1280px]:text-[10px] rounded font-semibold transition-colors ${
                    i18n.language === "en"
                      ? "bg-[#F15C36] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile menu icon */}
              <div className="flex md:hidden" data-aos="fade-left">
                <Menu
                  size={24}
                  className="text-black cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-[#0b203b] text-white z-50 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <X
                  size={24}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Menu items */}
              <div className="flex flex-col items-center  gap-8 pt-[50px] text-xl font-semibold">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="home"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#f15c36] text-[15px]"
                >
                  {t("nav.home")}
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="about"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#f15c36] text-[15px]"
                >
                  {t("nav.about")}
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="event"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#f15c36] text-[15px]"
                >
                  {t("nav.event")}
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="colictive"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#f15c36] text-[15px]"
                >
                  {t("nav.colictive")}
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="city"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-[#f15c36] text-[15px]"
                >
                  {t("nav.city")}
                </Link>
                <div className="">
                  {/* Language switcher */}
                  <div className="gap-2 ml-auto flex">
                    <button
                      onClick={() => {
                        changeLanguage("uz");
                        setIsOpen(false);
                      }}
                      className={`px-3 py-1 rounded font-semibold transition-colors text-[15px] ${
                        i18n.language === "uz"
                          ? "bg-[#F15C36] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      UZ
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage("en"); // ✅ to‘g‘rilandi
                        setIsOpen(false);
                      }}
                      className={`px-3 py-1 rounded font-semibold transition-colors text-[15px] ${
                        i18n.language === "en"
                          ? "bg-[#F15C36] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero image with text */}
        <LazyLoadComponent>
          <div
            className="h-[85vh] relative bg-right bg-cover hero_img"
            style={{
              backgroundImage: `url(${herooBg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B203B] via-[#2E3B4B]/70 to-transparent"></div>

            <div className="container flex items-center justify-center relative z-10">
              <div
                className="absolute top-[25vh] left-5 lg:left-35"
                data-aos="fade-up"
              >
                <button className="border-white border-3 bg-[#243E6D] font-popins font-bold px-3 py-2 text-white text-[16px] max-[480px]:text-[12px]">
                  {t("hero.cta")}
                </button>
                <h1
                  className="text-[62px]/20 hero_title font-bold font-playfair mt-4"
                  data-aos="zoom-in"
                >
                  {t("hero.title1")}
                  <span className="text-[#f15c36]"> {t("hero.title2")}</span>
                  <br />
                  {t("hero.title3")}
                </h1>
                <div className="sm:flex hidden items-center justify-between px-3 sm:mt-0 mt-2 gap-6 ">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-3 bg-[#f15c36] rounded-full"></div>
                    <p className="text-[20px] hero_disc font-medium">
                      {t("hero.point1")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-3 bg-[#f15c36] rounded-full"></span>
                    <p className="text-[20px] hero_disc font-medium">
                      {t("hero.point2")}
                    </p>
                  </div>
                </div>
                <button
                  className="px-6 py-2 sm:block hidden rounded-full bg-[#f15c36] text-white sm:mt-10 mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {t("hero.btn")}
                </button>
                <a href="#contact">
                  <button
                    className="px-6 py-2 sm:hidden block rounded-full bg-[#f15c36] text-white sm:mt-10 mt-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {t("header.btn")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </LazyLoadComponent>
      </div>

      {/* Education Section */}
      <div className="bg-[#0B203B] px-15 pb-[335px] pt-15 sm:pb-20">
        <div
          className="container mx-auto flex items-center justify-center"
          data-aos="fade-up"
        >
          <h1 className="text-white text-[40px] hero_b_title_md hero_b_title_sm font-popins font-bold">
            {t("education.title")}
          </h1>
        </div>
      </div>
    </section>
  );
}
