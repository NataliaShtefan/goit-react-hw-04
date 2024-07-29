

import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({items}) => {
  return (
    <div>
      <ul className={s.list}>
        {items.map(item => (
         <li key={item.id}>
         < ImageCard item={item}/>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageGallery
