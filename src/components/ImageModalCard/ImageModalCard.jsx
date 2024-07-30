

import { GrInstagram } from "react-icons/gr"
import s from "./ImageModalCard.module.css"
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md"
import { SlSocialTwitter } from "react-icons/sl"
import { IoMdHeart } from "react-icons/io"

const ImageModalCard = ({image}) => {
  return (
    <div className={s.container}>
     <div className={s.photo}>
     <img  className={s.image} src={image.urls.regular} alt={image.alt_description}/>
     </div>

    <h2 className={s.author}>Author: {image.user.name}</h2>
    <h3 className={s.like}>Likes: {image.likes} <IoMdHeart className={s.heart}/></h3>

<ul className={s.link}>
<li><a href={image.user.social.instagram_username} 
target="_blank" 
rel="noopener noreferrer"><GrInstagram className={s.icon}/></a></li>
<li><a href={image.user.social.portfolio_url}
target="_blank" 
rel="noopener noreferrer"><MdOutlinePhotoSizeSelectActual className={s.icon}/></a></li>
<li><a href={image.user.social.twitter_username}
target="_blank" 
rel="noopener noreferrer"><SlSocialTwitter className={s.icon}/></a></li>
</ul>
    </div>
  )
}

export default ImageModalCard
