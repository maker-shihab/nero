import Image from 'next/image';
import Link from 'next/link';
import Layout from './Layout';

export default function DashboardLayout({ children }) {
  return (
    <Layout showHeader={false} showFooter={false} pageTitle="User Dashboard">
      <div className="dashboard">
      <aside className='dashboard_aside'>
          <Link href='/'>
            <Image src='/images/logo.png' alt='logo' width={60} height={60} loading='lazy' />
          </Link>
          <div className="dashboard_menu">
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
          <Link href='/' className='dashboard_homeredirect'>Go back home</Link>
        </aside>
        <div className="dashboard_main_content">
          {children}
        </div>
      </div>
    </Layout>
  );
}
