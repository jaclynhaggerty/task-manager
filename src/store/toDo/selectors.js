export const getToDoList = (reduxState) => {
    return reduxState.tasks;
}

export const getMaxTasks = (reduxState) => {
    return reduxState.maxTasks;
}

export const getShowCompletedTasks = (reduxState) => {
    return reduxState.showCompletedTasks;
}