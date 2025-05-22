import axios from 'axios'
import { setUser, setUserList, setSelectedUser, setSub, unsetSub } from '../reducer/userReducer'
import {setLoaderProfile} from '../reducer/appReducer'
import { setCookie, getCookie } from './cookieAction'
import { API_URL } from '../config'

export const signUpAction = (login, nickname, password) => {
	if( !login || !password || !nickname || !rePassword){
		console.log('Все поля должны быть заполнены!');
		return;
	}
	
	return async dispatch =>{
		try{
			await axios.post(API_URL+'auth/signup',{
				login:login,
				nickname:nickname,
				password:password
			})
			
			const response = await axios.post(API_URL+'auth/signin',{
				login:login,
				password
			})
			dispatch(setUser(response.data.data))
			setCookie('token', response.data.token, 1)
			
		}catch(e){
			console.log(e)
		}
	}
	
}

export const  signInAction = (login, password)=>{
	if( !login || !password ){
		console.log('Все поля должны быть заполнены!');
		return;
	}
	
	return async dispatch =>{
		try{
			const response = await axios.post(API_URL+'auth/signin',{
				login:login,
				password
			})
			dispatch(setUser(response.data.data))
			setCookie('token', response.data.token, 1)
		}catch(e){
			console.log(e)
		}
	}
	
}

export const authRequest = () =>{
	return async dispatch =>{
		try{
			const response = await axios.get(API_URL+'auth', 
            {headers:{Authorization:('Bearer ' + getCookie('token'))}});
			dispatch(setUser(response.data.data))
			setCookie('token', response.data.token, 1)
		}catch(e){
			setCookie('token', '', 1)
		}
	}
}

export const getUser = () =>{
	return async dispatch =>{
		try{
			const response = await axios.get(API_URL+'users')
			dispatch(setUserList(response.data))
		}catch(e){
			console.log(e)
		}
	}
}

export const getFollower = () =>{
	return async dispatch =>{
		try{
			const response = await axios.get(API_URL+'user/follower', 
            {headers:{Authorization:('Bearer ' + getCookie('token'))}});
			dispatch(setUserList(response.data))
		}catch(e){
			console.log(e)
		}
	}
}

export const getProfile = (idUser) =>{
	return async dispatch=>{
		try{
			dispatch(setLoaderProfile(true))
			const response = await axios.get(API_URL+'profile?idUser=' + idUser, 
            {headers:{Authorization:('Bearer ' + getCookie('token'))}});
			dispatch(setSelectedUser(response.data))
			dispatch(setLoaderProfile(false))
		}catch(e){
			console.log(e)
		}
	}
}

export const updateProfile = async (nickname, bioProfile, birthDay, avatar, headerProfile) =>{
	try{
		const formData = new FormData()
		formData.append('nickname', nickname)
		formData.append('bioProfile', bioProfile)
		formData.append('birthDay', birthDay)
		formData.append('avatar', avatar)
		formData.append('headerProfile', headerProfile)
		
		await axios.post(API_URL+'user/update', formData, {headers:{Authorization:('Bearer ' + getCookie('token'))}})
	}catch(e){
		console.log(e)
	}
}

export const subscribe = (idUser) =>{
	return async dispatch =>{
	try{
		const response = await axios.get(API_URL+'subscribe?idUser='+ idUser, {headers:{Authorization:('Bearer ' + getCookie('token'))}})
		if(response.data == 'unsub'){
			dispatch(unsubSet())
		}else{
			dispatch(setSub())
		}
	}catch(e){
		console.log(e)
	}
	}
}