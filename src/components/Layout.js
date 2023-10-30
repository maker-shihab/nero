const { useRouter } = require("next/router");
const { default: Nav } = require("./Nav");

function Layout({children}) {
  const router = useRouter();
  const hideNavOnPages = ['/login', '/register', '/404'];

  return (
    <div>
      {hideNavOnPages.includes(router.pathname) ? null : <Nav/>}
      {children}
    </div>
  )
}
export default Layout;