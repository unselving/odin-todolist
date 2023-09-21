import {isToday} from 'date-fns';

const createTodo = (title, description, dueDate, priority, project) => {
    const completion = false;
    return {title, description, dueDate, priority, completion, project};
}

const markComplete = (todo) => {
    todo.completion = true;
    return todo;
}

const changePriority = (todo, priority) => {
    todo.priority = priority;
    return todo;
}

const checkToday = (todo) => {
    const date = todo.dueDate;
    const check = isToday(date);
    return check;
}



export {createTodo, markComplete, changePriority, checkToday}