import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

function Carousel ({images}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(
            (prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    
    return (

        <div className="containerStyles">
            <p className="title">Image Carousel</p>
            <div className="imageStyles" style={{backgroundImage: `url(${images[currentIndex]})`}}>
            </div>
            <div className="slider-direction">
                <button className="left arrow" onClick={handlePrevious}><i className="icon"></i></button>
                <button className="right arrow" onClick={handleNext}><i className="icon"></i></button>
            </div>

        </div>
    );
}

export default Carousel;