import './App.css';
import Shop from './pages/Shop'
import Footer from './components/Footer';
import Home from './pages/Home';
import Checkout from "../src/pages/Checkout";
import Cart from "../src/pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar"
import { Routes, Route, Link } from 'react-router-dom';
import Grid from "@mui/material/Grid"

function App () {
  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={3}>
          <Navbar/>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Grid>
      </Grid>
      <Footer/>
      
    </div>
  );

}

export default App;
