import { LOCAL_STORAGE_KEY } from '@dhruv-techapps/acf-common';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GoogleSignInLight from '../assets/btn_google_signin_light_normal_web.png';
import { auth } from '../firebase';

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('openid');
    // Add your login logic here
    const user = await signInWithPopup(auth, provider);
    if (user) {
      // Add your redirect logic here
      navigate(searchParams.get('from') ?? '/');
    }
    console.log(LOCAL_STORAGE_KEY.CONFIGS);
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column h-100 row-gap-3'>
      <h1>
        <img
          src='https://getautoclicker.com/favicons/favicon48.png'
          width='48'
          height='48'
          className='d-inline-block align-top me-2'
          alt='Auto click Auto Fill logo'
          title='Auto click Auto Fill logo'
        />
        Auto Clicker Auto Fill
      </h1>
      <p>Please login to access the configurations</p>

      <h3>Please Sign in</h3>
      <Button variant='link' data-testid='google-sign-in' onClick={handleSubmit}>
        <img src={GoogleSignInLight} alt='Logo' />
      </Button>
    </div>
  );
};

export default Login;
