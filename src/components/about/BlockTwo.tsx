import React from 'react';
import type { RootObject, SectionsHomeAbout } from '../../interfaces/dbData';


interface Props {
  data: RootObject;
      aboutSection: SectionsHomeAbout[]
}

const Blocktwo: React.FC<Props> = ({ data, aboutSection }) => {
  return (
    <section className="flex items-center justify-center lg:h-screen">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="flex flex-wrap">
          <div className="flex-1 pl-0 lg:pl-4">
            <div className="mb-12">
              <div className="relative text-center">
                <h2 className="text-5xl font-bold">{data.slogan[6]}</h2>
                <div className="flex w-24 mt-3 mb-10 overflow-hidden rounded mx-auto">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div
                    className="flex-1 h-2"
                    style={{ backgroundColor: data.colors.secondaryColor }}
                  ></div>
                  <div
                    className="flex-1 h-2"
                    style={{ backgroundColor: data.colors.primaryColor }}
                  ></div>
                </div>
              </div>
              <p className="mb-16 text-base text-gray-500 text-center">
                {aboutSection[1].text}
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {/* Quality & Durability */}
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                <div
                  className="inline-block p-4 mb-4 rounded-full w-14 h-14"
                  style={{ backgroundColor: data.colors.secondaryColor }}
                >
                  <i className="fas fa-star text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-black">Quality & Durability</h3>
              </div>

              {/* Expert Solutions */}
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                <div
                  className="inline-block p-4 mb-4 rounded-full w-14 h-14"
                  style={{ backgroundColor: data.colors.secondaryColor }}
                >
                  <i className="fas fa-headset text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-black">Expert Solutions</h3>
              </div>

              {/* Innovation */}
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                <div
                  className="inline-block p-4 mb-4 rounded-full w-14 h-14"
                  style={{ backgroundColor: data.colors.secondaryColor }}
                >
                  <i className="fa-solid fa-house text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-black">Innovation</h3>
              </div>

              {/* Sustainability & Environment */}
              <div className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                <div
                  className="inline-block p-4 mb-4 rounded-full w-14 h-14"
                  style={{ backgroundColor: data.colors.secondaryColor }}
                >
                  <i className="fas fa-leaf text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Sustainability & Environment
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blocktwo;
