import {createTodo, markComplete, changePriority, checkToday} from './createTodo.js';
import {createProject, addProjectToAll, addTodoToProject} from './createProject.js';
import * as layout from './layout.js';
layout.createLayout();
layout.createSidebar();
//layout.createContentLayout();
layout.createInboxLayout();
const defaultProject = createProject("default");
const date = new Date();
const Todo = createTodo("Laundry", "test2", date, "test");
/*const allProjects = [];
addTodoToProject(defaultProject, Todo);
addProjectToAll(allProjects, defaultProject);*/
const Todo2 = createTodo("Read book", "test2", date, "test");
layout.createTodoElement(Todo);
layout.createTodoElement(Todo2);

