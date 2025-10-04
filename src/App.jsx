import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Projects from "./pages/Products";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Routes>
            // public routes
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            // protected routes
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/projects" element={<Projects />} />
            </Route>
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
