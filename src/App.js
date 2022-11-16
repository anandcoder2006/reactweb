import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import './styles/App.scss'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import './styles/mediaquery.scss'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>

      <Footer/>
    </Router>

  )
}

export default App;
