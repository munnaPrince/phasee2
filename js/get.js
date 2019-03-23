var request;
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
// if(!idb in window){
  // alert("browser is not supporting");
// }
var open=idb.open("StoreData",1);
console.log("indexedDb is created");

open.onupgradeneeded=function(event){
var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error) {
  console.log("object store is not created ",+error);
  }
  open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
var  storeDB=transaction.objectStore("Formdata");
 var finalData=storeDB.getAll();
 finalData.onsuccess=function(event){
console.log(event.target.result);
display(event.target.result);
 }
}
function display(data)
{
  var main=document.querySelector(".parent");
  for (var i = 0; i < data.length; i++) {
  var child=document.createElement("div");
  child.classList.add("child");
  var image=document.createElement("img");
  image.src="images/img2.png";
  image.alt=data[i].name;
  var name=document.createElement("h2");
  name.textContent=data[i].name;

  var roll=document.createElement("p");
  roll.textContent=data[i].roll;
  var email=document.createElement("h3");
  email.textContent=data[i].email;
  var link=document.createElement("a");
  link.href="resume.html?id="+data[i].id;
  link.textContent="view Profile";

  child.append(image);
  child.append(name);
  child.append(roll);
  child.append(email);
  child.append(link);
  main.append(child);


}
}
