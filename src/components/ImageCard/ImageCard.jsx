import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {
    return (
        <div className={css.thumb}>
            <img
                src={item.urls.small}
                alt={item.alt_description}
                className={css.imageCard}
                onClick={() => {
                    openModal(item.urls.regular, item.alt_description)
                }} />
        </div>
    )
}