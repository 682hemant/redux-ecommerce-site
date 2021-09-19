import React, { useState } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../actions';
import { Link } from 'react-router-dom';

import '../assets/css/signupform.css'

const SignUp = (props) => {
  console.log(props.isLoggedIn)
  const [formFields, setFormFields] = useState({ name: " ", password: "" })
  const formFieldHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }
  const formSubmitHandler = e => {
    e.preventDefault();
    props.dispatch(logIn(formFields));
  }
  return (
    <div className="signup-form-container">
      <form onSubmit={formSubmitHandler} className="signupform">
        <input type="text" name="name" onChange={formFieldHandler} value={formFields.name} />
        <input type="password" name="password" onChange={formFieldHandler} value={formFields.password} />
        <button>Login</button>
        <p>if you are not log in than sign up <Link to ="/">Sign up</Link> </p>
      </form>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.logedIn
  }
}

export default connect(mapStateToProps)(SignUp)