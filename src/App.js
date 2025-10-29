import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import ProductCart from './Pages/ProductCart';
 

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/cart' element={<ProductCart />} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
