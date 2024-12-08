import React from 'react';

export default function Applications() {
    return (
        <div className="flex flex-wrap">
            {/* Section for International Certifications */}
            <div className="flex flex-col w-full md:w-[55%] py-4 md:pr-4">
                <div className="flex flex-col mb-6">
                    <hr className="mb-2 border-[#58585A] " />
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-roboto text-[#58585A] font-semibold mb-4 px-3">INTERNATIONAL CERTIFICATIONS</h2>
                    <hr className="mb-2 border-[#58585A] " />

                    <div className="flex gap-4 justify-center sm:justify-start">
                        <img
                            loading="lazy"
                            width="102"
                            height="100"
                            src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-8-icon.png"
                            className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                            alt="Certification 1"
                        />
                        <img
                            loading="lazy"
                            width="150"
                            height="84"
                            src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-9-icon-150x84.png"
                            className="w-16 sm:w-24 h-14 sm:h-14 object-contain"
                            alt="Certification 2"
                        />
                    </div>
                </div>
                <p className="text-sm sm:text-base font-roboto text-[#58585A]">
                    The <strong>Vertilux Collection</strong> has all of the most important certificates in the industry. However, different certificates apply for different fabrics in our collection. Please ask our Customer Service Department about the certificates available for specific fabric patterns.
                </p>
            </div>

            {/* Section for Applications */}
            <div className="flex flex-col w-full md:w-[45%] py-4">
                <div className="flex flex-col mb-6">
                    <hr className="mb-2 border-[#58585A] " />
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold font-roboto text-[#58585A] mb-4 px-4">APPLICATIONS</h2>
                    <hr className="mb-2 border-[#58585A] " />
                    <div className="flex gap-4 justify-center sm:justify-start px-4">
                        <div className="flex flex-col items-center">
                            <img
                                loading="lazy"
                                width="86"
                                height="102"
                                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-10-icon.png"
                                className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                                alt="Roller Shades"
                            />
                            <p className="text-sm font-ibm text-[#58585A] sm:text-base text-center">Roller Shades</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                loading="lazy"
                                width="102"
                                height="100"
                                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-11-icon.png"
                                className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                                alt="Indoor Use"
                            />
                            <p className="text-sm font-ibm text-[#58585A] sm:text-base text-center">Indoor Use Only</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
