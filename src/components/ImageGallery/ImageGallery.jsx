

import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({items, onImageClick}) => {
  return (
    <div>
      <ul className={s.list}>
        {items.map(item => (
         <li key={item.id}>
         < ImageCard item={item}
         onClick={() => onImageClick(item)}/>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageGallery
