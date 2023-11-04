import { destroyCookie, getCookie } from '@/util/cookie';
import Link from 'next/link';

function Nav() {
  const userLoggedIn = getCookie('user') !== undefined;

  const handleLogout = () => {
    destroyCookie('user');
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing</Link>
        </li>
        {userLoggedIn ? (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/" onClick={handleLogout}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
