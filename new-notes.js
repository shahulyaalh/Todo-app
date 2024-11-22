
  // Select the sticky wall container and the add note button
  const stickyWall = document.querySelector('.sticky-wall');
  const addNoteButton = document.querySelector('.add-note');

  // Array of color classes for sticky notes
  const colors = ['yellow', 'blue', 'pink', 'orange', 'gray', 'lavender'];

  // Function to load saved notes from local storage
  function loadNotes() {
    console.log('loading notess')
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    savedNotes.forEach(note => {
      createStickyNote(note.content, note.color,note.completed);

    // okButton.setAttribute('id',id)
    // okButton.classList.add('done-button')
    });
  }

  // Function to save notes to local storage
  function saveNotes(id,completed) {
    console.log(id);

// Retrieve all existing notes from localStorage
// let allNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];

// Get all current notes from the DOM
let notes = Array.from(stickyWall.querySelectorAll('.sticky-note:not(.add-note)')).map(note => {
  // Find if the note already has an ID
  let noteId = note.id; // Assuming IDs are stored in a `data-id` attribute
  let completedNotes = note.completed

  // If no ID exists, it's a new note, so generate a unique one
  if (!noteId) {
    note.id = id; // Assign it to the DOM element for persistence
  }

  if(!completedNotes){
    note.completed = completed
  }

  return {
    content: note.querySelector('.note-text').value,
    color: Array.from(note.classList).find(c => colors.includes(c)),
    completed: completedNotes,
    id: noteId,
  };
});

// Update localStorage
localStorage.setItem('stickyNotes', JSON.stringify(notes));

    /**
     * get all elements
     * last one using negative indexing
     * push into the notes which 
     * put into the localstorage
     */

    // let allNotes = localStorage.getItem('stickyNotes')
    // allNotes = JSON.parse(allNotes)

    // let notes = Array.from(stickyWall.querySelectorAll('.sticky-note:not(.add-note)')).map(note => {
    //   return {
    //     content: note.querySelector('.note-text').value,
    //     color: Array.from(note.classList).find(c => colors.includes(c)),
    //     completed : false,
    //     id : id
    //   };
    // });


    // // localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }

  function markCompleted(id){
    
    let notes = localStorage.getItem('stickyNotes')
    notes = JSON.parse(notes)
     notes.map((note)=>{
      if(note.id == id){
        note.completed = true
        // note.completed = true
      }
    })
    localStorage.setItem('stickyNotes',JSON.stringify(notes))
  }

  // Function to create a new sticky note
  function createStickyNote(content = "", color = null , completed) {
    console.log('page reached')
    // Create the sticky note container
    const id = (new Date()).getTime()
    console.log(id)

    const newNote = document.createElement('div');
    newNote.classList.add('sticky-note');

    // const buttonDiv = document.createElement('div')
    // buttonDiv.classList.add('button-div')
    // done button

    const okButton = document.createElement('button')
    okButton.appendChild(document.createTextNode("Done"))

    okButton.setAttribute('id',id)
    okButton.classList.add('done-button')

    okButton.addEventListener('click',function(){
      saveNotes(id)
    })  

    newNote.setAttribute('id',id)

    // completed button 

    const completedButton = document.createElement('button')
    completedButton.appendChild(document.createTextNode("✔"))

    completedButton.setAttribute('id',id)

    completedButton.classList.add('completed-button')


    completedButton.addEventListener('click',function(){
      // completed function need to write
      // console.log(id)
      markCompleted(id)
      // saveNotes(id)
    })

    // div - id

    newNote.setAttribute('id',id)

    // Assign a random color if no color is specified
    const noteColor = color || colors[Math.floor(Math.random() * colors.length)];
    newNote.classList.add(noteColor);

    // Create a textarea for writing notes
    const textarea = document.createElement('textarea');
    textarea.classList.add('note-text');
    textarea.placeholder = "Write your note...";
    textarea.value = content; // Load saved content if available

    // Event listener to save notes on change
    textarea.addEventListener('input', saveNotes(id));

    // Append the textarea to the sticky note

    newNote.appendChild(completedButton)
    newNote.appendChild(textarea);
    newNote.appendChild(okButton)
    // newNote.appendChild(buttonDiv)

    // buttonDiv.appendChild(completedButton)
    // buttonDiv.appendChild(okButton)
    
    // Insert the new note before the add button
    stickyWall.insertBefore(newNote, addNoteButton);
    saveNotes(id,completed);

  }

  // Event listener for the add note button
  addNoteButton.addEventListener('click', () => {
    createStickyNote();
     // Save immediately after creating a new note
  });

  // Load notes when the page loads
  window.addEventListener('load', loadNotes);

//   document.querySelector('.completed-button').addEventListener('click', function() {
//     this.classList.toggle('checked');
// });
