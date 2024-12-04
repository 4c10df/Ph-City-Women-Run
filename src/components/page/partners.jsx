import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import ConferenecNav from "../navigation/conNav";
import PartnerHeroSection from "../contents/sections/OurPartners/partnersHero";
import PartnersSection from "../contents/sections/OurPartners/partnersSection";
import ConferenceForm from "../form/conferenceForm";


function Partners() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConferenceform, setIsOpenConferenceform] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  const openConferenceform = () => setIsOpenConferenceform(true);
  const closeConferenceform = () => setIsOpenConferenceform(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenceForm
          isOpenConferenceform={isOpenConferenceform}
          closeConferenceform={closeConferenceform}
        />
        <ConferenecNav />
        <PartnerHeroSection openConferenceform={openConferenceform} />
        <PartnersSection />

        <Footer />
      </div>
    </>
  );
}

export default Partners;
