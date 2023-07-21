import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';
import { Mens } from './pages/Mens';
import { Details } from './pages/Details/Details';
import { Womens } from './pages/Womens/Womens';
import { Sales } from './pages/Sales';
import { Newest } from './pages/Newest';
import { Cart } from './pages/Cart';
import { SignIn } from './pages/Sign-in';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <div className='app__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/women" element={<Womens />} />
          <Route path="/sale" element={<Sales />} />
          <Route path="/details" element={<Details />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
