import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
import LatestNews from "./LatestNews";

function Home() {
  return (
    <div>
      <Hero />
      <OurStory />
      <WhatWeDo />
      <Slider />
      <OurStory />
      <LatestNews />
    </div>
  );
}

export default Home;
