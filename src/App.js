import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
