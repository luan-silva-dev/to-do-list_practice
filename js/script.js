const setItem = (item)=> localStorage.setItem('tasks',JSON.stringify(item))
const getItem = ()=> JSON.parse(localStorage.getItem('tasks')) ?? []

document.querySelector('#btn-new-task')
.addEventListener('click', ()=>{
    let itemStorage = getItem()
    const valueInput = document.querySelector('#new-task').value
    while(valueInput === ''){
        alert('insira uma tarefa antes de adicionar')
        return
    }
    itemStorage.push({tarefa: valueInput})
    setItem(itemStorage)
})

let tasks = getItem()
for(var i = 0; i < tasks.length; i++){
    let listTasks = document.querySelector('.list-tasks')
    let newLi = document.createElement('li')
    var btnExit = document.createElement('button')

    newLi.classList.add('li-task')
    btnExit.classList.add('btn-exit')

    btnExit.innerText = 'EXIT'
    newLi.innerText = tasks[i].tarefa
    listTasks.appendChild(newLi)
    newLi.appendChild(btnExit)
}

tasks.forEach((obj,index)=> {
    let btnExit = document.querySelectorAll('.btn-exit')[index].
    addEventListener('click', ()=>{
        tasks.splice(index,1)
        setItem(tasks)
    })
})

