import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap justify-center py-8 mt-12 px-4">
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 px-4 py-6">

                    {/* Disclaimer Text */}
                    <div className="w-full md:w-[100%] mb-4 md:mb-0">
                        <p className="text-xs sm:text-sm md:text-sm font-roboto text-[#58585A]">
                            IMPORTANT: The values and recommendations in this card are not contractual and cannot be used as a claim for order cancellations or returns. This technical data may vary at any time without previous notice. Color samples may not necessarily be an exact match of the material to be used to produce your order. Returns will not be accepted due to minor variations of color or texture.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col items-end md:items-end md:gap-2 w-full">
                        {/* QR Code Image */}
                        <div className="flex-shrink-0">
                            <img
                                width="48"
                                height="48"
                                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-qr-icon.png"
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-20 md:h-20 object-cover"
                                alt="QR Code"
                            />
                        </div>

                        {/* Website Heading */}
                        <div className="text-end md:text-right w-full">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold font-roboto text-[#58585A]">
                                vertilux.com
                            </h2>
                        </div>

                        {/* Copyright Text */}
                        <div className="mt-2">
                            <p className="text-xs md:text-sm font-roboto text-[#58585A] text-center md:text-right">
                                © 2024. Vertilux, Ltd. All Rights Reserved. 1st Edition
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
