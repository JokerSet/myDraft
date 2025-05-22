import { createSlice } from '@reduxjs/toolkit'
import { setCookie } from "../action/cookieAction"

const initialState = {
	currentUser:{},
	isAuth: false,
	userList: [],
	selectedUser: {}
}

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers:{
		setUser: (state, action)=>{
			state.currentUser = action.payload
			state.isAuth = true
		},
		logout: (state) =>{
			setCookie('token', '', 1)
			state.currentUser = {}
			state.isAuth = false
		},
		setUserList: (state, action) =>{
			state.userList = action.payload
		},
		setSelectedUser: (state, action) =>{
			state.selectedUser = action.payload
		},
		setSub: (state, action) =>{
			state.selectedUser = {...state.selectedUser, sub: true}
		},
		unsetSub: (state, action) =>{
			state.selectedUser = {...state.selectedUser, sub: false}
		},
		updateAvatar: (state, action) =>{
			state.currentUser = {...state.currentUser, avatar: action.payload}
		}
	}
})

export const {setUser, logout, setUserList, setSelectedUser, setSub, unsetSub, updateAvatar} = userReducer.actions

export default userReducer.reducer