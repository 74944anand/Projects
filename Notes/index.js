const notesContainer = document.querySelector(".notes-Container");
const inputBtn = document.querySelector(".input-Btn");

let notes = document.querySelector(".input-Box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function createNotes() {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-Box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "Img/notes.png";
  notesContainer.appendChild(inputBox).appendChild(img);
}
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage()
  }
  else if(e.target.tagName ==="P"){
    notes= documnent.querySelector(".inputBox");
    notes.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
        
    });
  }
});
