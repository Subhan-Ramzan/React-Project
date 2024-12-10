import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Maintenance({ product }) {

    const text = product.acf?.text;

    const textArray = text.split(/(?=\d\.\s)/).map(item => item.trim());

    console.log(product.acf?.care_maintenance_icons);

    const images = product.acf?.manufacturing_box?.map((image) => image) || [];

    console.log(images);

    const generateIconArray = (baseName, totalIcons) => {
        return Array.from({ length: totalIcons }, (_, index) => `${baseName}${index + 1}-icon.png`);
    };

    const iconBaseName = "/Images/TS_RX-Daku-";
    const totalIcons = 8;
    const iconArray = generateIconArray(iconBaseName, totalIcons);

    const generateManufacturing = (baseName, totalIcons) => {
        return Array.from({ length: totalIcons }, (_, index) => `${baseName}1${index + 1}.png`);
    };

    const BaseName = "/Images/";
    const ManufacturingIcons = 8;
    const ManufacturingArray = generateManufacturing(BaseName, ManufacturingIcons);

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className="absolute left-[-2vw] sm:left-[-1.5vw] top-1/2 transform -translate-y-1/2 text-[#58585A] rounded-full flex items-center hover:scale-125 justify-center cursor-pointer"
                style={{
                    width: "40px",
                    height: "40px",
                    zIndex: 2,
                }}
                onClick={onClick}
            >
                <FaChevronLeft
                    className="text-[20px] hover:scale-125 md:text-[24px] sm:text-[12px]" // Smaller icon sizes for small screens
                />
            </div>
        );
    };

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => {
        return (
            <div
                className="absolute right-[-2vw] sm:right-[-1.5vw] top-1/2 transform -translate-y-1/4 max-md:-translate-y-1/2 text-[#58585A] rounded-full flex items-center hover:scale-125 justify-center cursor-pointer"
                style={{
                    width: "40px",
                    height: "40px",
                    zIndex: 2,
                }}
                onClick={onClick}
            >
                <FaChevronRight
                    className="text-[20px] hover:scale-125 md:text-[24px] sm:text-[12px]" // Smaller icon sizes for small screens
                />
            </div>
        );
    };


    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 px-2 w-full">
            {/* CARE & MAINTENANCE Section */}
            <div className="py-4 w-full md:w-[55%]">
                <div className="flex flex-col gap-1">
                    <hr className="border-[#58585A]" />
                    <h2 className="font-medium font-roboto text-[#58585A] text-lg px-4">
                        CARE & MAINTENANCE
                    </h2>
                    <hr className="mb-2 border-[#58585A]" />
                </div>
                <div className="p-2 md:p-4">
                    {iconArray.length <= 5 ? (
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                            {iconArray.map((icon, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <img
                                        src={icon}
                                        alt={`Icon ${index + 1}`}
                                        className="w-12 h-12 sm:w-16 outline-none border-none sm:h-16 md:w-20 md:h-20 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full pb-4">
                            <Slider {...sliderSettings}>
                                {iconArray.map((icon, index) => (
                                    <div key={index} className="outline-none border-none flex items-center pl-6 max-md:pl-8 max-md:pr-4 justify-center">
                                        <img
                                            src={icon}
                                            alt={`Icon ${index + 1}`}
                                            className=" w-8 h-8 sm:w-10 sm:h-10 md:w-16 outline-none border-none md:h-16 object-contain"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )}
                    <ul className="space-y-2 mt-4 text-sm md:text-base font-roboto text-[#58585A]">
                        {textArray.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* MANUFACTURING Section */}
            <div className="py-4 w-full md:w-[45%]">
                <div className="flex flex-col gap-1">
                    <hr className="border-[#58585A] " />
                    <h2 className="font-medium font-roboto text-[#58585A] text-lg px-4">
                        MANUFACTURING
                    </h2>
                    <hr className="mb-2 border-[#58585A] " />
                </div>
                <div className="p-2 md:p-4 outline-none border-none">
                    {images.length <= 5 ? (
                        <div className="flex gap-2 sm:gap-4 justify-center items-center text-center outline-none border-none ">
                            {images.map((image, index) => (
                                <div key={index} className="flex flex-col items-center outline-none border-none pl-6 max-md:pl-8 justify-center px-2">
                                    <img
                                        src={image.box_image}
                                        alt={image.box_name}
                                        className="w-8 h-8 sm:w-10 sm:h-10 outline-none border-none md:w-16 md:h-16 object-contain mb-1"
                                    />
                                    <p className="text-sm sm:text-base md:px-2 text-[#6f6f70] font-medium">{image.box_name}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full pb-4">
                            <Slider {...sliderSettings}>
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center outline-none border-none pl-6 max-md:pl-8 justify-center px-2">
                                        <img
                                            src={image.box_image}
                                            alt={image.box_name}
                                            className="w-8 h-8 sm:w-10 sm:h-10 outline-none border-none md:w-16 md:h-16 object-contain mb-1"
                                        />
                                        <p className="text-sm sm:text-base md:px-2 text-[#6f6f70] font-medium">{image.box_name}</p>
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
