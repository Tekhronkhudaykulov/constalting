import { ChevronRight, Facebook, Instagram, Send, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <div className="bg-yellow-400 text-center py-10">
        <h2 className="text-[50px] font-popins  md:text-3xl font-bold  text-[#0B203B] mb-6">
          Yo‘l-Yo‘riq Kerakmi? Biz Sizga Yordam Beramiz.
        </h2>
        <div className="flex justify-center gap-4">
          <button className="hover:bg-white border font-roboto text-[15px]   border-black hover:border-transparent text-[#003760] v px-6 py-3 rounded-md font-medium  transition">
            Biz Bilan Bog‘lanish
          </button>
          {/* <button className="bg-[#F15C36] text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition"> */}
          <button className="hover:bg-white bg-[#F15C36] border font-roboto text-[15px]   border-black hover:border-transparent hover:text-[#003760] text-white v px-6 py-3 rounded-md font-medium  transition">
            Hozir Qo‘ng‘iroq Qiling
          </button>
        </div>
      </div>
      <footer
        className="bg-[#002244] text-white py-12 px-6 md:px-16  
        
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Aloqa */}
          <div>
            <h3 className="text-lg font-semibold font-georgia mb-6">Aloqa</h3>
            <p className="font-georgia text-[12px] font-bold">Toshkent</p>
            <p className="font-georgia text-[12px] font-bold mt-3">
              Telefon raqamlari:{" "}
              <span className="font-normal">+998 91 123 45 67</span>
            </p>
            <p className="font-georgia text-[12px] font-bold mt-3">
              Manzilimiz:{" "}
              <span className="font-normal">
                13 Rustaveli Ave, Block 1, Chilanzar district, <br /> Tashkent,
                Uzbekistan, 100025
              </span>
            </p>
            <div className="flex gap-3 mt-15">
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
          <div>
            <h3 className="text-lg font-semibold font-georgia mb-6">Aloqa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
            </ul>
          </div>

          {/* Variantlar */}
          <div>
            <h3 className="text-lg font-semibold font-georgia mb-2">Aloqa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-georgia text-[12px] font-normal flex items-center"
                >
                  <ChevronRight size={15} /> Toshkent
                </a>
              </li>
            </ul>
          </div>

          {/* Logo va bayroqlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">(Logo)</h3>
            <p className="text-sm text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="grid grid-cols-4  items-start justify-start gap-4 mt-4 mb-8">
              <div className="text-center flex items-center justify-center flex-col gap-3">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" />
                <p>Kanada</p>
              </div>
              <div className="text-center flex items-center justify-center flex-col gap-3">
                <img src="https://flagcdn.com/w40/eu.png" alt="Europe" />
                <p>Yevropa</p>
              </div>
              <div className="text-center flex items-center justify-center flex-col gap-3">
                <img src="https://flagcdn.com/w40/kr.png" alt="Korea" />
                <p>Koreya</p>
              </div>
              <div className="text-center flex items-center justify-center flex-col gap-3">
                <img src="https://flagcdn.com/w40/us.png" alt="USA" />
                <p>AQSH</p>
              </div>
            </div>
            <a href="#" className="text-[#00A6F9] underline font-georgia ">
              Hoziroq bog’laning
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
