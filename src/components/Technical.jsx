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
            <div className="flex flex-col gap-3">
                <hr className="border-black border" />
                <h2 className="font-medium text-lg sm:text-xl px-4 text-center">
                    TECHNICAL PROPERTIES*
                </h2>
                <hr className="mb-2 border-black border" />
            </div>
            <div className="p-2 md:p-4">
                {fabricDetails.map((item, index) => (
                    <div
                        key={index}
                        className="md:mb-2 mb-3 flex justify-between text-sm sm:text-sm md:text-base"
                    >
                        <strong className="text-gray-900">{item.label}:</strong>
                        <span className="text-gray-600 text-xs">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
