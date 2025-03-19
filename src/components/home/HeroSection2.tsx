import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject } from "../../interfaces/dbData";
import Counter from "../global/Counter";
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";
import { useState } from "react";
import IconGlobal from "../global/IconGlobal";

interface HeroSection2Props {
  data: RootObject;
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data }) => {
  const yearExperiense = data.yearsExperience;
  const miles = data.milesCover;
  const city = data.dataGeneral.location[0].city;
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.gallery.slice(4, 9).length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.gallery.slice(4, 9).length - 1 : prev - 1));
  };

  const dataCounter = [
    {
      label: "Experience",
      subLabel: "Years of",
      parameter: yearExperiense,
    },
    {
      label: city,
      subLabel: "miles around",
      parameter: miles,
    },
    {
      label: "On Time",
      subLabel: "%",
      parameter: 100,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full relative md:px-0 h-auto md:h-screen">
      <div className="w-full md:w-[50%] h-full relative">
        <div className={`w-[430px] md:w-[125vh] h-[520px] md:h-[125vh] rounded-r-[100%] rounded-bl-[100%] object-cover border-[10px] border-white shadow-xl -top-20 -left-32 absolute bg-primary hidden md:block`}></div>

        {data.gallery.slice(4, 9).map((image, index) => (
          <div key={index}
            className={`w-full md:w-[125vh] h-[520px] md:h-[125vh] rounded-tr-none md:rounded-tr-[100%] rounded-bl-[20%] md:rounded-bl-[100%]  rounded-br-[20%] md:rounded-br-[100%] object-cover border-[8px] border-white shadow-xl -top-20 left-0 md:-left-40 relative md:absolute ${index === currentSlide ? 'animate-zoom-in' : 'hidden'}`}
          >
            <img
              src={image}
              alt={"image slider" + index}
              className="w-full h-full object-cover rounded-tr-none md:rounded-tr-[100%] rounded-bl-[20%] md:rounded-bl-[100%]  rounded-br-[20%] md:rounded-br-[100%]"
            />

          </div>
        ))}
        <button
          onClick={nextSlide}
          className="text-white text-lg bg-secondary rounded-full w-14 h-14 transition-all duration-300 ease-in-out hover:bg-btnColor hover:border-btnColor absolute right-44 md:-right-6 bottom-10 md:bottom-1/2 z-30 border-4 border-white"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

      </div>
      <div className="w-full md:w-1/2 h-full pl-2 md:pl-32 pt-0 md:pt-14 flex flex-col items-center md:items-start space-y-3 justify-start md:justify-center text-center md:text-start -mt-12 z-10 md:-mt-0">
        <div className="bg-secondary px-5 py-1 rounded-bl-full rounded-r-full w-4/5 md:w-3/5 text- text-white font-semibold text-base border-2 border-white shadow-xl hidden md:block">
          <p>{data.name}</p>
        </div>
        <h2 className="text-border text-4xl md:text-6xl "><IconGlobal /> {data.slogan[0]}</h2>
        <p>{data.valuesContent.mission}</p>
        <ButtonContent />
      </div>
      {/* <div className="w-full md:w-1/2 h-full pl-2 md:pl-24 pt-0 md:pt-14 flex flex-col items-center md:items-start space-y-3 justify-start md:justify-center text-center md:text-start -mt-12 z-10 md:-mt-0">
        <div className="bg-secondary capitalize px-5 py-1 rounded-bl-full rounded-r-full w-4/5 md:w-3/5 text- text-white font-semibold text-base border-2 border-white shadow-xl hidden md:block">
          <p><i className="fa-solid fa-house"></i> {data.name}</p>
        </div>
        <h2 className="text-border text-4xl md:text-6xl capitalize "><IconGlobal /> {data.slogan[0]} </h2>
        <p>{data.valuesContent.mission}</p>
        <ButtonContent />
      </div> */}

    </div>
  );
};

export default HeroSection2;
