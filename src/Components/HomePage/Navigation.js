import { Button, Navbar } from "flowbite-react";
import React from "react";
import assist from "./assist.png";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Navigation = () => {
    const { signInWithGoogle, user, logOut } = useFirebase();

    console.log(user);

    const signIn = () => {
        signInWithGoogle();
    };
    const signOut = () => {
        logOut();
    };

    return (
        <div className="shadow-md">
            <Navbar fluid={true} rounded={true} className="container mx-auto ">
                <Navbar.Brand href="/">
                    <img src={assist} className="mr-3 h-20 sm:h-20" alt="Site Logo" />
                    <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                        <span className="text-primary">Rescue</span>
                        <span>Me</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={
                            "nav-margin border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 text-xl font-bold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={
                            "nav-margin border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 mx-3 text-xl font-bold"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={
                            "nav-margin border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 mx-3 text-xl font-bold"
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={
                            "nav-margin border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 mx-3 text-xl font-bold"
                        }
                    >
                        Gallery
                    </NavLink>
                    
                    {user.auth && (
                        <div class="flex justify-center items-center space-x-4">
                            {/* <img
                            class="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Rounded avatar"
                        /> */}
                            <img
                                class="w-10 h-10 rounded"
                                src={user?.photoURL}
                                alt="Default avatar"
                            />
                        </div>
                    )}

                    {!user?.auth && (
                        <button
                            onClick={signIn}
                            to="/sing-in"
                            className={
                                "rounded-lg text-white bg-primary my-3 md:my-0 ml-3 p-3 text-xl font-bold"
                            }
                        >
                            Sign In
                        </button>
                    )}

                    {user?.auth && (
                        <button
                            onClick={signOut}
                            to="/sing-in"
                            className={
                                "rounded-lg text-white bg-primary my-3 md:my-0 ml-3 p-3 text-xl font-bold"
                            }
                        >
                            Sign Out
                        </button>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
