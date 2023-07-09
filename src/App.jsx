import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/AboutPage";
import Services from "./components/services/ServicesPage";
import Products from "./components/products/ProductsPage";
import Contact from "./components/contact/ContactPage";

function App() {
  const routes = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/about", element: <About /> },
    { id: 3, path: "/services", element: <Services /> },
    { id: 4, path: "/products", element: <Products /> },
    { id: 5, path: "/contact", element: <Contact /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
