import React, { useState } from "react";

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
import VolunteerForm from "../form/volunteer-form";

function Main() {
  const [isOpenVolunteerform, setIsOpenVolunteerform] = useState(false);
  const openVolunteerform = () => setIsOpenVolunteerform(true);
  const closeVolunteerform = () => setIsOpenVolunteerform(false);

  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      <VolunteerForm
        isOpenVolunteerform={isOpenVolunteerform}
        closeVolunteerform={closeVolunteerform}
      />
      <Thecount />
      <RunLikeNever openVolunteerform={openVolunteerform}  />
      <Volunteer />
      <ConferenceSection />
      <ShirtsSection />
      <CommunitEvents />
      <AchievementsSection />

      <YourPotential />
      <OurPartners />
    </div>
  );
}

export default Main;
