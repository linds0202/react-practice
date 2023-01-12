import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = ({ search, setSearch, width }) => {
  return (
    <div>
        <Header title='Blog' width={width} />
        <Nav search={search} setSearch={setSearch} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout