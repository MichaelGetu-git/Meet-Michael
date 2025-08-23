import { JSX } from "react";

export default function AboutMe(): JSX.Element {
    return (
        <div className="flex flex-col p-5 md:p-10">
            <h1>About Me</h1>
            <div className="p-10 flex items-center justify-center w-[60%]">
                <p>
                    Hey there, this is mike, michael to be sure. i am an engineer of the digital fields, i plaw with my hands and hit walls i break thru with my mouse, and what do i represent? Grit is what i say. I bring grit and courage to what i do and pleasure to my collegues and partners in what ever we do or persue.
                </p>
            </div>
        </div>
    )
}