import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationPopup from './components/DonationPopup';
import ScrollToTop from './components/ScrollToTop';

import {
  AboutPage,
  AmbassadorsPage,
  ContactPage,
  DonatePage,
  GetInvolvedPage,
  HomePage,
  MilestonesPage,
  NotFoundPage,
  PartnersPage,
  ProgramsPage,
  TeamPage,
  VolunteerPage,
} from './Pages';

export default function App() {
  return (
    <>
      {/* Scroll to top automatically on route changes */}
      <ScrollToTop />

      {/* Global Persistent Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        <Routes>
          {/* Main Canonical Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/milestones" element={<MilestonesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/ambassadors" element={<AmbassadorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />

          {/* Backward compatibility redirects for legacy .html bookmarks/links */}
          <Route path="/home.html" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/milestone.html" element={<Navigate to="/milestones" replace />} />
          <Route path="/meet_team.html" element={<Navigate to="/team" replace />} />
          <Route path="/Program.html" element={<Navigate to="/programs" replace />} />
          <Route path="/program.html" element={<Navigate to="/programs" replace />} />
          <Route path="/getinvolve.html" element={<Navigate to="/get-involved" replace />} />
          <Route path="/volunteer.html" element={<Navigate to="/volunteer" replace />} />
          <Route path="/partnership.html" element={<Navigate to="/partners" replace />} />
          <Route path="/ambassador.html" element={<Navigate to="/ambassadors" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/donate.html" element={<Navigate to="/donate" replace />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Global 5-second Donation Popup modal */}
      <DonationPopup />
    </>
  );
}
