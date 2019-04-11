function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function fetchJSON(url) {
  fetch(url)
    .then(validateResponse)
    .then(logResult)
    .catch(logError);
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsText(response) {
  return response.json();
}


function headRequest (url, data)  {  
  fetch( url, {  
    method: 'HEAD' })
    .then(validateResponse)
    .then(readResponseAsText)
    .then(logResult)
    .catch(logError);  
}


function _get (url) {
  fetch(url,
  {method:'GET',
   mode:'no-cors'
  })
  .then(logResult)
  .catch(logError);
}

function postRequest(url, data) {
//   var formData =  new  FormData(document.getElementById('msg-form'));
  
  return fetch( url, { 
    method: 'POST',
    body: data, 
    mode: 'no-cors'
  })
  .then(logResult)
  .catch(logError);
}

function readResponseAsBlob(response) {
  return response.blob();
}

function postRequestCors(url, data) {
//   const formData = new FormData(document.getElementById('msg-form'));
  console.log('data',data);
  fetch( url, {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  }).then(response => response.text())
  .then(data => {console.log(data)})
  .catch(error => console.error(error));

}

function fetchImage() {
  fetch('examples/fetching.jpg')
    .then(validateResponse)
    .then(readResponseAsBlob)
    .then(showImage)
    .catch(logError);
}

function postRequestCordsMod(url, data) {
   const formData = new FormData(document.getElementById('msg-form'));
  fetch('http://localhost:5000/', {
    method: 'POST',
    body: formData
  })
    .then(validateResponse)
    .then(readResponseAsText)
    .then(showText)
    .catch(logError);
}

function showImage(responseAsBlob) {
  const container = document.getElementById('img-container');
  const imgElem = document.createElement('img');
  container.appendChild(imgElem);
  const imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}

function showText(responseAsText) {
//   const message = document.getElementById('message');
  message.textContent = responseAsText;
}


var logError = (err, ext) => {
  console.log(err, ext);
}

var logResult = (data, ext) => {
  console.log(data, ext);
}


// var owner = 'clients'
// var state = 'open'
// var repo = 'fnh'
// var search = ''
// var token = '430e52196fda2833eec07cfa9a74aecf2ed794f8';
// var response = await fetch(`https://api.github.com/repos/${repo}/releases?access_token=${token}&page=${page}&per_page=100`)
// var timenow = new Date();
// var page=1;
// var search='';
// var new_issue = `https://code.soyo.soy/api/v1/repos/${owner}/${repo}/issues?access_token=${token}`
// var response = await fetch(`https://code.soyo.soy/api/v1/repos/${owner}/${repo}/issues?state=${state}&page=${page}&q=${search}`)
// var title = encodeURIComponent("Modify request headers").replace(/%2B/gi,'+')
// var body = encodeURIComponent("to determine what HTTP methods and headers are allowed by the server. If the server is configured to accept the method and headers of the original request, then it is sent, otherwise an error is thrown").replace(/%2B/gi, '+')
// var label = this.type === 'feature-request' ? '&labels=feature%20request' : ''
// var issue_data = {
// "assignee":"string",
// "assignees":["string"],
// "body":body,
// "closed":false,
// "due_date":new Date(timenow.getTime()+7*24*60*60*1000),
// "labels":[0],
// "milestone":0,
// "title":title,
// }

// // var new_issues_url=`https://code.soyo.soy/api/v1/repos/${owner}/${repo}/issues?access_token=${token}`;
// // var get_issues_url=`https://code.soyo.soy/api/v1/repos/${owner}/${repo}/issues?access_token=${token}&state=${state}&page=${page}&q=${search}`;
// //                    https://code.soyo.soy/api/v1/repos/clients/fnh/issues?access_token=e771084830fa45d9d393a242d42b32017152e1ce
// var get_issues_url=`https://code.soyo.soy/api/v1/repos/clients/fnh/issues?access_token=${token}`;

// var data = issue_data;

// console.log(get_issues_url);

// // _get(get_issues_url);
// // headRequest(get_issues_url);
// // postRequestCors(url, JSON.stringify(data)); 
// fetchJSON(get_issues_url);