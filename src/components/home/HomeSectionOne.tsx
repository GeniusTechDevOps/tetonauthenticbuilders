import React from 'react';

import ButtonContent from "../buttons/Buttons";
import IconGlobal from "../global/IconGlobal";
import HighlightedText from "../global/TitleColor";
import type { RootObject, SectionsHomeAbout } from '../../interfaces/dbData';

interface Props {
  data: RootObject;
  aboutSection: SectionsHomeAbout[]
}

const HomeSectionOne: React.FC<Props> = ({ data, aboutSection }) => {
  return (
    <section className="flex items-center font-poppins md:py-[100px] py-[50px]">
      <div className="flex flex-col-reverse md:flex-row w-full h-auto">
        <div className="w-full md:w-1/2 px-10 flex flex-col justify-center items-center md:items-start pt-10 md:pt-0 text-center md:text-start">
          <h2 className="mt-2 text-3xl font-black md:text-5xl text-secondary pb-5 md:pb-10">
            <HighlightedText text={data.slogan[2]} defaultColor="white" />
          </h2>
          <p className="mb-6 text-base leading-7 text-gray-100">
            {aboutSection[0].text}
          </p>
          <ButtonContent />
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute right-10 -top-10 w-44 h-44 rounded-full border-[20px] border-secondary animate-floating"></div>
          <img
            src={data.gallery[6]}
            alt="about-img"
            className="w-full h-[360px] md:h-[700px] object-cover rounded-tl-[100%] rounded-bl-[100%] rounded-tr-[100%] relative"
          />
          <img
            src={data.gallery[7]}
            alt="about-img"
            className="w-[180px] md:w-[350px] h-[180px] md:h-[350px] object-cover rounded-tl-[100%] rounded-br-[100%] rounded-tr-[100%] absolute left-0 md:-left-10 -bottom-10 animate-floating border-8 border-white shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

