import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import ConfettiExplosion from "react-confetti-explosion";
import Confetti from "react-confetti";
import help from "./help-them.png";
import useFirebase from "../../Hooks/useFirebase";

const NeedHelp = () => {
    const form = useRef();
    const [pic, setPic] = useState("");
    const [pending, setPending] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    const imageUrlKey = "cbe11c66352b77ec50a7a98263be9fcd";

    const handlePicUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        console.log(url);
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    console.log(img);
                    setPic(img);
                }
            });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setPending(true);

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            image: pic,
            address: e.target.address.value,
            message: e.target.message.value
        };

        emailjs.send("service_uteqj2y", "template_j5239qf", data, "CHXzzT2yBcDushZvC").then(
            (result) => {
                Swal.fire({
                    title: "Success!",
                    text: "Your mail sent successfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                e.target.reset();
                setIsExploding(true);
                setPic("");
                setPending(false);
            },
            (error) => {
                Swal.fire({
                    title: "Error!",
                    text: `${error.message}`,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                setPending(false);
            }
        );
    };

    const { user,signInWithGoogle } = useFirebase();
    // console.log(user);

    return (
        <>
            {isExploding && (
                <Confetti
                    width={window.innerWidth}
                    height={3000}
                    recycle={false}
                    numberOfPieces={1000}
                />
            )}
            <div className="bg-slate-white py-14">
                <div className="flex md:flex-row flex-col justify-around items-center">
                    <div className="">
                        <img src={help} alt="" width={"350px"} />
                    </div>

                    <div>
                        <div className="">
                            <h1 className="text-6xl font-bold ">
                                Get Immediate <span className="text-primary">Help</span>
                            </h1>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="mx-auto w-full max-w-[550px] px-3">
                                <form class="mt-6" ref={form} onSubmit={sendEmail}>
                                    <div class="flex-1">
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>

                                    <div class="flex-1 mt-6">
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            defaultValue={user?.email}
                                            placeholder="Email"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <input
                                            required
                                            name="phone"
                                            type="text"
                                            maxLength={11}
                                            placeholder="Phone Number"
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
                                    <div className="flex-1 mt-6">
                                        {pic === "" ? (
                                            <div onChange={handlePicUpload} class="flex-1 mt-6">
                                                <input
                                                    required
                                                    name="image"
                                                    type="file"
                                                    placeholder="image"
                                                    class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-32 rounded">
                                                <img
                                                    name="image"
                                                    value={pic}
                                                    src={pic}
                                                    alt=""
                                                    className="h-full w-2/3 rounded"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div class="w-full mt-6">
                                        <textarea
                                            required
                                            name="address"
                                            class="block w-full h-16 px-5 resize-none py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-20 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Enter Your Address"
                                        ></textarea>
                                    </div>
                                    <div class="w-full mt-6">
                                        <textarea
                                            required
                                            name="message"
                                            class="block w-full h-20 resize-none px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-24 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    {user.auth ? (
                                        <button
                                            disabled={pending ? true : false}
                                            type="submit"
                                            class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                        >
                                            Submit
                                        </button>
                                    ) : (
                                        <button
                                            disabled={pending ? true : false}
                                            onClick={()=>signInWithGoogle()}
                                            class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                        >
                                            Submit
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-red-600">
                    <div className="flex md:flex-row flex-col gap-10 justify-around items-center my-10 p-10 container mx-auto">
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-solid fa-heart"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={150} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">Rescue People Saved</h2>
                        </div>
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-sharp fa-solid fa-user-group"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={130} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">Rescue Animals Saved</h2>
                        </div>
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-solid fa-house-user"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={170} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">More Help</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NeedHelp;
