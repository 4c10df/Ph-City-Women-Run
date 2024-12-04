import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import TheRun from "../contents/sections/aboutSection/theRun";
import Race from "../contents/sections/aboutSection/raceInfo";
import Race2 from "../contents/sections/aboutSection/raceInfo2";
import Prizes from "../contents/sections/aboutSection/prizes";
import Rules from "../contents/sections/aboutSection/rules";
import RouteMap from "../contents/sections/aboutSection/routeMap";
import ConferenceForm from "../form/conferenceForm";
import PageTitle from "../pageTitle/pageTitle"



function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConferenceform, setIsOpenConferenceform] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  const openConferenceform = () => setIsOpenConferenceform(true);
  const closeConferenceform = () => setIsOpenConferenceform(false);

  return (
    <>
      <PageTitle
        title="My Page Title"
        description="This is a description of the page."
        keywords="the run"
      />
      ;
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <ConferenceForm
          isOpenConferenceform={isOpenConferenceform}
          closeConferenceform={closeConferenceform}
        />
        <TheRun />
        <Race openConferenceform={openConferenceform}  />
        <Race2 openConferenceform={openConferenceform} />
        <Prizes />
        <Rules />
        <RouteMap />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
