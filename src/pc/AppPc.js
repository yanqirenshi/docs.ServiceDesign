import React from 'react';

import PageHome from './pages/PageHome';
import PageFacilitation from './pages/PageFacilitation';
import PageIdeation from './pages/PageIdeation.js';
import PageImplementation from './pages/PageImplementation.js';
import PageManagement from './pages/PageManagement.js';
import PagePrototyping from './pages/PagePrototyping.js';
import PageResearch from './pages/PageResearch.js';
import PageSpace from './pages/PageSpace.js';

function AppPc() {
  return (
      <div>
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

export default AppPc;
