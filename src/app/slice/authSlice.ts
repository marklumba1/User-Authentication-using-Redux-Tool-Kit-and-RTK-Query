import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    username: ""
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        useSetUsername: (state, action) => {state.username = action.payload} 
    }
})

export const {useSetUsername} = authSlice.actions
export default authSlice.reducer