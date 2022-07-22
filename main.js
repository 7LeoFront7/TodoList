let todos = [];
let todoNode = document.querySelector('.js-todo')
let btnNode = document.querySelector('.js-btn')
let inputNode = document.querySelector('.js-input')

btnNode.addEventListener('click', () =>{
    
    let text = inputNode.value;
    inputNode.value ='';

    addTodo(text)
    render()
})

todoNode.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON'){
        return
    }

    let id = event.target.dataset.id;

    deleteTodo(id)
    render()
})

function addTodo(text){
    
    const todo = {
        text,
        done:false,
        id:`${Math.random()}`
    }

    todos.push(todo)
}

function deleteTodo(id){
    
    todos.forEach(todo => {
        if(todo.id === id){
            todo.done = true;
        }
    })
}

function render(){

    

    let html = '';

    todos.forEach(todo =>{

    if(todo.done){
        return
    }    

    html += `<div class="new-todo">${todo.text}
    <button class="new-btn-com" data-id="${todo.id}">Сделано</button>
    </div>`
    })

    todoNode.innerHTML = html
}

