const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notes-list");

//event Listener
addBtn.addEventListener("click", AddBtnAction);

notesList.addEventListener("dblclick", deleteNote);

//functions
function deleteNote(event) {
  const c = event.target.parentElement;
  if (c.classList[0] == "note") {
    c.remove();
  }
}

function AddBtnAction() {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  const noteTitle = document.createElement("textarea");
  const noteDesp = document.createElement("textarea");
  noteTitle.classList.add("notes-title");
  noteTitle.placeholder = "This is title...";
  noteDesp.classList.add("notes-desp");
  noteDesp.placeholder = "Your content goes here...";
  noteDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteDesp);
  notesList.insertBefore(noteDiv, addBtn);
}
