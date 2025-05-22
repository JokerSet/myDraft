import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {Routes, Route} from 'react-router-dom'

import {authRequest} from './action/user'

import Header from './components/Header'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Main from './components/Main'
import Profile from './components/Profile'
import ProfileSetting from './components/Profile/ProfileSetting'
import Folower from './components/Follower'

function App() {
	const isAuth = useSelector(state=>state.user.isAuth)
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(authRequest())
	}, [])
	
	return (
		<>
		<Header/>
		{!isAuth
		?
		<Routes>
			<Route path="/signin" element={<Signin/>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="*" element={<Signin/>}/>
		</Routes>
		:
		<Routes>
			<Route path='profile' element={<Profile/>}/>
			<Route path='/follower' element={<Main/>}/>
			<Route path='/profile/setting' element={<ProfileSetting/>}/>
			<Route path='/' element={<Main/>}/>
			<Route path="*" element={<Main/>}/>
		</Routes>
		}
		</>
	)
}

export default App
