import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDo/slice";

export default configureStore({
    toDo: toDoReducer
});