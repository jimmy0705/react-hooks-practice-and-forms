import React,{useState} from 'react';



function PetLearn(props) {

   //const [state, setstate] = useState(new Date().toLocaleString()) ;

 

  return (
    <div className="pet-learn">

 <li>{props.name} is a {props.species} and is {props.age} years old.</li>

    </div>
  );

  

}

export default PetLearn;