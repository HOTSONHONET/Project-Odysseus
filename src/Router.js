import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AuthPage from "./Pages/AuthPage"
import Analysis from "./Pages/Analysis";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/sign-up" element={<AuthPage />} />
        {
          sessionStorage.getItem("loggedIn") ?
            <>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/analysis" element={<Analysis />} />
            </>
            : <>
            </>
        }
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;