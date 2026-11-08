import { Route, Routes} from "react-router-dom"
import HomePage from "../pages/Home"
import About from "../pages/About"

const Navigation = () => {
return(


<Routes>
   <Route path="/" element={<HomePage/>} />
   /* <Route path="/about" element={<About/>} />
   {/* <Route path="/how-it-works" element={<HowItWorks />} />
   <Route path="/pricing" element={<Pricing />} />
   <Route path="/changelog" element={<Changelog />} />
   <Route path="/download" element={<Download />} /> */ }
</Routes>

)
}
export default Navigation