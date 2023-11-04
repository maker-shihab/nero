// pages/404.js
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Image
        src="/images/404.jpg" 
        alt="404 Image"
        height={350}
        width={450}
      />
      <p className='form_redirect'>
        Go back to the <Link href="/">home</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
