
import { SlArrowDown } from "react-icons/sl"
import s from"./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
  return (
    <div className={s.container}>
      <button 
      className={s.btn}
      onClick={onClick}
      type='button'>
        <SlArrowDown  className={s.icon}/></button>
    </div>
  )
}

export default LoadMoreBtn
