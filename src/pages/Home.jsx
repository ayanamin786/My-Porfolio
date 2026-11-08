import Footer from "../Components/Footer"
import Hero from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import Projects from "../Components/NewProjects"

const HomePage = () => {

return(
    <>
    <Navbar/>
      <main className="pt-[76px]">
            <Hero/>
         </main>
         <Projects/>
         <Footer/>

    </>
)

}

export default HomePage