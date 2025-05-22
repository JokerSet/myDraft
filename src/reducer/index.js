import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./userReducer.js"
import appReducer from "./appReducer"
import postReducer from './postReducer'

export const store = configureStore({
	reducer: {
		user: userReducer,
		app: appReducer,
		post: postReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})