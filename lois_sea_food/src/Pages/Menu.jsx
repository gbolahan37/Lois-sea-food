import Navbar from "../components/Navbar"
import PageBanner from "../components/Banner"
import Search from "../components/Search"
import Category from "../components/category"
import Foodcard from "../components/Foodcard"
import Footer from "../components/Footer"

function Menu() {
  return (
    <>
    <Navbar />
    <Banner header="Our Meun" descript="Discover our exquisite selection of fresh seafood" />
    <Search />
    <Category />
    {/* <Foodcard /> */}
    <Footer />
    </>
  )
}

export default Menu