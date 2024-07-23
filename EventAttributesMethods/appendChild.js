var createle=document.createElement("h3");
var createtextNode=document.createTextNode("nishigandha vijay pawar");
var cmnt=document.createComment("this is a comment");
var create =document.createElement("h4");
var text=document.createTextNode("nishu");

createle.appendChild(createtextNode);
create.appendChild(cmnt);

console.log(create);
console.log(createle);

var a=document.getElementById("text").appendChild(createtextNode);
var b=document.getElementById("te").appendChild(text);
console.log(a);
console.log(b);

// var target=document.getElementById("text");
// target.document.insertBefore(text,target.childNodes[1]);

