import React from "react";
import { Link } from "react-router-dom";
import assist from "./assist.png";
import gp1 from "../../Images/gp-1.jpg";
import gp2 from "../../Images/gp-2.jpg";
import gp3 from "../../Images/gp-3.jpg";
import gp4 from "../../Images/gp-4.jpg";
import gp5 from "../../Images/gp-5.jpg";
import gp6 from "../../Images/gp-6.jpg";
import gp7 from "../../Images/gp-7.jpg";
import gp8 from "../../Images/gp-8.jpg";
import gp9 from "../../Images/gp-9.jpg";
import gp10 from "../../Images/gp-10.jpg";
import gp11 from "../../Images/gp-11.jpg";
import gp12 from "../../Images/gp-12.jpg";

const Footer = () => {

    const galleries = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, gp11, gp12];

    return (
        <footer class="bg-black text-white h-fit">
            <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 h-fit">
                <div class="flex flex-col justify-around items-center md:flex-row gap-5 md:gap-0 h-62">
                    <div>
                        <div className="flex flex-row md:justify-center justify-center items-center">
                            <img src={assist} className="mr-3 h-20 sm:h-20" alt="Site Logo" />
                            <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                                <span className="text-primary">Rescue</span>
                                <span>Me</span>
                            </span>
                        </div>
                        <p class="max-w-xs mt-4 text-lg text-gray-400">
                        Our Passion Is To Help People And Animals When They Need It
                        </p>
                        <div class="flex justify-center mt-8 space-x-6 text-gray-600">
                            <a
                                class="hover:opacity-75 mx-4"
                                href="https://www.facebook.com/humanandanimalrescuecenter"
                                target="_blank"
                            >
                                <span class="sr-only"> Facebook </span>
                                <i class="fa-brands fa-facebook text-3xl mx-1"></i>
                            </a>
                            
                            <a
                                class="hover:opacity-75 mx-4"
                                href="https://twitter.com/RescueMe321"
                                target="_blank"
                            >
                                <span class="sr-only"> Twitter </span>
                                <i class="fa-brands fa-twitter text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-75 mx-4"
                                href="https://www.instagram.com/merescue321/"
                                target="_blank"
                            >
                                <span class="sr-only"> Instagram </span>
                                <i class="fa-brands fa-instagram text-3xl mx-1"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-large">Important Link</p>
                        <div class="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                            <Link to="/about" class="hover:opacity-75">
                                {" "}
                                About{" "}
                            </Link>
                            <Link to="/contact" class="hover:opacity-75">
                                {" "}
                                Contact{" "}
                            </Link>
                            <Link to="/gallery" class="hover:opacity-75">
                                {" "}
                                Gallery{" "}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p class="font-bold text-large">Gallery</p>

                        <div class="flex w-full flex-wrap content-start justify-center p-5">
                            <div class="grid grid-cols-3 gap-3">
                                {
                                    galleries.slice(0,6).map(galleryPic => {
                                        return (
                                            <img
                                            class="h-20 w-20 "
                                            src={galleryPic}
                                            alt="gallery-pic"
                                        /> 
                                        )
                                    })
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <p class="mt-8 text-xl font-bold text-cyan-500">
                    © 2022 All rights reserved by{" "}
                    <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                        <span className="text-primary">Rescue</span>
                        <span className="text-white">Me</span>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
