import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { MCQ } from './pages/MCQ';
import { Jobs } from './pages/Jobs';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { JobDetails } from './pages/Jobs/JobDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq/*" element={<MCQ />} />
          {/* <Route path="/mcq/indian-constitution/part-1/test2" element={<MCQ />} /> */}

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/a²class" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-details" element={<JobDetails />} />

        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;