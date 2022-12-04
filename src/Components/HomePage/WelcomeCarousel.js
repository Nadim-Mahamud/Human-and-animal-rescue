import { Carousel } from "flowbite-react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gp1 from '../../Images/gp-1.jpg'
import gp2 from '../../Images/gp-2.jpg'
const WelcomeCarousel = () => {
    return (
        <div>
            <div className="my-10 flex justify-center items-center container mx-auto">
                <div className="container mx-auto">
                    <h1 className="md:text-3xl text-2xl font-bold my-5">
                        Welcome to{" "}
                        <span className="bg-black px-3 py-2 rounded-lg">
                            <span className="text-primary">Rescue</span>{" "}
                            <span className="text-white">Me</span>
                        </span>
                    </h1>
                    <hr className="w-1/12 mx-auto border-2 border-primary" />
                    <div className="md:w-2/3 mx-auto">
                        <p className="my-5">
                        With the intention of saving more lives, we are establishing an Alliance to address the structural issues
                        affecting the communities, people, and animals in our area and beyond.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="h-56 sm:h-64 md:h-screen 2xl:h-full md:w-2/3 mx-auto">
                    <Carousel>
                        <img
                            src="https://www.successconsciousness.com/blog/wp-content/uploads/helping-others.jpg"
                            alt="..."
                        />
                        <img
                            src={gp1}
                            alt="..."
                        />
                        <img
                            src={gp2}
                            alt="..."
                        />
                        <img
                            src="https://ca-times.brightspotcdn.com/dims4/default/77c4cc5/2147483647/strip/true/crop/3840x2160+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff1%2Fd7%2F0865bec74a43b47e6cd6fb8a7325%2Ftherescue-sg-028.jpg"
                            alt="..."
                        />
                        <img
                            src="https://www.psychnewsdaily.com/wp-content/uploads/2021/05/helping-others-girl-helping-boy-stand-up.jpg"
                            alt="..."
                        />
                        
                        <img
                            src="https://ggsc.s3.amazonaws.com/images/uploads/How_Generosity_Can_Make_You_Happier_in_a_Pandemic.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>
            <div className=" bg-red-600">
                <div className="flex md:flex-row flex-col gap-5 justify-around items-center my-10 py-10 container mx-auto">
                    <div>
                        <h1 className="text-white text-3xl font-bold font-rs">
                            24/7 available.  message us immediately through messenger bot! <br />
                            
                        </h1>
                    </div>
                    <div>
                        <button
                            to="/sing-in"
                            className={
                                "rounded-lg text-primary bg-white ml-3 py-3 px-6 text-xl font-bold"
                            }
                        >
                            Contact us Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCarousel;
