/* eslint-disable react-hooks/exhaustive-deps */
import { getCookie } from '@/util/cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const userLoggedIn = getCookie('user') !== undefined;

    if (!userLoggedIn) {
      router.push('/404');
    }
  }, [router]);


  return (
    <Layout showHeader={false} showFooter={false} pageTitle="User Dashboard">
      <div className="dashboard">
        <h2>Welcome to Your Dashboard</h2>
        <div className="dashboard-menu">
          <ul>
            <li>
              <Link href="/dashboard/subscription">
                Subscription
              </Link>
            </li>
            <li>
              <Link href="/dashboard/usage">
                Usage
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <Link href='/'>Go back home</Link>
      </div>
    </Layout>
  );
}
