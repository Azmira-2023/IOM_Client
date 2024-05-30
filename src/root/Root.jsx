import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import { Outlet } from "react-router-dom"


const Root = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  
  )
}

export default Root