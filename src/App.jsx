import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserSettings from "./pages/User/UserSetting";
import WorkspaceSettings from "./pages/User/WorkspaceSetting";
import Proxies from "./pages/User/Proxies";
import Billing from "./pages/User/Billing";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); 
  };
  return (
    <Router>
      <Header changeLanguage={changeLanguage}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-setting" element={<UserSettings />} />
        <Route path="/workspace-setting" element={<WorkspaceSettings />} />
        <Route path="/proxies" element={<Proxies />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
