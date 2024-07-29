import s from "./ImageCard.module.css"

const ImageCard = ({item}) => {
  return (
    <div>
       <img 
       className={s.photo}
       src={item.urls.small} 
       alt={item.alt_description} />
    </div>
  )
}

export default ImageCard
