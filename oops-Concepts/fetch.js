// fetch("fetch.txt").then((response)=>{
// return response.text();
// }).then((data)=>{
//     console.log(data);
//     document.write(data);
// });


// fetch("fetch.txt").then((response)=>{
//  return response.text();
// console.log(response);
// }).then((data)=>{
// console.log(data);
// document.write(data);
// });

// fetch("fetch.txt")
// .then((response)=>response.text())
// .then((data)=>document.write(data))
// .catch((error) => console.error('Error fetching the file:', error));

//fetch("https://jsonplaceholder.typicode.com/postss")  //error
// fetch("data.json")     //response
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data);
//     for(var i in data){
//         document.writeln(`${data[i].name}- ${data[i].add}- ${data[i].phone}</br>`);
//     }
// })
// .catch((error)=>console.log(error));

//--------------------Creating a resource
// var obj={
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//---------Updating a resource
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


  //----------------Patching a resource
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
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

  //----------Deleting a resources
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

