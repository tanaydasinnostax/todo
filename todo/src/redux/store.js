import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
})