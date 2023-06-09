import { Routes, Route } from "react-router-dom"
import Home from "./components/Widgets/Home/Home"
import About from "./components/Widgets/About/About"
import Skills from "./components/Widgets/Skills/Skills"
import Projects from "./components/Widgets/Projects/Projects"

const App = () =>{
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="skills" element={ <Skills/> } />
        <Route path="projects" element={ <Projects/> } />
      </Routes>
    </div>
  )
}

export default App