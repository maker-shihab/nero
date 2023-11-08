/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '@/components/Layout';
import { getCookie, setCookie } from '@/util/cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = getCookie('user') !== undefined;
    if(userLoggedIn) {
      router.push('/');
    } 
  }, [router]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const passwordagain = formData.get('passwordagain');

    if (password !== passwordagain) {
      alert('Passwords do not match');
      return;
    }
    
    const user = { username, password };

    // Set a user login cookie when the registration is successful
    setCookie('user', JSON.stringify(user), {
      maxAge: 30 * 24 * 60 * 60, 
      httpOnly: true,
      sameSite: 'lax',
    });

    router.push('/login');

    alert('Registration successful');
  };

  return (
    <Layout pageTitle="Signup">
      <div className='register_page'>
        <h2 className='form_title'>Sign up</h2>
        <form onSubmit={handleSubmit} className='body_form'>
          <div className="single_input">
            <label htmlFor="username">User Name / Email</label>
            <input minLength="3" name="username" id="username" type="text" placeholder='username' required />
          </div>
          <div className="single_input">
            <label htmlFor="password">Password</label>
            <input minLength="5" name="password" id="password" type="password" placeholder='password' required />
          </div>
          <div className="single_input">
            <label htmlFor="passwordagain">Password Again</label>
            <input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' required />
          </div>
          <input type="submit" value="Signup" className='submit_btn' />
          <p className='form_redirect'>
            If you already have an account, please <Link href="/login">log in</Link>.
          </p>
        </form>
      </div>
    </Layout>
  );
}
