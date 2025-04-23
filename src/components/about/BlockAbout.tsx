import type { RootObject, SectionsHomeAbout } from "../../interfaces/dbData";
import ButtonContent from "../buttons/Buttons";
import HighlightedText from "../global/TitleColor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface BlockAboutProps {
    data: RootObject;
    slidesPerView?: number;
    aboutSection: SectionsHomeAbout[]
}

const BlockAbout: React.FC<BlockAboutProps> = ({ data, slidesPerView = 3, aboutSection }) => {
    return (
        <section className="overflow-hidden">
            <div
                className="flex items-center py-20 bg-gradient-to-br from-black font-poppins"
            >
                <div
                    className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6"
                >
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 mb-10 lg:mb-8 text-center">
                            <div className="pl-4">
                                
                                <span className="text-white text-[28px] font-bold">About Us <i className="fa-solid fa-house"></i></span>
                                <h2 className="text-5xl font-bold text-white">
                                    <HighlightedText text={data.slogan[2]} defaultColor="white" />
                                </h2>
                            </div>
                            <p className="mb-4 text-base leading-7 text-white">
                                {aboutSection[0].text}
                            </p>
                            <div className="flex justify-center items-center">
                                <ButtonContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-4/5 h-auto bg-white overflow-hidden border-8 rounded-l-full rounded-tr-full border-white flex justify-center items-center space-x-4 mx-auto -mt-28 -mr-10 p-2"
            >
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
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
                    {data.gallery.slice(3, 9).map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center h-auto overflow-hidden rounded-2xl " >
                            <img src={img} className="w-full h-[250px] object-cover" alt="img-about" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default BlockAbout;