import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        searchInput: 'tech',
        blogData: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        }
    },
})

export const {login, logout, setInput, setBlogData} = userSlice.actions

export const selectUser = state => state.user.user
export const selectSearch = state => state.user.searchInput
export const selectBlogs = state => state.user.blogData

export default userSlice.reducer