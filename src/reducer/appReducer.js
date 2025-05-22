import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	dropDown:'none',
	emojiDropDown: 'none',
	popUpDisplay:'none',
	loaderPost: true,
	loaderProfile: true,
	contentImage: 'none'
}

export const appReducer = createSlice({
	name: 'app',
	initialState,
	reducers:{
		setDropDown: (state)=>{
			if(state.dropDown == 'none')
				state.dropDown = 'block'
			else
				state.dropDown = 'none'
		},
		setPopUpDisplay: (state)=>{
			if(state.popUpDisplay == 'none')
				state.popUpDisplay = 'flex'
			else
				state.popUpDisplay = 'none'
		},
		setEmojiDropDown: (state)=>{
			if(state.emojiDropDown == 'none')
				state.emojiDropDown = 'block'
			else
				state.emojiDropDown = 'none'
		},
		setContentImage: (state)=>{
			if(state.contentImage == 'none')
				state.contentImage = 'block'
			else
				state.contentImage = 'none'
		},
		setLoaderPost: (state, action)=>{
			state.loaderPost = action.payload
		},
		setLoaderProfile: (state, action)=>{
			state.loaderProfile = action.payload
		}
	}
})

export const {setDropDown, setEmojiDropDown, setLoaderPost, setLoaderProfile, setContentImage, setPopUpDisplay} = appReducer.actions

export default appReducer.reducer