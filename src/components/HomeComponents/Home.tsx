import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
import LatestNews from "./LatestNews";
import { useTranslation } from "react-i18next";

function Home() {
  const { t: tOurStory } = useTranslation("ourStory");
  const { t: tMember } = useTranslation("member");
  return (
    <div>
      <Hero />
      <OurStory
        our={tOurStory("our")}
        title={tOurStory("title")}
        content={tOurStory("story")}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQekt4VydBOqg7KZoOF4LvKZjhCkOK6fAJUEcqhiaKjym1clkXLzMDvP8EFM7A3IbDZ6tMBBl8Ika1rDBpgTTiSFAuVqur2GC5PSBakyYyrD8ujB5p7Csjh4iwGrc11Rnm574PgMAPcFmpyuyqiOE1oAv-mMWbNfEDJXop36K1LpDM-EEMEse8pN8JU02dY9GWdXEUhQ3sMc5qDQMAk-5Ua6cDS94zPrdo~vXYNNCghWrNhOQJljau0WVqboWUU2zESDRYdaTGa1ciMIYnxiwSGdfFm1ltI8TPrjUI0wyvLJcKh~Bl2b3lJvA-AqlCiv9-m2-jZ3cDxdzu6WY1nUAA__"
      />
      <WhatWeDo />
      <Slider />
      <OurStory
        our={tMember("become")}
        title={tMember("title")}
        content={tMember("story")}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQekt4VydBOqg7KZoOF4LvKZjhCkOK6fAJUEcqhiaKjym1clkXLzMDvP8EFM7A3IbDZ6tMBBl8Ika1rDBpgTTiSFAuVqur2GC5PSBakyYyrD8ujB5p7Csjh4iwGrc11Rnm574PgMAPcFmpyuyqiOE1oAv-mMWbNfEDJXop36K1LpDM-EEMEse8pN8JU02dY9GWdXEUhQ3sMc5qDQMAk-5Ua6cDS94zPrdo~vXYNNCghWrNhOQJljau0WVqboWUU2zESDRYdaTGa1ciMIYnxiwSGdfFm1ltI8TPrjUI0wyvLJcKh~Bl2b3lJvA-AqlCiv9-m2-jZ3cDxdzu6WY1nUAA__"
      />
      <LatestNews />
    </div>
  );
}

export default Home;
