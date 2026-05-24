
"use client"
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { FaPlus } from "react-icons/fa";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";


export const Images = (props) => {
    const { data, onClick, video } = props;

    const handleClickImage = (index) => {
        onClick(index);
    };

    return (
        <>
            {data.slice(0, 5).map((slide, index) => (
                <img
                    className={`  ${video != null ? "" : "image"}`}
                    onClick={() => handleClickImage(index)}
                    key={index}
                    src={slide.src}
                    alt={slide.description}
                />
            ))}
        </>
    );
};

export const GalleryProperty = ({ photos, video, numberImages }) => {
    const [index, setIndex] = useState(-1);
    const numberImg = video != null ? numberImages - 4 : numberImages - 5;
    const imagenes = photos.map((url, index) => {
        return { src: url, width: 1800, height: 780 };
    });

    return (
        <>
            <div className="photos-gallery">
                <Images
                    video={video}
                    data={imagenes}
                    onClick={(currentIndex) => setIndex(currentIndex)}
                />
                {numberImages > 5 ?
                    <>
                        <button className='button_view' onClick={() => setIndex(5)}>
                            <p><FaPlus size={30} />{numberImg} </p>
                            <p>Ver más fotos</p>
                        </button>
                    </> : ''}
            </div>

            <Lightbox
                styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.7)" } }}
                slides={imagenes}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                carousel={{
                    imageFit: "contain",
                }}
                render={{
                    iconPrev: () => <HiArrowSmallLeft size={40} />,
                    iconNext: () => <HiArrowSmallRight size={40} />
                }}
                plugins={[Fullscreen, Thumbnails, Zoom, Counter]}
            />
        </>
    )
}