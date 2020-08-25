import React,{useState} from 'react';

//import logo from './logo.svg';
import './App.css';
import HooksLearn from './components/Hooks.js'
import EvntLearn from './components/Evntlrng'
import FormLearn from './components/Forms'
import PetLearn from './components/Pet'


// const pets = [
//   { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
//   { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
//   { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
//   { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
//   { name: "Paws", species: "dog", age: "6", id: 789789789 }
// ]





function App() {

    const [pets, setPets] = useState(
      [
        { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
        { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
        { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
        { name: "Paws", species: "dog", age: "6", id: 789789789 }
      ]
    ) ;



  return (
    <div className="App">

 <HooksLearn/>
 <EvntLearn/>
 <div >
   <FormLearn setPets={setPets}/>
   
 </div>
 <ul>
        {pets.map(pet => <PetLearn name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
      </ul>

    </div>
  );

  

}

export default App;
