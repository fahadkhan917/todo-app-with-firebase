
var list=document.getElementById("list");
function edit(){
var val=document.getElementById("val");
var l=document.createElement('li');
var text=document.createTextNode(val.value);
l.appendChild(text);
list.append(l);

val.value=" ";


var deletebtn=document.createElement('button');
var delbtntxt=document.createTextNode('Delete');


deletebtn.appendChild(delbtntxt);
deletebtn.setAttribute("onclick","dele()");
l.appendChild(deletebtn);






}


function dele(){



}


function edit(){





}