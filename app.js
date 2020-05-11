// document.querySelector(".get-jokes").addEventListener("click", () => console.log(2));

document.querySelector(".get-jokes").addEventListener("click" , getJokes)

class Http{
  constructor(){
    id: 1
  }

   async get(num){
     let jokesjson = await fetch(`http://api.icndb.com/jokes/random/${num}`);

     let jokes = await jokesjson.json();

     return jokes
   }
}


function getJokes(){
  document.querySelector(".jokes").innerHTML = "";
  
  let xhr = new XMLHttpRequest();

  let num = parseInt(document.querySelector("#number").value);

  //init
  let http = new Http;

  http.get(num).then(response =>{
      let jokes = response.value;

      jokes.forEach((el)=>{
        document.querySelector(".jokes").insertAdjacentHTML("beforeend", `<li>${el.joke}</li>`)
      })

      console.log(2)
  })


  // xhr.open("GET", `https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random/${num}`, true);

  // xhr.onload = function(){
  //   console.log(this)
    
  //   if(this.status === 200){
  //     let response = JSON.parse(this.responseText);

  //     let jokes = response.value;

      // jokes.forEach((el)=>{
      //   document.querySelector(".jokes").insertAdjacentHTML("beforeend", `<li>${el.joke}</li>`)
      // })
  //   }
  // }
  // console.log(2)

  // xhr.send()
}





































// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);
      
//       let output = '';

//       if(response.type === 'success') {
//         response.value.forEach(function(joke){
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>Something went wrong</li>';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }

//   xhr.send();

//   e.preventDefault();
// }