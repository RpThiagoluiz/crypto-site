import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "pages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />

    <Route path="/exchanges" element={<Exchanges />} />

    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

    <Route path="/crypto/:coinId" element={<CryptoDetails />} />

    <Route path="/news" element={<News />} />
  </Routes>
);

export default AppRoutes;
