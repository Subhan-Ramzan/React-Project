import React from 'react';

export default function Technical() {
    const fabricDetails = [
        { label: "Composition", value: "100% PES" },
        { label: "Weight", value: "163,5 g/m² ± 5% | 4.82 oz/yd² ± 5%" },
        { label: "Roll Width", value: "3.0 m | 118 in" },
        { label: "Roll Length", value: "50 m | 54.68 yd" },
        { label: "Fabric Construction", value: "Woven" },
        { label: "Weave Type", value: "Plain" },
        { label: "Flame Retardant", value: "NFPA 701" },
    ];

    return (
        <div className="md:py-4 pt-4 w-full">
            <div className="flex flex-col gap-1">
                <hr className="border-[#58585A] " />
                <h2 className="font-semibold font-roboto text-lg px-4 text-start text-[#58585A]">
                    TECHNICAL PROPERTIES*
                </h2>
                <hr className="mb-2 border-[#58585A] " />
            </div>
            <div className="p-2 md:p-4">
                {fabricDetails.map((item, index) => (
                    <div
                        key={index}
                        className="md:mb-2 mb-3 flex justify-between text-sm sm:text-sm md:text-base"
                    >
                        <strong className="text-[#58585A]">{item.label}:</strong>
                        <span className="text-[#A6A6A8] text-sm font-semibold">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
