import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DoctorProfile from "./components/profile/DoctorProfile";
import LandingPage from "./components/landing/LandingPage";
import ContactForm from "./components/contact/ContactForm";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<Home />} />
          <Route path="/profile" element={<DoctorProfile />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
