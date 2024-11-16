import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import VolunNav from "../navigation/volNav";
import Volundepartment from "../contents/sections/volunteerSection/departmentHero";
import Department from "../contents/sections/volunteerSection/department";

function VolunteerDepartment() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <VolunNav />
        <Volundepartment />
        <Department />

        <Footer />
      </div>
    </>
  );
}

export default VolunteerDepartment;
