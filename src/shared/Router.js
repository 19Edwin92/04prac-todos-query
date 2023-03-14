import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/commen/Header";
import TDMain from "../pages/TDMain";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TDMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;