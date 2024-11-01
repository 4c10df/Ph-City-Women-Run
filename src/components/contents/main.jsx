import React from "react";

// import Link from "./link";
import RunLikeNever from "./sections/homeSection/runLike";
import ConferenceSection from "./sections/homeSection/confere";
import CommunitEvents from "./sections/homeSection/events";
import OurPartners from "./sections/OurPartners/OurPartner";
import YourPotential from "./sections/homeSection/Discover";
import Thecount from "./sections/homeSection/count";
import AchievementsSection from "./sections/homeSection/achievements";
import Volunteer from "./sections/homeSection/volunSection";
import ShirtsSection from "./sections/homeSection/shirts";



function Main() {
  
  

  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      <Thecount />
      <RunLikeNever />
      <Volunteer/>
      <ConferenceSection />
      <ShirtsSection/>
      <CommunitEvents />
      <AchievementsSection/>

      <YourPotential />
      <OurPartners />
    </div>
  );
}

export default Main;
