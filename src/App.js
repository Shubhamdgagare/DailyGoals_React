import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import User from './components/User';
import Error from './components/Error';

// importing Route to load different pages to load


function App() {
  return (
    <div className="App">
      <Header/>

      {/* Using routes to render pages according to url */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/user/" element={<User/>} />
        <Route path="/user/:mazaNaav" element={<User/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
} 

export default App;
