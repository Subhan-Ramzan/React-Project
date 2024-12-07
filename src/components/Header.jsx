import React from "react";

export default function Header() {
    return (
        <div className="px-4 flex justify-between items-center">
            <div className="flex flex-col items-start justify-start">
                <h1 className="md:text-2xl text-xl text-[#231F20] font-light font-ibm">Name</h1>
                <h1 className="md:text-3xl text-2xl text-[#231F20] font-semibold font-ibm">Name</h1>
            </div>
            <div>
                <img src="/Images/vertilux-Logo.png" alt="" className="flex items-center w-full h-20 md:h-24 object-cover rounded-lg shadow-sm" />
            </div>
        </div>
    );
}
