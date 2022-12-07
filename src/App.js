import Home from "./Routes/Home";

import About from "./Routes/About"
import Contact from "./Routes/Contact"
import {Routes,Route} from "react-router-dom"
import Projects from "./Routes/Projects";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
