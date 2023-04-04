import React from 'react';
import { Button } from 'antd';
import { useGoogleLogin } from "@react-oauth/google";

function LoginPage() {

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log(codeResponse);
    },
    flow: 'auth-code',
    redirect_uri: 'http://localhost:1234/api/auth/google/callback',
    ux_mode: 'redirect'
  });

  let token = localStorage.getItem("token");

  return (
    token ? <h1>YOU ARE LOGGED IN!</h1> :
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Login to FlightDeck</h1>
        <Button onClick={() => login()}>
          Log in with Google 🚀{' '}
        </Button>
      </div>
  );
}

export default LoginPage;