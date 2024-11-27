import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WhatWeDo from "./components/WhatWeDo";
import Header from "./Header/Header";
import Slider from "./components/Slider"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <OurStory />
      <WhatWeDo/>
      <Slider/>
    </div>
  );
}

export default App;
