import React from "react";
import { useTranslation } from "react-i18next";

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation("whatWeDo");
  const features = [
    {
      icon: "fas fa-lightbulb",
      title: t("1"),
      description: t("1_content"),
    },
    {
      icon: "fas fa-leaf",
      title: t("2"),
      description: t("2_content"),
    },
    {
      icon: "fas fa-heart",
      title: t("3"),
      description: t("3_content"),
    },
    {
      icon: "fas fa-chart-line",
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
            {t("title")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-11">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center bg-white rounded-md p-4 hover:shadow-xl transition-all duration-300 border self-center border-dividers max-w-80 lg:max-w-xl min-h-80 items-center"
              // style={{ maxWidth: "600px", minHeight: "314px" }}
            >
              <div className={`text-customRed text-6xl self-start`}>
                <i className={feature.icon}></i>
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
