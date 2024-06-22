import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async(obj, thunkAPI)=>{

        console.log(thunkAPI);
        thunkAPI.dispatch(testAsyncDispatch());
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${obj.id}`);
            return res.data;
        } catch(error) {
            return error;
        }
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: []
    },
    reducers: {
        setType:(state, action)=>{
            state.type = action.payload || 'Guest'
        },
        testAsyncDispatch:(state)=>{
            state.test = true;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            console.log('pending');
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            console.log('fulfilled');
            state.users = action.payload;
        })
        .addCase(fetchUser.rejected,(state)=>{
            console.log('rejected');
        })
    }
});

export const {setType, testAsyncDispatch} = usersSlice.actions;
export default usersSlice.reducer;