function addData()
{ //profiledata
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var email=document.querySelector("#email").value;
var roll=document.querySelector("#roll").value;
var mobile=document.querySelector("#mobile").value;
//graduation details
var college1=document.querySelector("#college1").value;
var degree1=document.querySelector("#degree1").value;
var branch1=document.querySelector("#branch1").value;
var marks1=document.querySelector("#marks1").value;
//intermediate DETAILS
var college2=document.querySelector("#college2").value;
var degree2=document.querySelector("#degree2").value;
var branch2=document.querySelector("#branch2").value;
var marks2=document.querySelector("#marks2").value;
//ssc details
var college3=document.querySelector("#school").value;
var board=document.querySelector("#board").value;
var marks3=document.querySelector("#marks3").value;
//TECHNICALSKILLS
var skills=document.querySelector("#skills").value;

//indexedDB creation
var storeDB;
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
  console.log("object store is not created",+error);
  }
  open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
 storeDB=transaction.objectStore("Formdata");
storeDB.put({
  career:career,
  name:name,
  email:email,
  roll:roll,
  mobile:mobile,
  education:[{
    college:college1,
    degree:degree1,
    branch:branch1,
    marks:marks1
  },
  {college:college2,
  degree:degree2,
  branch:branch2,
  marks:marks2
},
{
  college:college3,
  degree:board,
  branch:"",
  marks:marks3
}
],
skills:skills
});
window.open("index.html");
  }
}
