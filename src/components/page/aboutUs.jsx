import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import TheRun from "../contents/sections/aboutSection/theRun";
import Race from "../contents/sections/aboutSection/raceInfo";
import Prizes from "../contents/sections/aboutSection/prizes";
import Rules from "../contents/sections/aboutSection/rules";
import RouteMap from "../contents/sections/aboutSection/routeMap";


function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <TheRun />
        <Race />
        <Prizes />
        <Rules />
        <RouteMap />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
