import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Applications({ product }) {
    const images = product.acf?.applications_boxes?.map((image) => image) || [];

    // Custom arrows for the slider
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-4 md:right-2 transform text-[#58585A] -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaChevronRight
                className="text-[20px] hover:scale-125 md:text-[24px] sm:text-[12px]" // Smaller icon sizes for small screens
            />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-0 md:-left-8 transform text-[#58585A] -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaChevronLeft
                className="text-[20px] hover:scale-125 md:text-[24px] sm:text-[12px]" // Smaller icon sizes for small screens
            />
        </div>
    );

    const PrevArrowApp = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#58585A] z-10 cursor-pointer"
            onClick={onClick}
        >
            <FaChevronLeft
                className="text-[20px] hover:scale-125 md:text-[24px] sm:text-[12px]" // Smaller icon sizes for small screens
            />
        </div>
    );

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 3,

                    slidesToShow: 3,
                },
            },
        ],
    };
    const settingsApp = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrowApp />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <div className="flex flex-wrap px-4 md:px-6 lg:px-8">
            {/* Section for International Certifications */}
            <div className="flex flex-col w-full md:w-[55%] py-4 md:pr-8">
                <div className="flex flex-col mb-6">
                    <hr className="mb-1 border-[#58585A]" />
                    <h2 className="text-base sm:text-lg font-roboto text-[#58585A] font-semibold mb-1 px-3">
                        INTERNATIONAL CERTIFICATIONS
                    </h2>
                    <hr className="mb-12 border-[#58585A]" />
                    {product.acf?.certificates?.length > 4 ? (
                        <Slider {...settings}>
                            {product.acf?.certificates?.map((url, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img
                                        src={url}
                                        alt={`Certificate ${index + 1}`}
                                        style={{ width: "100px" }}
                                        className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <ul className="flex gap-1 justify-center sm:justify-start">
                            {product.acf?.certificates?.map((url, index) => (
                                <li key={index}>
                                    <img
                                        src={url}
                                        alt={`Certificate ${index + 1}`}
                                        style={{ width: "100px" }}
                                        className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <p className="text-xs sm:text-sm md:text-base font-roboto text-[#58585A] leading-relaxed">
                    {product.acf?.certificate_text}
                </p>
            </div>

            {/* Section for Applications */}
            <div className="flex flex-col w-full md:w-[45%] py-4">
                <div className="flex flex-col mb-6">
                    <hr className="mb-1 border-[#58585A]" />
                    <h2 className="text-base sm:text-lg font-semibold font-roboto text-[#58585A] mb-1 px-4">
                        APPLICATIONS
                    </h2>
                    <hr className="mb-12 border-[#58585A]" />
                    {images.length > 4 ? (
                        <Slider {...settingsApp}>
                            {images.map((image, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        loading="lazy"
                                        width="86"
                                        height="102"
                                        src={image.application_image}
                                        className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 object-contain mx-auto"
                                        alt={image.application_name}
                                    />
                                    <p className="text-xs sm:text-sm md:text-base text-center font-roboto text-[#858586] mt-2">
                                        {image.application_name}
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="flex gap-x-12 justify-center sm:justify-start px-6">
                            {images.map((image, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        loading="lazy"
                                        width="86"
                                        height="102"
                                        src={image.application_image}
                                        className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 object-contain"
                                        alt={image.application_name}
                                    />
                                    <p className="text-xs sm:text-sm md:text-base text-center font-roboto text-[#858586] mt-2">
                                        {image.application_name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
