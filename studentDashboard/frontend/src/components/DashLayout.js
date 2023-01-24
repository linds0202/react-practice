import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import dashFooter from "./dashFooter"

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='dash-container'>
            <Outlet />
        </div>
        <dashFooter />
    </>
  )
}

export default DashLayout