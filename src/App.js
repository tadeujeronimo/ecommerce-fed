import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import usePageTitle from "./hooks/usePageTitle";
import NotFound from "./pages/NotFound";
import routes from "./routes";
import "./App.css";

const App = () => {
  usePageTitle();
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {routes.map(({ path, component, isProtected }, index) => (
          <Route
            key={index}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute>
                  {React.createElement(component)}
                </ProtectedRoute>
              ) : (
                React.createElement(component)
              )
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
