import { ChevronRight, Facebook, Instagram, Send, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { candaIcon, footerBg, koreaIcon, useIcon, yevroIcon } from "../assets";
import { Link } from "react-scroll";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="bg-yellow-400 text-center py-10">
          <h2 className="text-[16px] sm:text-[50px] max-[]: font-popins  md:text-3xl font-bold  text-[#0B203B] mb-6">
            {t("footer.help_title")}
          </h2>
          <div className="flex justify-center gap-4">
            <button className="hover:bg-white border font-roboto text-[10px] sm:text-[15px]    border-black hover:border-transparent text-[#003760] v px-6 py-3 rounded-md font-medium  transition">
              {t("footer.contact_us")}
            </button>
            <button className="hover:bg-white bg-[#F15C36] border font-roboto text-[10px] sm:text-[15px]  border-black hover:border-transparent hover:text-[#003760] text-white v px-6 py-3 rounded-md font-medium  transition">
              {t("footer.call_now")}
            </button>
          </div>
        </div>
        <LazyLoadComponent>
          <footer
            style={{
              backgroundImage: `url(${footerBg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "contain",
            }}
            className="bg-[#002244] text-white py-12 px-6 md:px-16  relative"
          >
            <div className="absolute inset-0 bg-[#0B203B]/90 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Aloqa */}
              <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-start">
                <h3 className="text-lg font-semibold font-georgia mb-6">
                  {" "}
                  {t("footer.contact.title")}
                </h3>
                <p className="font-georgia text-[14px] font-bold text-center sm:text-left">
                  {" "}
                  {t("footer.contact.city")}
                </p>
                <p className="font-georgia text-[14px] font-bold mt-3 text-center sm:text-left">
                  {t("footer.contact.phone_label")}
                  <span className="font-normal">
                    {t("footer.contact.phone")}
                  </span>
                </p>
                <p className="font-georgia text-[14px] font-bold mt-3 text-center sm:text-left">
                  {t("footer.contact.address_label")}
                  <span className="font-normal">
                    {t("footer.contact.address")}
                  </span>
                </p>
                <div className="flex gap-3 sm:mt-15 mt-3">
                  <a
                    href="#"
                    className="bg-[#385DA9] text-white p-[15px] rounded-lg"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#D53F7F] text-white p-[15px] rounded-lg"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#FF2121] text-white p-[15px] rounded-lg"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#0073B1] text-white p-[15px] rounded-lg"
                  >
                    <Send size={18} />
                  </a>
                </div>
              </div>

              {/* Linklar */}
              {/* Linklar */}
              <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-start">
                <h3 className="text-lg font-semibold font-georgia mb-6">
                  {t("footer.links.title")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="home"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item1")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="event"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item2")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="colictive"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item3")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="city"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item4")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="partners"
                      smooth
                      duration={600}
                      className="cursor-pointer font-georgia text-[14px] font-normal flex items-center hover:text-[#f15c36] transition-all"
                    >
                      <ChevronRight size={15} /> {t("footer.links.item5")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Variantlar */}
              <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-start">
                <h3 className="text-lg font-semibold font-georgia mb-2">
                  {t("footer.variants.title")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="font-georgia text-[14px] font-normal flex items-center"
                    >
                      <ChevronRight size={15} /> {t("footer.variants.item1")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-georgia text-[14px] font-normal flex items-center"
                    >
                      <ChevronRight size={15} /> {t("footer.variants.item2")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-georgia text-[14px] font-normal flex items-center"
                    >
                      <ChevronRight size={15} /> {t("footer.variants.item3")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-georgia text-[14px] font-normal flex items-center"
                    >
                      <ChevronRight size={15} /> {t("footer.variants.item3")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-georgia text-[14px] font-normal flex items-center"
                    >
                      <ChevronRight size={15} /> {t("footer.variants.item4")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Logo va bayroqlar */}
              <div className="flex flex-col justify-center items-center sm:justify-normal sm:items-start">
                <h3 className="text-lg font-semibold mb-4">
                  {t("footer.logo_block.title")}
                </h3>
                <p className="text-sm text-gray-300 text-center sm:text-left">
                  {t("footer.logo_block.desc")}
                </p>
                <div className="grid grid-cols-4  items-start justify-start gap-4 mt-4 mb-8">
                  <div className="text-center flex items-center justify-center flex-col gap-3">
                    <img src={candaIcon} alt="Canada" />
                    <p>Kanada</p>
                  </div>
                  <div className="text-center flex items-center justify-center flex-col gap-3">
                    <img src={yevroIcon} alt="Europe" />
                    <p>Yevropa</p>
                  </div>
                  <div className="text-center flex items-center justify-center flex-col gap-3">
                    <img src={koreaIcon} alt="Korea" />
                    <p>Koreya</p>
                  </div>
                  <div className="text-center flex items-center justify-center flex-col gap-3">
                    <img src={useIcon} alt="USA" />
                    <p>AQSH</p>
                  </div>
                </div>
                <a href="#" className="text-[#00A6F9] underline font-georgia ">
                  {t("footer.logo_block.link")}
                </a>
              </div>
            </div>
          </footer>
        </LazyLoadComponent>
      </div>
      <div className="h-[50px] w-full bg-[#003055]"></div>
    </>
  );
}
