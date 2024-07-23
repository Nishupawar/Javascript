//--------------------Creating a resource

// document.getElementById("saveForm").addEventListener("click",function(e){
//     e.preventDefault();
//     var obj={
//         title: document.getElementById("title").value,
//         body: document.getElementById("body").value,
//         userId: document.getElementById("userId").value,
//       }
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify(obj),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
// })

document.getElementById("saveForm").addEventListener("click",function(e){
    e.preventDefault();
   // var obj={
        // title: document.getElementById("title").value,
        // body: document.getElementById("body").value,
        // userId: document.getElementById("userId").value,
     // }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: new FormData(document.getElementById("myForm")),
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
})
