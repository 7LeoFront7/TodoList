let todos = [];
let todoNode = document.querySelector('.js-todo')
let inputNode = document.querySelector('.js-input')
let btnNode = document.querySelector('.js-btn')


function addTodo(text){

    const todo = {
        text,
        done:false,
        id:`${Math.random()}`
    }

    todos.push(todo)
}

btnNode.addEventListener('click', function(){
    addTodo(inputNode.value);
    inputNode.value = '';
    render()
})

todoNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON'){
        return
    }

    let id = event.target.dataset.id;

    deleteTodo(id);
    render()
})




function deleteTodo(id){

todos.forEach(todo => {
    if (todo.id === id){
        todo.done = true;
    }
})
}

function render(){
    html = '';

    todos.forEach(todo =>{
        if (todo.done == true){
            return
        }

        
        html += `<div>${todo.text}
                        <button data-id="${todo.id}">Сделано</button>
                        </div>`

    })
    todoNode.innerHTML = html
}
