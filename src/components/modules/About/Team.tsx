import member1Image from "@/assets/images/team-member-1.jpg";
import member2Image from "@/assets/images/team-member-2.jpg";
import member3Image from "@/assets/images/team-member-3.jpg";
import member4Image from "@/assets/images/team-member-4.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Team = () => {
    const teamMembers = [
        {
            name: "Jane Cooper",
            role: "Founder",
            img: member1Image,
        },
        {
            name: "Esther Howard",
            role: "Team Leader",
            img: member2Image,
        },
        {
            name: "Arlene McCoy",
            role: "Marketing Officer",
            img: member3Image,
        },
        {
            name: "Kristin Wastson",
            role: "Senior Officer",
            img: member4Image,
        },
    ]
    return (
        <div className="flex flex-col space-y-5">

            <p className="text-xl sm:text-2xl font-semibold mx-auto">MEET WITH OUR TEAM</p>

            <div className="w-full sm:w-[540px] md:w-[700px] lg:w-full mx-auto flex space-x-5 overflow-x-scroll lg:overflow-hidden scroll-smooth custom-scrollbar py-2 rounded-md">
                {
                    teamMembers.map((member, i) => (
                        <div
                            className="overflow-y-hidden flex-none w-full xs:w-[47%] lg:w-[23%] relative duration-300 group p-2 hover:p-0 h-fit" key={i}>
                            <Image src={member.img} alt="member" className="rounded-md w-full" />

                            <div
                                className=" duration-200 absolute -bottom-32 left-1/2 group-hover:bottom-5 -translate-x-1/2 flex space-x-5 z-10">
                                <Facebook
                                    className=" bg-[#3b5998] cursor-pointer rounded p-2 text-xs text-center text-white" />
                                <Twitter
                                    className=" bg-[#00acee] cursor-pointer rounded p-2 text-xs text-center text-white" />
                                <Instagram
                                    className=" bg-[#d53983] cursor-pointer rounded p-2 text-xs text-center text-white" />
                            </div>

                            <div
                                className="opacity-0 absolute top-0 left-0 w-full h-full group-hover:bg-black/50 z-0 duration-300 group-hover:opacity-100 flex justify-center items-center">
                                <div className="flex flex-col space-y-0 justify-center items-center text-white">
                                    <p className="font-semibold text-lg">{member.name}</p>
                                    <p className="text-base">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
};

export default Team;