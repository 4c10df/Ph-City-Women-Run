import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import HeroSection from "../contents/sections/conSection/hero";
import ConfereneVideo from "../contents/sections/conSection/confereVideos";
import ConferenecNav from "../navigation/conNav";
import Venue from "../contents/sections/conSection/venue";
import TalkAbout from "../contents/sections/conSection/talk";
import DayToExplore from "../contents/sections/conSection/day";

function Conference() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenecNav />
        <HeroSection />
        <DayToExplore/>
        <TalkAbout />
        <Venue />
        <ConfereneVideo />
        <Footer />
      </div>
    </>
  );
}

export default Conference;
