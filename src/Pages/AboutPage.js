import React from "react";
import about1 from '../Components/HomePage/about-1.jpg'
import about2 from '../Components/HomePage/about-2.jpg'
import about3 from '../Images/gp-1.jpg'
import about4 from '../Images/gp-10.jpg'

const AboutPage = () => {
    return (
        <div>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 class="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-red-600 sm:text-4xl md:mx-auto">
                        About Us
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg">
                        At Rescue Me, We work for humans and animals to rescue them in emergency
                        situations. We ensure to help them to find their needs. If someone is
                        helpless we find him their shelter. If someone accident on the road or car
                        we provide find ambulance or hospital in an emergency. So as do with animals
                        too.
                    </p>
                </div>
                <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                    <div class="flex flex-col justify-center">
                        <div class="flex">
                            <div class="mr-4">
                                <div class="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-100">
                                    <svg
                                        class="w-8 h-8 text-purple-600"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        ></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 class="mb-2 font-semibold leading-5 text-red-600">MAIN MOTIVE:</h6>
                                <p class="text-sm text-gray-900">
                                    Report Human and Animals emergencies. Find them a Suitable
                                    organization when they need it.
                                </p>
                                <hr class="w-full my-6 border-gray-300" />
                            </div>
                        </div>
                        <div class="flex">
                            <div class="mr-4">
                                <div class="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-100">
                                    <svg
                                        class="w-8 h-8 text-purple-600"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        ></polygon>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h6 class="mb-2 font-semibold leading-5 text-red-600">OUR COMMITMENT :</h6>
                                <p class="text-sm text-gray-900 text-start">
                                    <i class="fa-solid fa-star text-red-600"></i> To find helpless people's
                                    shelter. <br />
                                    <i class="fa-solid fa-star text-red-600"></i> Rescue and care for homeless
                                    abused and neglected people and animals. <br />
                                    <i class="fa-solid fa-star text-red-600"></i> Rescue humans and animals when
                                    they accident. <br />
                                    <i class="fa-solid fa-star text-red-600"></i> 24 hours volunteer service.{" "}
                                    <br />
                                    <i class="fa-solid fa-star text-red-600"></i> Adoption of humans and animals
                                    through our service.
                                </p>
                                <hr class="w-full my-6 border-gray-300" />
                            </div>
                        </div>
                        
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <img
                            class="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                            src={about1}
                            alt=""
                        />
                        <img
                            class="object-cover w-full h-48 rounded shadow-lg"
                            src={about2}
                            alt=""
                        />
                        <img
                            class="object-cover w-full h-48 rounded shadow-lg"
                            src={about3}
                            alt=""
                        />
                        <img
                            class="object-cover w-full h-48 col-span-2 rounded shadow-lg"
                            src={about4}
                            alt=""
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
