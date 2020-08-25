import React,{useState} from 'react';



function FormLearn(props) {

    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [age, setAge] = useState()

  function formHandler(e){
      console.log(name,species,age)
     e.preventDefault()
     props.setPets(pet=> pet.concat({ name: name, species: species, age: age, id: Date.now()}))
     
     setAge("")
     setName("")
     setSpecies("")
 
    }

  return (
    <div className="forms-learn">
 
 <form onSubmit={formHandler}>
       
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e=>setName( e.target.value)} placeholder="Name" required />
        <input value={species} onChange={e=>setSpecies( e.target.value)} placeholder="species" required />
        <input value={age} onChange={e=>setAge( e.target.value)} placeholder="age in years" required />
        <button>Add Pet</button>
      </fieldset>
    </form>
 
    
    </div>
  );

  

}

export default FormLearn;