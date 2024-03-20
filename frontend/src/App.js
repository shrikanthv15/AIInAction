import React from 'react';
import { Helmet } from 'react-helmet';
import EventPage from './EventPage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter
import HomePage from './HomePage.js';
import SpeakerPage from './SpeakerPage.js';
import AboutUs from './AboutUs.js';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/eventpage" element={<EventPage />} />
          <Route path="/speakerpage" element={<SpeakerPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
