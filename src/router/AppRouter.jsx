import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";

import HomePage from "../pages/HomePage";
import ReservasPage from "../pages/ReservasPage";
import MenuPage from "../pages/MenuPage";

const AppRouter = () => {
  return (
    <Router>
      <PublicNavbar />
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservas" element={<ReservasPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
