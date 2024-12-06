import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Maintenance() {
    const washingInstructions = [
        "Wash with cold water and a mild detergent solution.",
        "Do not wring dry.",
        "Do not tumble dry.",
        "Do not bleach.",
        "Dry clean with any solvent except trichloroethylene.",
        "Iron at low temperature (230°F/110°C or below).",
    ];

    const generateIconArray = (baseName, totalIcons) => {
        return Array.from({ length: totalIcons }, (_, index) => `${baseName}${index + 1}-icon.png`);
    };

    const iconBaseName = "/Images/TS_RX-Daku-"; // Base name for the icons
    const totalIcons = 8; // Total icons example
    const iconArray = generateIconArray(iconBaseName, totalIcons);

    const generateManufacturing = (baseName, totalIcons) => {
        return Array.from({ length: totalIcons }, (_, index) => `${baseName}1${index + 1}.png`);
    };

    const BaseName = "/Images/"; // Base name for the manufacturing images
    const ManufacturingIcons = 8; // Total icons example
    const ManufacturingArray = generateManufacturing(BaseName, ManufacturingIcons);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4, // 4 icons visible even on small devices
                    slidesToScroll: 4,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 px-2 w-full">
            {/* CARE & MAINTENANCE Section */}
            <div className="py-4 w-full md:w-[55%]">
                <div className="flex flex-col gap-2">
                    <hr className="border-black border" />
                    <h2 className="font-medium text-lg md:text-lg lg:text-xl px-4">
                        CARE & MAINTENANCE
                    </h2>
                    <hr className="mb-2 border-black border" />
                </div>
                <div className="p-2 md:p-4">
                    {iconArray.length <= 5 ? (
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                            {iconArray.map((icon, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={icon}
                                        alt={`Icon ${index + 1}`}
                                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full pb-4">
                            <Slider {...sliderSettings}>
                                {iconArray.map((icon, index) => (
                                    <div key={index} className="flex items-center px-2 justify-center">
                                        <img
                                            src={icon}
                                            alt={`Icon ${index + 1}`}
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 object-contain"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )}
                    <ul className="list-decimal list-inside space-y-2 mt-4 text-sm md:text-base text-gray-700">
                        {washingInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* MANUFACTURING Section */}
            <div className="py-4 w-full md:w-[45%]">
                <div className="flex flex-col gap-2">
                    <hr className="border-black border" />
                    <h2 className="font-medium text-lg md:text-xl lg:text-xl px-4">
                        MANUFACTURING
                    </h2>
                    <hr className="mb-2 border-black border" />
                </div>
                <div className="p-2 md:p-4">
                    {ManufacturingArray.length <= 5 ? (
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                            {ManufacturingArray.map((icon, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={`${icon}`}
                                        alt={`Icon ${index + 1}`}
                                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                                    />
                                    <p>ada</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full pb-4">
                            <Slider {...sliderSettings}>
                                {ManufacturingArray.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center px-2">
                                        <img
                                            src={`${icon}`}
                                            alt={`Icon ${index + 1}`}
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 object-contain mb-1"
                                        />
                                        <div>
                                            <p className="text-sm sm:text-base md:px-2 text-gray-700 font-medium leading-tight">Name</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
}
