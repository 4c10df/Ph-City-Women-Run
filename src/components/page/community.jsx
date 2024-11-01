import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import LatestNews from "../contents/sections/getNews";
import Partnership from "../contents/sections/newsSections/partner";
import EventNav from "../navigation/eventsNav";
import CommunitEvents from "../contents/APIs/communitEvents";

function CommunityEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <EventNav />
              <Partnership />
              <CommunitEvents />
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default CommunityEvents;
