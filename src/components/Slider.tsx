import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    { src: "https://s3-alpha-sig.figma.com/img/738c/423d/f0e9814614aabaa22389f52a3d144969?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KIVk8ZtzrBZdnVGdnT-BxLR8csFzY37k9qCsm5Q3Ep8eOtCT3r4pIf2SeV~EVfczpOGKP8PaAF60UT-cdYSwQ1i5kN-rGMp1cxb8EzwUvi1-MUm4CNADuhhjThbQtwgM-~eh7Av1hJtfpCy0-mdiuuV7hkjsyGupZAwgKRdnbga3ADg2HGPHdsZJI3M6bg9skAWP6wcFOtm7lcyZsMsyhg1SaHAECj~KfjWHNSQwU7M7GXkVhYnTSDQ0MlXoYH91F2C7fmmmJB9mh8cBlTViVqPYjOr2Hgc1b8ESNTgCtps0NOIKhK43o88OfPSC4IerRR0U5M37diV47G6u4L2Pgw__", name: "Full Name 1", position: "Position 1" },
    { src: "https://s3-alpha-sig.figma.com/img/1554/27ea/4976c364e681cd8e8d6ae5b6a58818f2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWpGJpVIyzo2iNyx6VJEhTvOYE6SV3rDmiCfR6NDUyB0Pxx~6t-ySq9yH4lpL6Zia3R0HUnQY0sqKl8FT8PEAXM3dFh78jIX7hYXbDw6xFRjquwZEmJm3JpSnAWxC0lcEDOO2h6e2o4JJJEhVWWxXGF2uNnjBdQykblA~WatJs~zy67wtaniUu3DS5RO0f13SQyAgPrBWbBA7jCoct~cgiDnDWK-DyqaIj1X9BDmgFggvomQAI2aDQgmviGooMWH4zv-ZP~aZ8XKuUjUmYLxGRvldPh3nR81Mv-xWDvx5UL5CcQmhqKIrQ8As5Vm-FhIIC8o2ZzeH6qV4LUTY7v8OQ__", name: "Full Name 2", position: "Position 2" },
    { src: "https://s3-alpha-sig.figma.com/img/ad8b/a92c/9e252417e19320a3688d65c4c95a8751?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDg9eQHY23QvAjksvrD482v-JZAcnR6SIwZOlahNQzEEiR6LRxI2cwz~W-93zXuxoP-1zUPAy1bpcgPFdTyjs3~Yv~VVQlnRprVWuWp9LinP8goc1Ec365p6ZfhnQ9BQGiZFmymEFkSlXdRCQjugwGRqJQ0lLyXhSarp6kbjIwtPYFCVdBawTt7jEzo6~zuoMab7nEef2SgRyQuYvnMlTa1USe2p8i9CHTdeDPfciSkGf6OnUqjCU6mjBpt24p03gm2JGNxnH25eAurk3m5wembx6yk9Sp3bWfImme71a9ApU0wWeeCvAU6YN8N0Dm1RcDhC5SMzVic4LIg4Sns8xw__", name: "Full Name 3", position: "Position 3" },
    { src: "https://s3-alpha-sig.figma.com/img/1554/27ea/4976c364e681cd8e8d6ae5b6a58818f2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWpGJpVIyzo2iNyx6VJEhTvOYE6SV3rDmiCfR6NDUyB0Pxx~6t-ySq9yH4lpL6Zia3R0HUnQY0sqKl8FT8PEAXM3dFh78jIX7hYXbDw6xFRjquwZEmJm3JpSnAWxC0lcEDOO2h6e2o4JJJEhVWWxXGF2uNnjBdQykblA~WatJs~zy67wtaniUu3DS5RO0f13SQyAgPrBWbBA7jCoct~cgiDnDWK-DyqaIj1X9BDmgFggvomQAI2aDQgmviGooMWH4zv-ZP~aZ8XKuUjUmYLxGRvldPh3nR81Mv-xWDvx5UL5CcQmhqKIrQ8As5Vm-FhIIC8o2ZzeH6qV4LUTY7v8OQ__", name: "Full Name 4", position: "Position 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative mx-auto">
    
      <div className="text-center mb-8">
        <h1 className="font-medium text-customRed mb-1">Board</h1>
        <p className="text-3xl font-medium mb-16 text-center">Lorem Ipsum is Simply</p>
      </div>

      
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 404}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={`slide-${index}`}
              className="flex-shrink-0 w-[404px] h-[536px] flex items-center justify-center mr-10 relative"
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-[404px] h-[536px] object-cover"
              />
              <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-black via-black to-transparent text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{image.name}</h3>
                <p className="text-sm">{image.position}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-8 pt-4">
         
          <button
            onClick={prevSlide}
            className="text-black text-3xl cursor-pointer pl-4"
          >
            &#10094;
          </button>

         
          <div className="flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-customRed" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          
          <button
            onClick={nextSlide}
            className="text-black text-3xl cursor-pointer pr-4"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
