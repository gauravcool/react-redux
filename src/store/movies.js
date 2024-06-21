import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [
            {id:1, title: 'Pulp fiction'},
            {id:2, title: 'Rambo'}
        ],
        name: 'akaza',
        date: 'asdas'
    },
    reducers: {
        addMovie: (state, action) => {
            // const newMovie = {id:3, title:'Batman'};
            state.list = [...state.list, action.payload]
        }
    }
})

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;