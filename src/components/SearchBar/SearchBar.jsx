import { Field, Form, Formik } from "formik"


const SearchBar = ({setQuery}) => {

const initialValues = {
  query:'',
}

const hendleSubmit = values => {
 setQuery(values.query)
}

  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <Form>
        <Field 
        name="query"
        type="search" 
        placeholder="search image..."/>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
}

export default SearchBar
