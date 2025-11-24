import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Particles from "./Particles"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-[#FAF9EE]">
        {/* Sidebar Navigation */}
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] text-[#FAF9EE] py-8 px-4">
          <h1 className="text-2xl font-bold mb-8">Terence John Duterte</h1>
          <nav className="space-y-4">
            {["About", "Experience", "Skills", "Education", "Certifications", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block text-[#FAF9EE] hover:text-[#A2AF9B] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Particles Background */}
        <div className="fixed inset-0 z-[-1]">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
          />
        </div>
      </div>
    </Router>
  )
}

export default App