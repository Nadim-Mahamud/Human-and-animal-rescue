import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import useFirebase from "../Hooks/useFirebase";

const ContactPage = () => {
    const [isExploding, setIsExploding] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form);

        emailjs
            .sendForm(
                "service_xahqw4n",
                "template_elkp9tb",
                form.current,
                "user_1WP45SDevcirhN4i48N1M"
            )
            .then(
                (result) => {
                    Swal.fire({
                        title: "Success!",
                        text: "Your mail sent successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    e.target.reset();
                    setIsExploding(true);
                },
                (error) => {
                    Swal.fire({
                        title: "Error!",
                        text: `${error.message}`,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            );
    };

    const bgImage =
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

    const { user, signInWithGoogle } = useFirebase();

    return (
        <>
            {isExploding && (
                <Confetti
                    width={window.innerWidth}
                    height={1000}
                    recycle={false}
                    numberOfPieces={1000}
                />
            )}
            <section class="min-h-screen bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                <div class="flex flex-col min-h-screen bg-black/60">
                    <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div class="text-white lg:w-1/2 lg:mx-6">
                                <h1 class="text-3xl font-semibold capitalize lg:text-5xl">
                                    Contact Us
                                </h1>

                                <p class="max-w-xl mt-6">
                                    Contact for Human and Animal emergencies. We have Other Service
                                    Like adoption, joining the Volunteers team if know about them in
                                    detail message us.
                                </p>

                                <div class="mt-6 md:mt-8">
                                    <h3 class="text-sky-300 ">Follow us</h3>

                                    <div class="flex justify-center mt-8 space-x-6 ">
                                        <a
                                            class="hover:opacity-70 mx-4 text-sky-600"
                                            href="https://www.facebook.com/humanandanimalrescuecenter"
                                            target="_blank"
                                        >
                                            <span class="sr-only"> Facebook </span>
                                            <i class="fa-brands fa-facebook text-3xl mx-1"></i>
                                        </a>

                                        <a
                                            class="hover:opacity-70 mx-4 text-cyan-600"
                                            href="https://twitter.com/RescueMe321"
                                            target="_blank"
                                        >
                                            <span class="sr-only"> Twitter </span>
                                            <i class="fa-brands fa-twitter text-3xl mx-1"></i>
                                        </a>
                                        <a
                                            class="hover:opacity-70 mx-4 text-pink-600"
                                            href="https://www.instagram.com/merescue321/"
                                            target="_blank"
                                        >
                                            <span class="sr-only"> Instagram </span>
                                            <i class="fa-brands fa-instagram text-3xl mx-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 lg:w-1/2 lg:mx-6">
                                <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 class="text-2xl font-medium text-red-600 dark:text-gray-200">
                                        Contact form
                                    </h1>

                                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love to hear from you
                                    </p>

                                    <form class="mt-6" ref={form} onSubmit={sendEmail}>
                                        <div class="flex-1">
                                            <input
                                                required
                                                name="user_name"
                                                type="text"
                                                placeholder="Name"
                                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div class="flex-1 mt-6">
                                            <input
                                                required
                                                defaultValue={user?.email}
                                                name="user_email"
                                                type="email"
                                                placeholder="email"
                                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div class="flex-1 mt-6">
                                            <input
                                                required
                                                name="subject"
                                                type="text"
                                                placeholder="subject"
                                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div class="w-full mt-6">
                                            <textarea
                                                required
                                                name="message"
                                                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-40 resize-none dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>

                                        {user.auth ? (
                                            <button
                                                type="submit"
                                                class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                            >
                                                Get In Touch
                                            </button>
                                        ) : (
                                            <button
                                                onClick={()=>signInWithGoogle()}
                                                class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                            >
                                                Get in Touch
                                            </button>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
