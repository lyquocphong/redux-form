import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CountryForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="countryName">Country name</label>
        <Field name="countryName" component="input" type="text" />
      </div>      
      <button type="submit">Submit</button>
    </form>
  )
}

CountryForm = reduxForm({
  // a unique name for the form
  form: 'country'
})(CountryForm)

export default CountryForm
