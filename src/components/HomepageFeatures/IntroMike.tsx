import { MapPinIcon } from "@heroicons/react/24/outline";
import { JSX } from "react";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";

export default function IntroMike(): JSX.Element {
    return (
        <div className="flex p-10 lg:p-20">
            <div className="grid grid-row-3 gap-3 w-full md:w-[60%]">
                <h1 className="text-3xl md:text-3xl lg:text-5xl">Hi, I’m Michael 👋</h1>
                <p>
                    Hey there, this is mike, michael to be sure. i am an engineer of the digital fields, i plaw with my hands and hit walls i break thru with my mouse, and what do i represent? Grit is what i say. I bring grit and courage to what i do and pleasure to my collegues and partners in what ever we do or persue.
                </p>
                <span className="flex items-center"><MapPinIcon className="w-6 h-6"/>Addis Ababa, Ethiopia</span>
                <div className="flex space-x-4 items-center">
                    <a href="#"><FaGithub className="h-6 w-6" /></a> 
                    <a href="#"><FaTwitter className="h-6 w-6 text-sky-500"/></a>
                    <a href="#"><FaTelegram className="h-6 w-6 text-blue-400" /></a>
                </div>
            </div>
        </div>
    )
}