import React from "react";
import sohan from './sohan.jpg'
import nadim from './nadim.jpg'

const VolunteerSection = () => {
    

    return (
        <div className="py-8">
            <div className="card  text-center md:w-2/3 mx-auto px-3">
                <h1 className=" text-4xl font-ubuntu py-8 font-rs">
                    Our <span className="text-primary">volunteers</span>
                </h1>
                <h6 className="font-lpen text-center">
                    The heart of our organization is its volunteer base. Are you a dependable,
                    resourceful person who is driven to improve the lives of both people and
                    animals? Then join the team working to secure a loving home for every unwanted
                    person and animal, accessible medical treatment for every ill or wounded person
                    and animal, a stop to abuse and cruelty toward.
                </h6>
            </div>

            <div className="flex flex-wrap justify-center items-center pt-16">
                <div className="card w-72 text-center">
                    <img
                        className="h-80 bg-gray-100 mx-auto"
                        src={sohan}
                        alt=""
                    />

                    <div className="card-body">
                        <h2 className="text-2xl font-bold  text-primary mt-2"> Sohanur Rahman</h2>
                        <p>Lead volunteer</p>
                        <div className="flex flex-nowrap justify-center items-center">
                            <a
                                href="https://www.instagram.com/__sohan_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-instagram text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sohanur-rahman-81a294194/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-linkedin-in text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/sohan0808/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-facebook-f text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://twitter.com/sohan08_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-twitter text-black m-0 p-0"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-72">
                    <img
                        className="h-80 bg-gray-100 mx-auto"
                        src={nadim}
                        alt=""
                    />

                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-primary mt-2">Nadim Mahmud</h2>
                        <p>Co-Volunteer</p>
                        <div className="flex flex-nowrap justify-center items-center">
                            <a
                                href="https://www.instagram.com/nadim_mahamud1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-instagram text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nadim-mahamud-713571199/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-linkedin-in text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100009660246995"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-facebook-f text-black m-0 p-0"></i>
                            </a>
                            <a
                                href="https://twitter.com/191_nadim"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                            >
                                <i className="fa-brands fa-twitter text-black m-0 p-0"></i>
                            </a>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default VolunteerSection;
