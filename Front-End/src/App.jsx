import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Details from "./Components/Details";
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
    <> 
  <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
        </Router>
        </CartProvider>
    </>
  );
}

export default App;
