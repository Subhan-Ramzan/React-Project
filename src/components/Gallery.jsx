import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const App = ({ product }) => {
    // Extract images from product.acf?.product_images and make sure it's not undefined
    const images = product.acf?.product_images?.map((image) => image) || [];
    // console.log(images.length);

    const [currentImage, setCurrentImage] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentImage(index);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="max-h-screen max-md:w-full flex flex-col items-center md:justify-center p-4 pt-10">
            {/* Slider with Thumbnails */}
            <div className="relative w-full md:max-w-5xl">
                {/* Slider Images */}
                <div className="relative md:w-[60vw] mx-auto h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
                    <div
                        className="md:w-[60vw] h-[60vh] md:h-[70vh] flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentImage * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                        <AiOutlineLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                        <AiOutlineRight size={24} />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex mt-4 gap-2 justify-center">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            onMouseEnter={() => handleThumbnailClick(index)}
                            className={`border-2 rounded-lg overflow-hidden ${currentImage === index ? "border-gray-500" : "border-gray-300"
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-24 rounded-lg h-16 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
