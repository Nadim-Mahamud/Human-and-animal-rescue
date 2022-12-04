import React from "react";
import gp1 from "../Images/gp-1.jpg";
import gp2 from "../Images/gp-2.jpg";
import gp3 from "../Images/gp-3.jpg";
import gp4 from "../Images/gp-4.jpg";
import gp5 from "../Images/gp-5.jpg";
import gp6 from "../Images/gp-6.jpg";
import gp7 from "../Images/gp-7.jpg";
import gp8 from "../Images/gp-8.jpg";
import gp9 from "../Images/gp-9.jpg";
import gp10 from "../Images/gp-10.jpg";
import gp11 from "../Images/gp-11.jpg";
import gp12 from "../Images/gp-12.jpg";

const GalleryPage = () => {
    const galleries = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, gp11, gp12];

    return (
        <div>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="flex flex-col mb-6 lg:justify-around lg:flex-row md:mb-8">
                    <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span class="inline-block mb-1 sm:mb-4">Human, Animal & Community.</span>
                        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
                    </h2>
                    <p class="text-gray-700 lg:text-sm lg:max-w-md">
                        At Rescue Me, we honor more than 2 years of commitment to rescuing humans &
                        animals and advocating for positive change to create a world where all
                        mankind can thrive.
                    </p>
                </div>

                <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    {galleries.map((galleryPic) => {
                        return (
                            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    class="object-cover w-full h-56 md:h-64 xl:h-80"
                                    src={galleryPic}
                                    alt=""
                                />
                                {/* <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p class="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                    <p class="text-sm tracking-wide text-gray-300">
                        Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                        been dogged by two questions since the day it was made: Who’s
                        the subject and why is she smiling?
                    </p>
                </div> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
