import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Community from "./Pages/Commnunity";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile"
import AuthPage from "./Pages/AuthPage"
import Analysis from "./Pages/Analysis";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<AuthPage />} />
        <Route exact path="/sign-up" element={<AuthPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;