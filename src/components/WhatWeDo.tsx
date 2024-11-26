import React from "react";

const features = [
  {
    icon: "fas fa-lightbulb",
    color: "text-blue-500",
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    icon: "fas fa-leaf",
    color: "text-green-500",
    title: "Sed Do Eiusmod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    icon: "fas fa-heart",
    color: "text-red-500",
    title: "Nulla Facilisi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis.",
  },
  {
    icon: "fas fa-chart-line",
    color: "text-purple-500",
    title: "Curabitur Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.",
  },
  {
    icon: "fas fa-rocket",
    color: "text-orange-500",
    title: "Integer Nec Odio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    icon: "fas fa-users",
    color: "text-yellow-500",
    title: "Ut Nec Odio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Ut nec odio.",
  },
  {
    icon: "fas fa-cog",
    color: "text-gray-500",
    title: "Sed Cursus Ante",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    icon: "fas fa-shield-alt",
    color: "text-teal-500",
    title: "Nam Nec Ante",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis.",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100 py-18 mt-8">
      <div className="w-full max-w-screen-lg px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
        <p className="font-medium text-customRed mb-1">WHAT WE DO</p>
        <h2 className="text-3xl font-medium mb-16 text-center">
            LOREM IPSUM IS SIMPLY
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-2  sm:gap-y-14 xl:grid-cols-4 xl:gap-x-64 xl:gap-y-9 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 hover:shadow-2xl transition-all duration-300 border border-dividers"
              style={{ width: "280px", height: "255px" }}
            >
              <div className="flex items-start mb-4 mt-4">
                <div className={`${feature.color} text-4xl mr-4`}>
                  <i className={feature.icon}></i>
                </div>
              </div>

              <div className="flex flex-col justify-start mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
