import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/auth/SignupPage';
import Login from './components/auth/Login';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/auth/ForgotPassword';
import OtpVerification from './components/auth/OtpVerification';
import Innovators from './components/pages/Innovators';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import InputDesign from './components/pages/InputDesign2'; // Import the InputDesign2 component
import ProjectsContent from './components/pages/ProjectsContent'; // Ensure this is a default import
import InnovatorsHub from './components/pages/InnovatorsHub';
import ElevatingStartups from './components/pages/ElevatingStartups'; // Import the new page
import AcceleratingStartups from './components/pages/AcceleratingStartups'; // Import the new page
import StartupIdeaForm from './components/pages/StartupIdeaForm'; // Import the new form page
import AcceleratingStartupForm from './components/pages/AcceleratingStartupForm'; // Import the new form page
import CreateProject from './components/pages/CreateProject';
import ElevatingStartupForm from './components/pages/ElevatingStartupForm'; // Ensure this import is present
import ProjectDetails from './components/pages/project-details/ProjectDetails';
import UpgradesPage from './components/pages/upgrades/UpgradesPage';
import UpgradePlanPage from './components/pages/upgrades/UpgradePlanPage';
import PaymentCheckout from './components/pages/upgrades/PaymentCheckout';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar isAuthenticated={isAuthenticated} userEmail={userEmail} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserEmail={setUserEmail} />} />
            <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} userEmail={userEmail} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={<Profile userEmail={userEmail} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verification" element={<OtpVerification />} />
            <Route path="/innovators" element={<Innovators />} />
            <Route path="/project-dashboard" element={<InputDesign />} />
            <Route path="/projects" element={<ProjectsContent />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/upgrades" element={<UpgradesPage />} />
            <Route path="/innovators-hub" element={<InnovatorsHub />} />
            <Route path="/elevating-startups" element={<ElevatingStartups />} />
            <Route path="/accelerating-startups" element={<AcceleratingStartups />} />
            <Route path="/startup-idea-form" element={<StartupIdeaForm />} />
            <Route path="/accelerating-startup-form" element={<AcceleratingStartupForm />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/elevating-startup-form" element={<ElevatingStartupForm />} />
            <Route path="/upgrade-plan" element={<UpgradePlanPage />} />
            <Route path="/payment-checkout" element={<PaymentCheckout />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
