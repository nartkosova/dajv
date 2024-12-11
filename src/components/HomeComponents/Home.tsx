import Hero from "./Hero";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
import LatestNews from "./LatestNews";
import { useTranslation } from "react-i18next";
import EREIGNIS from "./EREIGNIS";

function Home() {
  const { t } = useTranslation("home");
  return (
    <div>
      <Hero />
      <OurStory
        our={t("our")}
        title={t("title1")}
        content={t("story1")}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />
      <WhatWeDo />
      <Slider />
      <OurStory
        our={t("become")}
        title={t("title")}
        content={t("story")}
        image="https://s3-alpha-sig.figma.com/img/2e0e/fafd/58d36059688776d4ba895dbd2789ce57?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbYxFxmjWdQa6nfWl6B-svty16pv6I40ldGG-PYcr-fiKpWQZprxrJJc9VI2y9vEWe8FlkP8zdy7UkbUj9bLO9~kNJQbp1M1NBzy4fnQcHD1~Vrf7HWsa0jowmRejBQNsz77nhEwkgdxH8rTBugxA20xb-VB2w0M1qnjoSn3ISIJsRh1dEjm0cPZGLFCZtouBrE2CVyVK-ISRTrerE74Jax7KrBStLxAoj~GqUxKmnlGcfAS9t0cXk7Kf4YWdC~hj7XjCFj2sfYhN-TdOJ3V-gSMEZ1Y10UvwFM7EJk-qLyouo0idlNRMgq-FdTMZpPyCJ4KvSro-RcYoe5VZ~wJ4A__"
      />
      <LatestNews />
      <EREIGNIS />
    </div>
  );
}

export default Home;
