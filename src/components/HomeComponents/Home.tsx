import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
import LatestNews from "./LatestNews";
import { useTranslation } from "react-i18next";
import EREIGNIS from "./EREIGNIS";
import Event from "../EventComponents/Event";

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
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />
      <WhatWeDo />
      <Slider />
      <OurStory
        our={tMember("become")}
        title={tMember("title")}
        content={tMember("story")}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />
      <LatestNews />
      <EREIGNIS />
    </div>
  );
}

export default Home;
