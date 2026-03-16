function addCode(){

let title=document.getElementById("title").value;
let code=document.getElementById("code").value;

let codes=JSON.parse(localStorage.getItem("codes")) || [];

codes.push({title,code});

localStorage.setItem("codes",JSON.stringify(codes));

displayCodes();
}

function displayCodes(){

let codes=JSON.parse(localStorage.getItem("codes")) || [];

let html="";

codes.forEach((c,i)=>{

html+=`
<h3>${c.title}</h3>
<pre>${c.code}</pre>
<button onclick="deleteCode(${i})">Delete</button>
`;

});

document.getElementById("codeList").innerHTML=html;
}

function deleteCode(i){

let codes=JSON.parse(localStorage.getItem("codes"));

codes.splice(i,1);

localStorage.setItem("codes",JSON.stringify(codes));

displayCodes();
}

displayCodes();