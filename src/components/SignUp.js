import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../actions';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  const [formFields, setFormFields] = useState({ name: " ", email: " ", password: "" })
  const formFieldHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }
  const formSubmitHandler = e => {
    e.preventDefault();
    props.dispatch(signUp(formFields));
  }
  return (
    <div className="signup-form-container">
      <form onSubmit={formSubmitHandler} className="signupform">
       <h5>welcome to our ecommerce store</h5>
        <input type="text" name="name" onChange={formFieldHandler} value={formFields.name} />
        <input type="email" name="email" onChange={formFieldHandler} value={formFields.email} />
        <input type="password" name="password" onChange={formFieldHandler} value={formFields.password} />
        <button>Sign up</button>
        <p>if are are already sign up than log in <Link to ="/login">log in</Link></p>
      </form>
    </div>
  )
}

export default connect()(SignUp)
