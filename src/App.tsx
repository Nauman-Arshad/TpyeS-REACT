import React from 'react';
import Person from './components/Person';
import Greet from './components/Greet';
import './index.css';
import PersonList from './components/PersonList';
import Container from './components/Container';

function App() {
  const personname={
    first:'Nauman',
    last: 'khan',
  }
  const nameList=[
  {
    first:'maan',
    last :'ali',
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Katana',
    last: 'Diana'
  }
]
  return (
    <div className="App">
  <Greet name="Nauman" message={12} isLoggedIn={false} />
  <Person name={personname}/>  
  <PersonList names={nameList}/>
  <Container styles={{border:'1px solid gray'}} />
   </div>
  );
}

export default App;


// destructuring PROPS 
// props  types defines just like components in sepeetare file
// we can import object by name to get thats  props