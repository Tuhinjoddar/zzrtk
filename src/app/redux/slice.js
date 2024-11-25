import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    userApiData: [],
    users: [],
};


export const fetchApiData = createAsyncThunk(
    "fetchApiUser",
    async () => {
        try {
            console.log("action");

            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            return await response.json(); // Return resolved data

        } catch (error) {
            console.error(error)
        }
    }

)




const slice = createSlice({
    name: "addusers",
    initialState,
    reducers: {
        AddUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload,
            };
            state.users.push(data);


        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);

        },
        setUsers: (state, action) => {
            state.users = action.payload; // Set users from localStorage or external source
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiData.fulfilled, (state, action) => {
            console.log("reducer", action);
            state.loading = false;
            state.userApiData = action.payload;
        })
    }
});

export const { AddUser, removeUser, setUsers } = slice.actions;

// Export the reducer
export default slice.reducer;
