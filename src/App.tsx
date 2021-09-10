import React from 'react';
import './index.css';
import Status from './components/Status';
// import Heading from './components/Heading';

function App() {

  return (
    <div className="App">
      {/* type assign for the status is very need */}
  <Status status= 'error'/>
  {/* <Heading>pascalcase</Heading> */}
   </div>
  );
}

export default App;
