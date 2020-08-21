
var list=document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){
    var l=document.createElement('li');
    var text=document.createTextNode(data.val().value);
    l.appendChild(text);
    list.append(l);
    
    val.value=" ";
    
    
    //deletebtn
    var deletebtn=document.createElement('button');
    var delbtntxt=document.createTextNode('Delete');
    
    
    deletebtn.appendChild(delbtntxt);
    deletebtn.setAttribute('id',data.val().key)
    deletebtn.setAttribute("onclick","dele(this)");
    l.appendChild(deletebtn);
    
    
    //editbtn
    var editbtn=document.createElement('button');
    var editbtntxt=document.createTextNode("Edit");
    editbtn.appendChild(editbtntxt);
    editbtn.setAttribute("id",data.val().key)
    editbtn.setAttribute("onclick","ed(this)");
    l.appendChild(editbtn);
    


})
function edit(){
var val=document.getElementById("val");
var database=firebase.database().ref('todos');
var key=database.push().key;
var todo={

value:val.value,
key:key

}
database.child(key).set(todo);
val.value=" ";







}
console.log(firebase);

function del(){
 
    firebase.database().ref('todos').remove()
list.innerHTML='';


}

function dele(e){

 firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove();
}


function ed(e){


var val=e.parentNode.firstChild.nodeValue;
var edi=prompt("enter the change",val);
var edittodo={
value:edi,
key:e.id


}
firebase.database().ref('todos').child(e.id).set(edittodo);
e.parentNode.firstChild.nodeValue=edi;



}