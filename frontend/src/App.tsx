import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from "./pages/about";
import { Products } from "./pages/products";
import { History } from "./pages/history";
import { useEffect } from "react";
import { Header } from "./component/header";


export const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/history'} element={<History />} />
          <Route path={'/products'} element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
