import { createSlice, current } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state,action) => {
      state.push(action.payload);
    },
    deleteTodo: (state,action) => {
      return state.filter((_,index) => index != action.payload);
    },
    updateTodo: (state,action) => {
        const {index,newTitle,newDescription} = action.payload;
        console.log(current(state));    
        state[index] = {title: newTitle,description: newDescription};
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;