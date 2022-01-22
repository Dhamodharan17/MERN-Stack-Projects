import axios from 'axios';

//get 
export function fetchQuestionsApi() {
        return new Promise((resolve, reject) => {// returns promise
            axios
                .get("http://localhost:3000/csquestions")
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        })
    }

//post
export function postQuestionsApi(userData){
    axios.post("http://localhost:3000/csquestions", userData)
    .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
}

//delte
export function deleteQuestionsApi(id){
    axios.delete("http://localhost:3000/csquestions/9")
    .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
}

//post
export function putQuestionsApi(userData){
    axios.put("http://localhost:3000/csquestions/9", userData)
    .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
}