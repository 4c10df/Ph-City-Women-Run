import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import VolunNav from "../navigation/volNav";
import VolunSection from "../contents/sections/volunteerSection/volunteerHero";
import BecomeAteam from "../contents/sections/volunteerSection/becomeTeam";
import Benefits from "../contents/sections/volunteerSection/benefit";
import Requirements from "../contents/sections/volunteerSection/requriement";

function Volunteer() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <VolunNav />
        <VolunSection />
        <BecomeAteam />
        <Benefits />
        <Requirements/>
       
        <Footer />
      </div>
    </>
  );
}

export default Volunteer;
