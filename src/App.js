import React from 'react';

import './App.css';

import PageHome from './pc/pages/PageHome';
import PageFacilitation from './pc/pages/PageFacilitation';
import PageIdeation from './pc/pages/PageIdeation.js';
import PageImplementation from './pc/pages/PageImplementation.js';
import PageManagement from './pc/pages/PageManagement.js';
import PagePrototyping from './pc/pages/PagePrototyping.js';
import PageResearch from './pc/pages/PageResearch.js';
import PageSpace from './pc/pages/PageSpace.js';

function App() {
  return (
      <div className="App">
        <PageHome />

        <PageResearch />
        <PageIdeation />
        <PagePrototyping />
        <PageImplementation />
        <PageManagement />
        <PageFacilitation />
        <PageSpace />
      </div>
  );
}

export default App;
