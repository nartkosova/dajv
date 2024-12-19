import React from "react";
import { useTranslation } from "react-i18next";
import groupIcon from "../../assets/group.png"
import letterIcon from "../../assets/letter.png"
import docIcon from "../../assets/document.png"
import graduateIcon from "../../assets/graduate.png"

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation("home");
  const features = [
    {
      icon: groupIcon,
      title: t("1"),
      description: t("1_content"),
    },
    {
      icon: letterIcon,
      title: t("2"),
      description: t("2_content"),
    },
    {
      icon: docIcon,
      title: t("3"),
      description: t("3_content"),
    },
    {
      icon: graduateIcon,
      title: t("4"),
      description: t("4_content"),
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100 pb-28 px-8 lg:px-20">
      <div className="w-screen">
        <div className="text-center mb-8  max-w-3xl mx-auto">
          <p className="font-medium text-customRed mb-1 uppercase">
            {t("what_we_do")}
          </p>
          <h2 className="text-3xl font-medium mb-12 sm:mb-20 text-center uppercase">
            {t("what_we_do_title")}
          </h2>
        </div>

        <div className="grid flex-wrap justify-center gap-11 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center bg-white rounded-md p-4 hover:shadow-xl transition-all duration-300 border self-center border-dividers items-center space-y-4"
              style={{ maxWidth: "1200px", minHeight: "314px", maxHeight: "350px" }}
            >
              <div className={`size-8 self-start item`}>
                <img 
                src={feature.icon}
                alt={feature.icon}
                ></img>
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
