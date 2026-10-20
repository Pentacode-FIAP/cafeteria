import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#fffaf1]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

