import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path=":productId" element={<SingleProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
