let todos = [];
let todosTrash =[];
let todoNode = document.querySelector('.js-todo')
let btnNode = document.querySelector('.js-btn')
let inputNode = document.querySelector('.js-input')
let trashNode = document.querySelector('.js-trash')
let btnDel = document.querySelector('.delete-btn-com')







function addTodo(text){
    
    const todo = {
        text,
        done:false,
        id:`${Math.random()}`,
        idk:`${Math.random()}`,
        delete:false
    }

    todos.push(todo)
}

function comfirmTodo(id){
    
    todos.forEach(todo => {

        if(todo.id === id){
            todo.done = true;
            todosTrash.push(todo)
        }
    })
}

function deleteTodo(idk){
    

    todos.forEach(todo => {
        if(todo.idk === idk){
            todo.delete = true;
        }
    })

    todosTrash.forEach(todo => {
        if(todo.idk === idk){
            todo.delete = true;
        }
    })
}








function render(){

    
 
    let html = '';
    let html2 = '';

    todos.forEach(todo =>{

    if(todo.done){
        return
    }    

    if(todo.delete){
        return
    }   



    html += `<div class="new-todo">
    <div class="todo-text">${todo.text}</div>
    <div class="btn-comfire">
        <button class="new-btn-com" data-id="${todo.id}">Сделано</button>
        <button class="delete-btn-com" data-id="${todo.idk}">Удалить</button>
    </div>
</div>`
    })

    todoNode.innerHTML = html

    todosTrash.forEach(todo => {

        if(todo.delete){
            return
        }   

        html2 += `<div class="trash-todo">
        <div class="new-trash-todo">
            <div class="div-com-text">
             <h2>${todo.text}</h2>
        </div>
       <div>
        <button class="delete-btn-com" data-id="${todo.idk}">Удалить</button>
       </div>
        </div>
        </div>`
    })
    
    trashNode.innerHTML = html2
}

btnNode.addEventListener('click', () =>{

    if (inputNode.value == ''){
        alert('Вы не ввели задачу')
        return
    }
    
    let text = inputNode.value;
    inputNode.value ='';

    addTodo(text)
    render()
})


todoNode.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON'){
        return
    }
 

    let idk = event.target.dataset.id;
    

    if(event.target.classList.value === 'delete-btn-com'){
     
        deleteTodo(idk)
        render()
    }
})





///////////////////////$Recycle.Bin


trashNode.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON'){
        return
    }
 

    let idk = event.target.dataset.id;
    

    if(event.target.classList.value === 'delete-btn-com'){
        
        deleteTodo(idk)
        render()
    }
})










todoNode.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON'){
        return
    }

    if (event.target.classList.value === 'new-btn-com'){
        let id = event.target.dataset.id;

   
 comfirmTodo(id)
    render()
    }

    
    }
)

