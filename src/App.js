import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
