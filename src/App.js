import './App.css';
import Shop from './pages/Shop'
import Footer from './components/Footer';
import Home from './pages/Home';
import Checkout from "../src/pages/Checkout";
import Product from "./pages/Product";

function App () {
  return (
    <div>
      <Shop />
      <Home/>
      <Footer/>
      <Product />
      <Checkout />
    </div>
  );

}

export default App;
