import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Story from "../components/Story"
import Footer from "../components/Footer"
import Choice from "../components/Choice"
import Team from "../components/Team"

function About() {
  return (
    <>
    <Navbar />
    <Banner header="About Us" descript="Three generations of seafood excellence" />
    <Story />
    <Choice />
    <Team />
    <Footer />
    </>
  )
}

export default About