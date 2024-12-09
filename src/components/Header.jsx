import React from "react";

export default function Header({ product }) {
    return (
        <div className="px-4 flex justify-between items-center">
            <div className="flex flex-col items-start justify-start">
                <h1 className="md:text-2xl text-xl text-[#231F20] font-light font-ibm">{product.acf?.main_heading || "No Title"}</h1>
                <h1 className="md:text-3xl text-2xl text-[#231F20] font-semibold font-ibm">{product.acf?.sub_heading || "No Subtitle"}</h1>
            </div>

        </div>
    );
}
