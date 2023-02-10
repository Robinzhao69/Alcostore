import getToBeRenderedFigures from "./helpers/galleryCardHelper"
import "./GalleryCard.css"

const GalleryCard = (props) => {
    return (
        <article className="galleryCard">
            {getToBeRenderedFigures(props.items)}
        </article>
    )
}

export default GalleryCard