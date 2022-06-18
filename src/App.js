import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
