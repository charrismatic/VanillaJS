function completeCallback(){
  console.log(completeCallback);
}
// var url = "http://127.0.0.1:8080/content/themes/fnh/attorney-data.php";
var selector = ".wpbody-content .clear";
// jQuery
// $(selector).load(url, completeCallback)

// Native
// fetch(url).then(data => data.text()).then(data => {
//   document.querySelector(selector).innerHTML = data
// }).then(completeCallback)



// fetch(url, {
//   credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data) // Prints result from `response.json()`
// })
// .catch(error => console.error(error));

// data = ;

//var url = "http://127.0.0.1:8080/content/themes/fnh/attorney-data.php?q=test";
// var url = "http://localhost:5000";

fetch(url, {
    method: 'GET',
    mode: 'no-cors'
 })
// .then(response => response.json())
.then(response => response.text())
.then(data => {
  console.log(data)
}).catch(error => console.error(error));


