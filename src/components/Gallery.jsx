import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";  // Import the cross icon

const Gallery = () => {
    const [zoomStyles, setZoomStyles] = useState({ display: "none", backgroundPosition: "center" });
    const [isZoomed, setIsZoomed] = useState(false);

    // Mouse move event for zoom effect on larger devices
    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100; // X percentage
        const y = ((e.clientY - rect.top) / rect.height) * 100; // Y percentage

        setZoomStyles({
            display: "block",
            backgroundPosition: `${x}% ${y}%`,
        });
    };

    // Mouse leave event to remove the zoom effect
    const handleMouseLeave = () => {
        setZoomStyles({ display: "none" });
    };

    // Click event for mobile devices to show image in full-screen
    const handleImageClick = () => {
        if (window.innerWidth <= 768) {
            setIsZoomed(true); // Show full-screen image on mobile
        }
    };

    // Close the zoomed image view
    const handleClose = () => {
        setIsZoomed(false);
    };

    return (
        <div className="w-full py-4 relative">
            {/* Main content */}
            <div className="flex flex-col">
                <hr className="border-gray-500 border" />
                <div className="relative w-full">
                    {/* Main Image */}
                    <img
                        src="/Images/p_3_1.png"
                        alt="Product"
                        className="w-full h-auto py-4 object-cover rounded-lg shadow-lg cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleImageClick} // Add click event for mobile
                    />

                    {/* Zoomed View for large devices */}
                    <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg border"
                        style={{
                            ...zoomStyles,
                            backgroundImage: "url('/Images/p_3_1.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "200%", // Adjust zoom level
                        }}
                    ></div>
                </div>
                <hr className="border-gray-500 border" />
            </div>

            {/* Full-Screen Zoom for mobile */}
            {isZoomed && window.innerWidth <= 768 && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                    >
                        <FaTimes />
                    </button>
                    <img
                        src="/Images/p_3_1.png"
                        alt="Zoomed Product"
                        className="w-auto max-w-full min-h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
