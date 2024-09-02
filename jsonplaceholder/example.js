//https://jsonplaceholder.typicode.com/guide/

//Getting a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response)=>response.json())
//   .then((json)=>console.log(json))

//Listing all resources
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response)=>response.json())
  // .then((json)=>console.log(json))

//Creating a resource
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Updating a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Patching a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Deleting a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

//Filtering resources
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Listing nested resources
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));

