const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo');
const todoSummary = document.querySelector('#todo-summary');
const todoDate = document.querySelector('#todo-date');
const todoList = document.querySelector('#todo-list');

function getDayName(day) {
    switch (day) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tues';
        case 3:
            return 'Wed';
        case 4:
            return 'Thurs';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        default:
            return 'Invalid'
    }
}

function createList (todoData) {
    const MainDiv = document.createElement('div');
    MainDiv.classList.add("list-group-item", "list-group-item-action", "py-3", "lh-sm", "d-flex", "justify-content-between");

    // content
    const contentDiv = document.createElement('div');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('w-100');
    const titleContent = document.createElement('strong');
    titleContent.textContent = todoData.title;
    titleDiv.append(titleContent)

    const summaryDiv = document.createElement('div');
    summaryDiv.classList.add('small');
    summaryDiv.textContent = todoData.summary;


    contentDiv.append(titleDiv);
    contentDiv.append(summaryDiv);

    // date & actions
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('d-flex', 'flex-column', 'gap-1');
    
    const date = document.createElement('small');
    date.classList.add('mb-2');
    date.textContent = todoData.date;

    
    const editBtn = document.createElement('button');
    editBtn.classList.add('bg-success');
    editBtn.setAttribute('title', 'Edit');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pencil');
    editBtn.append(editIcon)

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('bg-dander');
    deleteBtn.setAttribute('title', 'Delete');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    deleteBtn.append(deleteIcon)

    actionDiv.append(date);
    actionDiv.append(editBtn);
    actionDiv.append(deleteBtn);


    MainDiv.append(contentDiv);
    MainDiv.append(actionDiv);

    return MainDiv;
}

const todosArr = [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e, todoDate.value)
    const submitTodo = {
        title: todoInput.value,
        summary: todoSummary.value,
        date: getDayName(new Date(todoDate.value).getDay())
    }

    todosArr.unshift(submitTodo)

    const item = createList(submitTodo);

    console.log(item)
    todoList.prepend(item);

    todoInput.value = '';
    todoSummary.value = '';
    todoDate.value = '';
})



