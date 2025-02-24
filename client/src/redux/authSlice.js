import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        user:null  // ✅ Add `loading` to the initial state
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload; // ✅ Define `setLoading`
        },
    },
});

// ✅ Export `setLoading` along with `setUser`
export const { setUser, setLoading } = authSlice.actions;

// Export the reducer as default
export default authSlice.reducer;
