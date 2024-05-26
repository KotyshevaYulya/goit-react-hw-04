import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={css.imagesList}>
            {images.map((image) => (            
                <li key={image.id} className={css.imagesItem}>
                    <ImageCard item={image} openModal={openModal}/>
                </li>
            ))}
        </ul>
    )
}