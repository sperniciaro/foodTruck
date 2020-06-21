import React from 'react';
import './_app.scss';
import Home from './containers/home/home';

function App() {
  return (
    <div className="App">
        <h1 className="AppHeader">
            San Francisco Food Truck Finder
        </h1>
      <Home/>
    </div>
  );
}

export default App;
