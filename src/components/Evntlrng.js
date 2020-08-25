import React,{useState} from 'react';



function EvntLearn() {
const[like,setLike] = useState(0);

//events here
function increase(){
    //alert("increaseing")
    setLike(like+1)
 }

function decreaseHandler(){
  // alert("decreasing")

  if(like ==0){
      return
  }
  setLike(like-1)
}
 

  return (
    <div className="evnt-lrn">
   <h2>likes</h2>
   <br></br>
   <button onClick={increase}>increase</button>

   <button onClick={decreaseHandler}>decrese</button>

  <h3 >like count : {like}</h3>

    </div>
  );

  

}

export default EvntLearn;