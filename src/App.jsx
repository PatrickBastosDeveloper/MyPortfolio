
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ChatbotComponent from './components/ChatbotComponent';

function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <ChatbotComponent />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
