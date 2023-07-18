import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';
import { Mens } from './pages/Mens';
import { Details } from './pages/Details/Details';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <div className='app__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
