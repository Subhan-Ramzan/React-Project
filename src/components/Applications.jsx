import React from 'react';

export default function Applications() {
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

                    <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                        <img
                            loading="lazy"
                            width="102"
                            height="100"
                            src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-8-icon.png"
                            className="w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
                            alt="Certification 1"
                        />
                        <img
                            loading="lazy"
                            width="150"
                            height="84"
                            src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-9-icon-150x84.png"
                            className="w-12 sm:w-16 md:w-20 lg:w-24 h-10 sm:h-14 md:h-18 lg:h-20 object-contain"
                            alt="Certification 2"
                        />
                    </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base font-roboto text-[#58585A] leading-relaxed">
                    The <strong>Vertilux Collection</strong> has all of the most important certificates in the industry.
                    However, different certificates apply for different fabrics in our collection. Please ask our Customer Service Department
                    about the certificates available for specific fabric patterns.
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
                        <div className="flex flex-col items-center">
                            <img
                                loading="lazy"
                                width="86"
                                height="102"
                                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-10-icon.png"
                                className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 object-contain"
                                alt="Roller Shades"
                            />
                            <p className="text-xs sm:text-sm md:text-base text-center font-roboto text-[#858586] mt-2">
                                Roller Shades
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                loading="lazy"
                                width="102"
                                height="100"
                                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-11-icon.png"
                                className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 object-contain"
                                alt="Indoor Use"
                            />
                            <p className="text-xs sm:text-sm md:text-base text-center font-roboto text-[#858586] mt-2">
                                Indoor Use Only
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
