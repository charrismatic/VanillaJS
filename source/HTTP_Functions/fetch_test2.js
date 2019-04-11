// function completeCallback(){
//   console.log(completeCallback);
// }
// var url = "http://127.0.0.1:8080/content/themes/fnh/attorney-data.php";
// var selector = ".wpbody-content .clear";
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
var url = "http://localhost:5000/api/v1/appointments";
// var payload= {'coze_dev':'develpment'};

// fetch(url, {
//     method: 'GET',
//     mode: 'no-cors'
//  })
// // .then(response => response.json())
// .then(response => response.text())
// .then(data => {
//   console.log(data)
// }).catch(error => console.error(error));


// curl http://ea-installation/index.php/api/v1/appointments --user username:password

/// fetch auth
// // let base64 = require('base-64');
// var url = "http://localhost:5000/api/v1/appointments";
// var username = 'coze_dev';
// var password = 'development';
// var credentials = window.btoa(unescape(encodeURIComponent( username+":"+password )));
// // var credentials = username+":"+password;


var api_key = 'AC2894c7f75aced220193829b78792f156';
var auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzhjNzFhODI2Y2NiMmY2ZmM1Zjg1YjFhYzc0ZmY1ODc4LTE1NTQ3MjE5OTgiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJUYXdkcnlEYW5ueUVzc2V4IiwidmlkZW8iOnsicm9vbSI6ImRlbW9yb29tIn0sImNoYXQiOnsic2VydmljZV9zaWQiOiJJUzQ3YTZjZjI4Y2Y4YjRmZmRiZGYzNDFiZmY4ZGM2MTljIn19LCJpYXQiOjE1NTQ3MjE5OTgsImV4cCI6MTU1NDcyNTU5OCwiaXNzIjoiU0s4YzcxYTgyNmNjYjJmNmZjNWY4NWIxYWM3NGZmNTg3OCIsInN1YiI6IkFDMjg5NGM3Zjc1YWNlZDIyMDE5MzgyOWI3ODc5MmYxNTYifQ.6n3L7CMmkn55uQi7DUz9vW8Sy5rMCHOqJk_xVefbeQg';
var cred = api_key = ":" + auth_token;
var credentials = window.btoa(unescape(encodeURIComponent(cred)));
var url = "http://video.twilio.com/v1/Rooms";


// var data = {username: username, password:password};

var headers = new Headers();
headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + credentials);
// headers.append('Access-Control-Allow-Headers', '');
headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
headers.append('Access-Control-Expose-Headers', 'Authorization');

// FETCH WITH BASIC AUTH HEADERS

// fetch(url, {
//   method: 'POST',
//   body: data,
//   headers: headers,
//   credentials: 'include',
// })
// .then(response => response.json())
// .then(json => console.log(json));
// //.done();

// function parseJSON(response) {
// return response.json()
// }




// FETCH WITH DATA
var post_data = new FormData();
post_data.append("json", JSON.stringify(data));
// headers.append('Content-Type', 'text/json');

fetch(url,
{
    method: "GET",
//     body: post_data,
    headers: headers,
})
.then(function(res){ return res.text(); })
.then(function(data){ console.log( JSON.stringify( data ) ) })

