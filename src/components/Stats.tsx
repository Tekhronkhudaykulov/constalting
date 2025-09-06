import { Plus } from "lucide-react";
import { Vector, Vector1, Vector2 } from "../assets";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center mt-15 bg-[#F15C36]">
      {" "}
      <div className=" px-10 py-8 container mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-6 gap-3   ">
          <div className="flex flex-col stats_card stats_card md:h-[130px]   items-center sm:text-center lg:text-left justify-start ">
            <div className="flex items-center gap-2">
              <img src={Vector} alt="" className="stats_icon" />
              <h1 className="text-[45px] stats_text text-white font-bold font-georgia flex items-center">
                700 <Plus size={30} />
              </h1>{" "}
            </div>
            <h1 className="text-[18px] stats_disc text-white font-georgia">
              {t("stats.universities")}
            </h1>
          </div>

          {/*  */}
          <div className="flex flex-col stats_card md:h-1300px]  items-center sm:text-center lg:text-left justify-start">
            <span className="flex items-center gap-2">
              <img src={Vector1} alt="" className="stats_icon" />
              <h1 className="text-[45px] stats_text text-white font-bold font-georgia flex items-center">
                2 <Plus size={30} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] stats_disc text-white font-georgia">
              {t("stats.experience")}
            </h1>
          </div>
          <div className="flex flex-col stats_card md:h-[130px]   items-center sm:text-center lg:text-left justify-start">
            <span className="flex items-center gap-2">
              <img src={Vector2} alt="" className="stats_icon" />
              <h1 className="text-[45px] stats_text text-white font-bold font-georgia flex items-center">
                100 <Plus size={30} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] stats_disc text-white font-georgia">
              {t("stats.happyClients")}
            </h1>
          </div>
          <div className="flex flex-col stats_card md:h13200px] items-center sm:text-center lg:text-left justify-start  ">
            <span className="flex items-center gap-2">
              <img src={Vector} alt="" className="stats_icon" />
              <h1 className="text-[45px] text-white font-bold stats_text font-georgia flex items-center">
                33 <Plus size={30} />
              </h1>{" "}
            </span>
            <h1 className="text-[18px] stats_disc text-white font-georgia">
              {t("stats.partners1")} <br />
              {t("stats.partners2")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
