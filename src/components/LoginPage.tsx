import { signIn } from 'next-auth/react';
import React from 'react'
import Button from './Button';

const LoginPage = () => {
  const handleLogin = () => {
    signIn("github", {callbackUrl: '/'});
  }
  return (
    <>
      <p>Not signed in</p>
      {/* <button onClick={() => signIn("github", {callbackUrl: '/'})}>
        <span>Sign in with Github</span>
      </button> */}
      {/* <Button name='Login' onClick={handleLogin}/> */}
    </>
  )
}

export default LoginPage;