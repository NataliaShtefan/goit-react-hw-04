import { Field, Form, Formik } from "formik"
import toast from "react-hot-toast"
import { TbPhotoSearch } from "react-icons/tb"
import s from "./SeachBar.module.css"


const SearchBar = ({setQuery}) => {

const initialValues = {
  query:'',
}

const hendleSubmit = values => {
  if (values.query.trim() === '')
    return toast.error("This didn't work. You must write anythings...")
 setQuery(values.query)
}

  return (

    <h1 className={s.title}>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <Form className={s.form}>
        <Field 
        className={s.input}
        name="query"
        type="search" 
        placeholder="search image..."/>
        <button 
        className={s.btn}
        type="submit">
        <TbPhotoSearch className={s.icon}/>
        </button>
      </Form>
    </Formik>
    </h1>
  )
}

export default SearchBar
