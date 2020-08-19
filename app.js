
var list=document.getElementById("list");
function edit(){
var val=document.getElementById("val");
var database=firebase.database().ref('todos');
var key=database.push().key;
console.log(key)

// var l=document.createElement('li');
// var text=document.createTextNode(val.value);
// l.appendChild(text);
// list.append(l);

// val.value=" ";


// //deletebtn
// var deletebtn=document.createElement('button');
// var delbtntxt=document.createTextNode('Delete');


// deletebtn.appendChild(delbtntxt);
// deletebtn.setAttribute("onclick","dele(this)");
// l.appendChild(deletebtn);


// //editbtn
// var editbtn=document.createElement('button');
// var editbtntxt=document.createTextNode("Edit");
// editbtn.appendChild(editbtntxt);
// editbtn.setAttribute("onclick","ed(this)");
// l.appendChild(editbtn);






}
// console.log(firebase);

// function del(){
 
// list.innerHTML='';


// }

// function dele(e){

// console.log(e.parentNode)
// e.parentNode.remove();
// }


// function ed(e){


// var val=e.parentNode.firstChild.nodeValue;
// var edi=prompt("enter the change",val);
// e.parentNode.firstChild.nodeValue=edi;



// }