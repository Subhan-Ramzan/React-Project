import React from 'react';

export default function Applications({ product }) {
    const images = product.acf?.applications_boxes?.map((image) => image) || [];

    return (
        <div className="flex flex-wrap px-4 md:px-6 lg:px-8">
            {/* Section for International Certifications */}
            <div className="flex flex-col w-full md:w-[55%] py-4 md:pr-4">
                <div className="flex flex-col mb-6">
                    <hr className="mb-1 border-[#58585A]" />
                    <h2 className="text-base sm:text-lg font-roboto text-[#58585A] font-semibold mb-1 px-3">
                        INTERNATIONAL CERTIFICATIONS
                    </h2>
                    <hr className="mb-12 border-[#58585A]" />
                    <ul className="flex gap-3 justify-center sm:justify-start">
                        {product.acf?.certificates?.map((url, index) => (
                            <li key={index}>
                                <img src={url} alt={`Certificate ${index + 1}`} style={{ width: "100px" }} className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 object-contain" />
                            </li>
                        ))}
                    </ul>
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
                    <div className="flex gap-x-12 justify-center sm:justify-start px-6">
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    loading="lazy"
                                    width="86"
                                    height="102"
                                    src={image.application_image}
                                    className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 object-contain"
                                    alt="Roller Shades"
                                />
                                <p className="text-xs sm:text-sm md:text-base text-center font-roboto text-[#858586] mt-2">
                                    {image.application_name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
