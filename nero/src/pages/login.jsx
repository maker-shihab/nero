/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie, setCookie } from '@/util/cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function LoginPage() {
  const router = useRouter();
  const { msg } = router.query;
  useEffect(() => {
    const userLoggedIn = getCookie('user') !== undefined;
    if(userLoggedIn) {
      router.push('/');
    } 
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // The login was successful, set the user login cookie
        setCookie('user', username, { expires: 30 * 24 * 60 * 60, path: '/' });

        // Redirect to the dashboard or any other suitable URL
        window.location.href = '/dashboard';
      } else {
        // Handle login failure (show an error message, etc.)
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <Layout pageTitle="Login">
      <div className='login_page'>
        <h2 className='form_title'>Log in</h2>
        <form onSubmit={handleLogin} className='body_form'>
          <div className="single_input">
            <label htmlFor="username">User Name / Email</label>
            <input minLength="3" name="username" id="username" type="text" placeholder='User Name' required />
          </div>
          <div className="single_input">
            <label htmlFor="password">Password</label>
            <input minLength="5" name="password" id="password" type="password" placeholder='Enter Password' required />
          </div>
          <button type="submit" className='submit_btn'>Login</button>
          <p className='form_redirect'>If you do not have an account, please <Link href="/register">register</Link>.</p>
        </form>
      </div>
    </Layout>
  );
}
