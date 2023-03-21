const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main')

addBtn.addEventListener('click' , ()=>{
 addNote()
})
const saveNote =()=>{
    const notes =document.querySelectorAll('.note textarea')
    const data = []
    notes.forEach((note)=>{
        data.push(note.value)
    })
    console.log(data)
    localStorage.setItem("notes" , JSON.stringify(data))
}
window.onload = ()=>{
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    lsnotes.forEach((lsnotes)=>{
       addNote(lsnotes)

    })
}


const addNote = (text = "")=>{
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="tool">
    <i class=" trash fa-solid fa-trash"></i>
    <i class=" save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea placeholder="Enter Something">${text}</textarea>`
    main.appendChild(note)
    saveNote()
    note.querySelector('.trash').addEventListener("click" , ()=>{
        note.remove()
        saveNote()
    })
    note.querySelector('.save').addEventListener("click" , ()=>{
        saveNote(note)
    })
}