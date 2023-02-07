import './App.css';
import Navbar from'./components/NavBar/index'
import ItemListContainer from './components/ItemListContainer/index'
//import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
        <Navbar/>
        <ItemListContainer/>
        <Routes>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;

/*

            <Route path='/home' element={<Home/>}/> 
            <Route path='/productos' element={<Products/>}/> 
            <Route path='/servicios' element={<Services/>}/> 
            <Route path='/cart' element={<Cart/>}/> 
*/