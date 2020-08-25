import React,{useState} from 'react';



function HooksLearn() {

   const [state, setstate] = useState(new Date().toLocaleString()) ;

   setInterval(()=>{
    setstate(new Date().toLocaleString())
},1000)

  return (
    <div className="hooks-learn">

  <h1 className="time">here is the time : {state}</h1>

    </div>
  );

  

}

export default HooksLearn;