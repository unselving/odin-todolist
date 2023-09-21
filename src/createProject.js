

const createProject = (name) => {
    const todoList = [];
    return {name, todoList}
}

const addProjectToAll = (allProjects, project) => {
    allProjects.push(project);
    return allProjects;
}



const addTodoToProject = (project, todo) => {
    const projectList = project.todoList;
    projectList.push(todo);
}

export{createProject, addProjectToAll, addTodoToProject}