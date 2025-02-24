import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});
export const { setUser,setLoading } = authSlice.actions;

// Export the reducer as default
export default authSlice.reducer;

export const authSliceReducer = authSlice.reducer;
