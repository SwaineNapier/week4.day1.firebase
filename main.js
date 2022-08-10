import { ref, push, set, database, onValue } from "./firebase.js";
let contentInput=document.getElementById("contentInput")
let nameInput = document.getElementById("NameInput")
let subjectInput = document.getElementById("subjectInput")
let titleInput = document.getElementById("titleInput")

let submitBtn=document.getElementById("submitBtn")
let itemsContainer=document.getElementById("infoContainer")

let blogsRef=ref(database,"items")

submitBtn.onclick=function(event){
    event.preventDefault()
    let contentInputVal= contentInput.value;
    let nameInputVal = nameInput.value;
    let subjectInputVal=subjectInput.value
    let titleInputVal= titleInput.value
contentInput.value=""
nameInput.value=""
subjectInput=""
titleInput=""

let newBlogRef= push(blogsRef)
set(newBlogRef,[nameInputVal,contentInputVal,subjectInputVal,titleInputVal])
    }

onValue(blogsRef, (snapshot)=>{
    itemsContainer.innerHTML=""
    let data =snapshot.val()
    console.log(data)

    for(const property in data){
        let Newli=document.createElement("li")
        console.log(property)
        Newli.innerHTML=data[property]
        itemsContainer.append(Newli)
    }
})