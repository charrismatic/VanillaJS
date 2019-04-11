
https://itnext.io/that-data-looks-so-fetching-on-you-understanding-the-js-fetch-api-880eae0c8d25

# That data looks so fetching on you: Understanding the JS Fetch API

---------------------------
# That data looks so fetching on you: Understanding the JS Fetch API

![](https://cdn-images-1.medium.com/freeze/max/60/1*C5b9mNOi7sKN0-LW-66DYw.jpeg?q=20)

![](https://cdn-images-1.medium.com/max/2000/1*C5b9mNOi7sKN0-LW-66DYw.jpeg)

![](https://cdn-images-1.medium.com/max/2000/1*C5b9mNOi7sKN0-LW-66DYw.jpeg)

`fetch()` is not the only way JS can deal with data from servers, but it might be the easiest. The go-to method used to be [XMLHttpRequest](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp), however that method is starting to die off. Any developer starting out should take some time to get familiar with this new built in API.

`*fetch()*` *uses promises, so read* [*this*](https://medium.com/@mikecronin92/promises-promises-understanding-the-basics-of-js-promise-objects-dd5c656f2db4) *if you don’t know what those are*

### The Big Picture

I’m paraphrasing a bit here, but [javascript.info](https://javascript.info/promise-chaining#bigger-example-fetch) breaks down the `fetch()` basics nicely:

> 1\. `fetch()` makes network request to a url and returns a promise.

> 2\. That promise resolves with a response object when the remote server responds with headers.

> 3\. To read the response body, we have to call a response method on it, like `text()` or `json()`, which will return another promise whose resolve value is the body of the response.

```
fetch(‘[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
   console.log(myJson);
  });
```

For a more detailed technical breakdown, I encourage you to check out that [javascript.info](https://javascript.info/promise-chaining#bigger-example-fetch) link.
Also, Google [wrote a great article](https://developers.google.com/web/updates/2015/03/introduction-to-fetch) and they unsurprisingly go into more depth than little old me.

### Breakdown

`fetch()` creates a promise that resolves with a [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).
Now, that response object does have a body, but it’s something called a [readable stream object](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). Our data is in there, but the only way to get it out is through a [response method](https://developer.mozilla.org/en-US/docs/Web/API/Response#Methods) which returns our data as *another* resolved promise value.
So we need one more `then()` to actually use our data. Here’s a basic pseudo code version of what’s happening:

```
fetch(url)
  .then(function(theResponseObject) {
    return theResponseObject.methodToGetToData()
  })
  .then(function(myUsableData) {
    // manipulate/show/log our data
  })
  .catch(function(error)
   // error handling here
  );
```

If any of those steps gets rejected, you would just `catch()` it.

### Working with an example

So now lets talk through an example. For this, we’ll use the fabulous
 [JSONplaceholder](https://jsonplaceholder.typicode.com/) site, which gives dummy
 JSON files that follow REST conventions. *Perfect* for testing and tutorials.
  Below, let’s put a “user” on our page:

![](https://i.embed.ly/1/display/resize?url=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F29032846%3Fs%3D400%26v%3D4&key=a19fcc184b9711e1b4764040d3dc5c07&width=40)

Our `fetch()` resolves with a response object, which is taken into our first `then()` method.
I logged some basic properties, but I encourage you to poke around on your own as well.
 Our first `then()` returns `response.json()`, which is a resolved promise that holds our data.
 In this case it’s JSON, but if it were just text, we could’ve used the `text()` response method.

In our second `then()`, we actually get to manipulate our data. I’m just using `document.write()`
for this tutorial, but now that you have access to the data,
you could put it into your page however you want.

The second then() just returns our data to reinforce the idea that chaining can go on as long as you like.
It all ends with logging our user to the console.

So for every `fetch()` whose data you want to show or manipulate you will
need __*at least two*__ `then()` methods: the first to return the response method
that retrieves your data, and the second then to actually work with the data.

### Fetch isn’t just for getting

Our apps would hardly be dynamic if they could only *read* data, so `fetch()`
can take a second argument, a
[request](https://developer.mozilla.org/en-US/docs/Web/API/Request#Examples).
You simply pass in an object to `fetch()` that specifies the type of request
 you want to make, along with the headers and body and whatever else you need.
 The kind people at Google created this example code in their
 [article on fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch#post_request):

```
fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: 'foo=bar&lorem=ipsum'
  })
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
```

However, to send data from your page, you need to set up your servers to handle incoming info properly. Which, is a bit beyond the scope of this tutorial. But in most web frameworks, sending data via fetch is just like doing it with form data. The rails docs have a great section on using [JSON Parameters](http://guides.rubyonrails.org/action_controller_overview.html#json-parameters) for those who are interested.

### Using fetch() on your own site

`fetch()` can go to any url, including your own server. To visit your site’s own files,
just give a relative path name instead of a URL.
If `fetch()` doesn’t see “http”, it will assume you are going from your root directory.
This works on production or localhost servers.
Here’s a simple example of `fetch()` retrieving some JSON data
from my root folder on my local test server:

```
fetch(‘test.json’).then((r) => r.json()).then(console.log)
// LOG: {a: 1}
```

You can also post data to your own server by simply providing a
relative URL and not an absolute one. Again, your site must be able to handle
 incoming data for that to work.

(by the way, setting up a local server isn’t hard and is well worth looking into)

And there you have it, the very basics of `fetch()`.
I highly encourage reading the
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response#Methods) docs,
the [Google](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
and [javascript.info](https://javascript.info/promise-chaining#bigger-example-fetch)
articles as well. But the best way to learn is to do, so get out there and build a
 fetching new site.

Happy coding everyone,

Mike
html2md:1
