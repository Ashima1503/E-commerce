import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

const App = () => {
  return(
  <>
  <Router>
     <Routes>
     <Route exact path='/' element={<Home />}/>
     <Route exact path="/Register" element={<Register/>}/>
     <Route exact path="/Login" element={<Login/>}/>
     <Route exact path="/ProductList" element={<ProductList/>}/>
     <Route exact path="/Product" element={<Product/>}/>
     <Route exact path="/Cart" element={<Cart/>}/>
     <Route exact path="/Contact" element={<Contact/>}/>
     </Routes>
    </Router>
    </>);
};

export default App;