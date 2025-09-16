import { useState } from "react";
import { formPng } from "../assets";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phoneNumber: "",
    theme: "",
    textArea: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Yig‘ilgan data:", formData);
  };

  return (
    <section id="contact" className="bg-[#F0F5FB]">
      <div className="container mx-auto  py-10">
        <div className="container mx-auto flex items-center max-[768px]: max-[769px]:justify-center  gap-10">
          {/* Form qismi */}
          <div className="w-[50%] max-[769px]:w-full flex flex-col">
            <h1 className="font-popins font-semibold text-[42px]/10 max-[768px]:text-[35px] text-[#003760]">
              <span className="text-[#F15C36]">{t("form.sectionTitle1")}</span>{" "}
              {t("form.sectionTitle2")}
            </h1>

            <form
              onSubmit={handleSubmit}
              className="sm:grid grid-cols-2  gap-4 mt-4 flex flex-col items-center justify-center w-full"
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="outline-none w-full border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder="Ism familiya"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="outline-none  w-full border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder="Shahar"
              />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="outline-none  w-full border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder="Telefon raqam"
              />
              <input
                type="text"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                className="outline-none  w-full border-[#CED7E4] font-roboto text-[15px] rounded-[5px] text-[#7A8A9E] border-2 py-3 px-5 col-span-1"
                placeholder="Mavzu"
              />
              <textarea
                rows={4}
                name="textArea"
                value={formData.textArea}
                onChange={handleChange}
                className="bg-white  w-full font-roboto text-[15px] text-[#7A8A9E] border-[#CED7E4] rounded-[5px] border-2 p-4 outline-none col-span-2"
                placeholder="Xabar"
              />
              <button
                type="submit"
                className="mt-4 transition-all max-[769px]:w-full  hover:bg-[#fa8d71] bg-[#F15C36] text-white max-[769px]:py-3 py-2.5 px-7 w-max rounded-full font-medium col-span-2"
              >
                {t("form.btn")}
              </button>
            </form>
          </div>

          {/* Rasm qismi */}
          <div className="flex-1 flex items-center justify-center max-[769px]:hidden ">
            <LazyLoadImage
              src={formPng}
              alt="Form image"
              effect="blur"
              className="max-h-[600px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
