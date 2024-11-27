import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <Hero />
      <OurStory />
      <WhatWeDo />
      <Slider />
      <OurStory />
    </div>
  );
}

export default Home;
