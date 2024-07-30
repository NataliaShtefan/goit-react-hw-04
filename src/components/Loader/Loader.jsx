
import s from "./Loader.module.css"
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (

   <div className={s.container}>
     <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="rgb(255, 208, 0)"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
   </div>
  )
}

export default Loader
