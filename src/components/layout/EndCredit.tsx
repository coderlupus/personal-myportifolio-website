import React from "react";
import { useTranslation } from 'react-i18next';

const EndCredit = () => {
  const { t, i18n } = useTranslation();

  return <section id="inspiration" className="w-full bg-white py-0" key={i18n.language}>
    <div className="section-container opacity-0 animate-on-scroll pb-2">
      <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
        <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>


          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center">
            <h2 className="font-playfair text-white italic font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {t('end_quote.text')}
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-light tracking-wider">
              {t('end_quote.author')}
            </p>
          </div>

          {/* White box at the bottom with overflow */}
          <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
        </div>
      </div>
    </div>
  </section>;
};
export default EndCredit;
