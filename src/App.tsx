import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DoctorProfile from "./components/profile/DoctorProfile";
import PatientProfile from "./components/profile/PatientProfile";
import LandingPage from "./components/landing/LandingPage";
import ContactForm from "./components/contact/ContactForm";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<Home />} />
        <Route path="/profile" element={<DoctorProfile />} />
        <Route path="/patient" element={<PatientProfile />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* Add a catch-all route for tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
