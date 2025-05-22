import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	posts: [],
	currentPost: null,
	newAnswer: {}
}

export const postReducer = createSlice({
	name: 'post',
	initialState,
	reducers:{
		setPost: (state, action)=>{
			state.posts = [...action.payload]
		},
		setCurrentPost: (state, action) =>{
			state.currentPost = action.payload
		},
		setAnswer: (state, action) =>{
			state.newAnswer = action.payload
		},
		pushPost: (state, action) =>{
			state.posts = [action.payload, ...state.posts]
		},
		setLikePost: (state, action) =>{
			state.posts = [...state.posts.map(
				post =>(
				post.id == action.payload ? {...post, countLike: post.countLike + 1} : {...post}
				)
			)]
		},
		unsetLikePost: (state, action) =>{
			state.posts = [...state.posts.map(
				post =>(
				post.id == action.payload ? {...post, countLike: post.countLike - 1} : {...post}
				)
			)]
		}
	}
})

export const {setPost, setCurrentPost, setAnswer, pushPost, setLikePost, unsetLikePost} = postReducer.actions

export default postReducer.reducer