import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./about";
import Services from "./services";
import Products from "./products";
import Contact from "./contact";

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
