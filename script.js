const text = ["Aswin N","Automation Engineer","AI Enthusiast"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(isDeleting){

document.querySelector(".typing").textContent=current.substring(0,j--);

if(j<0){
isDeleting=false;
i++;
if(i==text.length){i=0;}
}

}else{

document.querySelector(".typing").textContent=current.substring(0,j++);

if(j==current.length){
isDeleting=true;
}

}

setTimeout(type,120);

}

type();
