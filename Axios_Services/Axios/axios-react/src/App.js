import * as Api from "./service/ApiQuestions";
import React, { useState } from "react";



function App() {

  const [state, setState] = useState({
    id: "",
    question: ""
  });


// gets data from server
const handleSubmit = e => {
  e.preventDefault();
  Api.fetchQuestionsApi()
      .then(res => {
        console.log(res);
        console.log(res.status);
         console.log(res.data);
   })
  .catch(err => console.log(err.response))
}


// post data
const handlePost = (e) => {
 
  const userData = {
    id: 9,
    question: "what is java ?"
  };
 Api.postQuestionsApi(userData)
};

// DELETE data
const handleDelete = (e) => {
 
  const userData = {
    id: 9,
    question: "what is java ?"
  };
 Api.deleteQuestionsApi(userData.id)
};

//Change data
const handlePut = (e) => {
 
  const userData = {
    id: 9,
    question: "what is java 9 ?"
  };
 Api.putQuestionsApi(userData)
};

  return (
    <div>
      <button onClick={handleSubmit}>GET IN CONSOLE</button>
      <button onClick={handlePost}>POST</button>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handlePut}>Change</button>
    </div>
  );
}

export default App;
