const addBtn = document.getElementById('addBtn')
const result = document.getElementById('result')
const input = document.getElementById('input')

addBtn.addEventListener('click', function(){
    if (input.value === '') return
    createDeleteElement(input.value)
    input.value = ''
})

function createDeleteElement (value){
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value

    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.textContent = 'delete'
    li.appendChild(btn)

    btn.addEventListener('click', () =>{
        result.removeChild(li)
    })

    li.addEventListener('click', ()=>{
        li.style.textDecoration = 'line-through'
    })

    result.appendChild(li)
}