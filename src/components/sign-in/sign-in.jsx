import React from 'react'
import CustomButton from '../custom-button/custom-button'
import Input from '../form-input/form-input'

const SignInComponent = () => {
  return (
    <div className='sign-in'>
        <h2>I already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form>
            <Input type='email' name='email' placeholder='Email' />
            <Input type='password' name='password' placeholder='Password'/>
            <CustomButton type="submit">Sign In</CustomButton>
        </form>
    </div>
  )
}

export default SignInComponent