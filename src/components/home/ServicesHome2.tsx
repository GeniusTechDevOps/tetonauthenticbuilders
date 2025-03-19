import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import type { DataGeneral, RootObject, Service } from "../../interfaces/dbData";
import FormatText from "../../hooks/FormatText";


interface SliderServicesProps {
  dbServices: Service[];
  landingServices: boolean;
  slidesPerView?: number;
  onePage?: boolean;
  dataGeneral?: DataGeneral;
  dataglobal: RootObject;
}

const ServicesHome2: React.FC<SliderServicesProps> = ({
  dbServices,
  landingServices,
  slidesPerView = 3,
  onePage,
  dataGeneral,
  dataglobal,
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      spaceBetween={20}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: slidesPerView,
        },
      }}
    >
      {dbServices.map((service, index) => (
        <SwiperSlide key={index} className="py-14 flex justify-center items-center" >

          <a
            href={`${onePage
              ? `tel:${dataGeneral?.phones[0].number}`
              : landingServices
                ? `/services/${FormatText(service.title)}`
                : "/services"
              }`}
            aria-label="Learn More"
            className="ml-5 group flex flex-col justify-start items-start gap-2 w-[90%] h-56 duration-500 relative rounded-lg p-4 bg-primary  hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
          >
            <div
              className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-14 -right-10 w-1/2 h-3/5 rounded-lg bg-purple-400"
            >
              <img
                src={service.description[0].image}
                alt={service.title} 
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">{service.title}</h2>
            <p className="text-white">{service.description[0].text.slice(0, 150) + "..."}</p>
          </a>
          {/* <a
            href={`${
              onePage
                ? `tel:${dataGeneral?.phones[0].number}`
                : landingServices
                ? `/services/${FormatText(service.title)}`
                : "/services"
            }`}
            aria-label="Learn More"
            className="rounded-full"
          >
            <div className="relative pb-10 group rounded-full">
              <div className="w-full mx-auto z-20 relative rounded-full">
                <img
                  src={service.description[0].image}
                  alt={service.title}
                  className="md:w-[450px] w-[300px] md:h-[450px] h-[300px] rounded-full object-cover aspect-auto mx-auto border-[10px] border-primary "
                />
                <div className="absolute  w-[75px] h-[75px] flex justify-center items-center overflow-hidden text-2xl  text-secondary  rounded-md top-4 right-[40%] opacity-80 hover:shadow-md transition duration-500 transform z-30">
                  <picture className="w-full h-full rounded-full">
                    <img
                      src={dataglobal?.logos.secondary}
                      alt={`logo ${dataglobal?.name}`}
                      loading="eager"
                      className="w-full h-full object-contain rounded-full"
                      width="200"
                      height="200"
                    />
                  </picture>
                </div>
                <h2
                  className={`font-bold capitalize absolute w-[100%] mx-auto text-white text-center z-20 ${
                    onePage ? "text-xl" : "text-2xl"
                  }`}
                >
                  {service.title}
                </h2>
              </div>
            </div>
          </a> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesHome2;
