function showCompleted(){
    let completed = localStorage.getItem('stickyNotes')
    completed = JSON.parse(completed)
    completed.map((item)=>{
        if(item.completed == true){
        const completedNote = document.createElement('div');
        completedNote.classList.add('sticky-note')
        completedNote.classList.add(item.color)

        const textarea = document.createElement('textarea');
        textarea.classList.add('note-text');
        textarea.value = item.content
        
        completedNote.appendChild(textarea)




        const wall = document.getElementsByClassName("sticky-wall")[0]
        console.log(wall)
        wall.appendChild(completedNote)
    }
    })
}

showCompleted()