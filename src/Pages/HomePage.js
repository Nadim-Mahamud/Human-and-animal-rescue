import React from "react";
import Banner from "../Components/HomePage/Banner";
import NeedHelp from "../Components/HomePage/NeedHelp";
import VolunteerSection from "../Components/HomePage/VolunteerSection";
import WelcomeCarousel from "../Components/HomePage/WelcomeCarousel";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <WelcomeCarousel />
            <NeedHelp />
            <VolunteerSection />
        </div>
    );
};

export default HomePage;
