import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Hom from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Work/>} />
        <Route path="/shop" element={<Testimonial/>} />
        <Route path="/menu" element={<CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
        <main>
          <Meals />
        </main>
     </CartProvider>} />
      </Routes>

    </Router>
  );
}

export default App;
// __________________________________________________
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";

// function App () {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <Router>
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}

//       <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </CartProvider>
//     </Router>
//   );
// }
 
// export default App;
// // _____________________________________________
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Work from "./pages/Work";
// import Testimonial from "./pages/Testimonial";
// import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Work />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;