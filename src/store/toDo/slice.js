import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxTasks: 20,
  showCompletedTasks: false,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy air conditioning", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true }
  ],
};

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (store, action) => {
      const { task } = action.payload;
      if (store.tasks.length < store.maxTasks) {
        store.tasks.push({
          id: store.tasks.length + 1,
          task,
          completed: false
        });
      }
      else {
        console.log("Max tasks has already been reached. Complete some tasks to add more.")
      }
    },
    markToDoCompleted: (store, action) => {
      const id = action.payload.id;
      store.tasks.forEach(task => {
        if (task.id === id) {
          task.completed = true;
        }
      });
    },
    deleteToDo: (store, action) => {
      const id = action.payload.id;
      const index = store.tasks.findIndex(task => task.id === id);
      store.tasks = store.tasks.splice(index, 1);
    },
    toggleShowCompletedToDo: (store, action) => {
      store.showCompletedTasks = !store.showCompletedTasks;
    },
    setMaxTasks: (store, action) => {
      const max = action.payload.maxTasks;
      if (max > 0 && max < 100) {
        store.maxTasks = max;
      }
      else {
        console.log("Max tasks must be between 1 and 99");
      }
    }
  }
});

export const { addToDo, markToDoCompleted, deleteToDo, toggleShowCompletedToDo, setMaxTasks } = toDoSlice.actions;

export default toDoSlice.reducer;
