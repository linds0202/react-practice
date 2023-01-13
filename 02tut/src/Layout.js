import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Header title='Blog' />
        <Nav  />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout