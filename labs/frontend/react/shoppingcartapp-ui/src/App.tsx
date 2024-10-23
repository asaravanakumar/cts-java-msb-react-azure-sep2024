import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap css
import "bootstrap/dist/js/bootstrap.min.js"; // import bootstrap js

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="container mt-5 pt-3">
          <MainRoutes />
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
