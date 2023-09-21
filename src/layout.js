import './style.css';

export function createLayout(){
    const main = document.createElement("div");
    main.setAttribute("id","main");
    document.body.appendChild(main);
    const header = document.createElement("div");
    header.setAttribute("id","header");
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id","sidebar-container");
    const content = document.createElement("div");
    content.setAttribute("id","content-container");
    main.appendChild(header);
    main.appendChild(sidebar);
    main.appendChild(content);
}

export function createSidebar(){
    const sidebarContainer = document.getElementById("sidebar-container");
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id","sidebar");
    const sidebarMenu1 = document.createElement("div");
    sidebarMenu1.setAttribute("id","sidebarMenu1");
    const inboxLink = document.createElement("a");
    const inboxLinkText = document.createTextNode("Inbox");
    inboxLink.appendChild(inboxLinkText);
    const todayLink = document.createElement("a");
    const todayLinkText = document.createTextNode("Today");
    todayLink.appendChild(todayLinkText);
    const upcomingLink = document.createElement("a");
    const upcomingLinkText = document.createTextNode("Upcoming");
    upcomingLink.appendChild(upcomingLinkText);
    sidebarMenu1.appendChild(inboxLink);
    sidebarMenu1.appendChild(todayLink);
    sidebarMenu1.appendChild(upcomingLink);
    sidebarContainer.appendChild(sidebar);
    sidebar.appendChild(sidebarMenu1);
    const projects = document.createTextNode("Projects");
    sidebar.appendChild(projects);

}

export function createContentLayout(){
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    const headerContainer = document.createElement("div")
    headerContainer.setAttribute("id", "header-container");
    const projectsContainer = document.createElement("div");
    projectsContainer.setAttribute("id", "projects-container");
    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("addtask-container");
    const addTaskContainerText = document.createTextNode("+ Add Task");
    addTaskContainer.appendChild(addTaskContainerText);


    const contentContainer = document.getElementById("content-container");
    contentContainer.appendChild(content);
    content.appendChild(headerContainer);
    content.appendChild(projectsContainer);
    content.appendChild(addTaskContainer);

}

export function createInboxLayout (){
    const inboxHeaderText = document.createTextNode("Inbox");
    const inboxHeader = document.createElement("h1");
    inboxHeader.appendChild(inboxHeaderText);
    const contentHeader = document.getElementById("header-container");
    contentHeader.appendChild(inboxHeader);

}

/*export const createProjectLayout = (project) => {
    const projectTitle = document.createTextNode(project.name);
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    const header = document.createElement("div");
    header.appendChild(projectTitle);
    

}*/



export const createTodoElement = (todo) => {
    const title = document.createTextNode(todo.title);
    const todoTitle = document.createElement("p");
    todoTitle.appendChild(title);
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");
    todoElement.appendChild(todoTitle);
    const projectsContainer = document.getElementById("projects-container")
    projectsContainer.appendChild(todoElement);

    return todoElement
}

