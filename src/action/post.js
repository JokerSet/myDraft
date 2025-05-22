import axios from 'axios'
import {getCookie} from './cookieAction'
import {setPost, setAnswer, pushPost, setLikePost, unsetLikePost} from '../reducer/postReducer'
import {setLoaderPost} from '../reducer/appReducer'
import {API_URL} from '../config'

export const sendPost = (text, image) =>{
	return async dispatch =>{
		try{
			if(image){
				const formData = new FormData()
				formData.append('file', image)
				formData.append('text', text)
				const response = await axios.post(API_URL+'post/create', formData, {headers:{Authorization:('Bearer ' + getCookie('token'))}})
				dispatch(pushPost(response.data))
			}else{
			const response = await axios.post(API_URL+'post/create',{
				text: text
			}, {headers:{Authorization:('Bearer ' + getCookie('token'))}});
			dispatch(pushPost(response.data))
			}
		}catch(e){
			console.log(e)
		}
	}
}

export const sendPostAnswer = (id, text, image) =>{
	return async dispatch =>{
	try{
		if(image){
			const formData = new FormData()
			formData.append('file', image)
			formData.append('text', text)
			formData.append('answerPost', id)
			const response = await axios.post(API_URL+'post/answer', formData, {headers:{Authorization:('Bearer ' + getCookie('token'))}})
			dispatch(setAnswer(response.data))
		}else{
		const response = await axios.post(API_URL+'post/answer',{
			text: text, answerPost: id
		}, {headers:{Authorization:('Bearer ' + getCookie('token'))}});
		dispatch(setAnswer(response.data))
		}
	}catch(e){
		console.log(e)
	}
	}
}

export const getPost = (idUser) =>{
	if(idUser){
		return async dispatch =>{
			try{
				dispatch(setLoaderPost(true))
				const response = await axios.get(API_URL+'post?idUser=' + idUser)
				dispatch(setPost(response.data))
			}catch(e){
				console.log(e)
			}finally{
				dispatch(setLoaderPost(false))
			}
		}
	}else{
		return async dispatch =>{
			try{
				dispatch(setLoaderPost(true))
				const response = await axios.get(API_URL+'post')
				dispatch(setPost(response.data))
			}catch(e){
				console.log(e)
			}finally{
				dispatch(setLoaderPost(false))
			}
		}
	}
}

export const getFollowerPost = () =>{
	return async dispatch =>{
		try{
			dispatch(setLoaderPost(true))
			const response = await axios.get(API_URL+'post/follower', {headers:{Authorization:('Bearer ' + getCookie('token'))}})
			dispatch(setPost(response.data))
		}catch(e){
			console.log(e)
		}finally{
			dispatch(setLoaderPost(false))
		}
	}
}

export const getAnswer = async (idPost, setPosts) =>{
	if(idPost){
		try{
			const response = await axios.get(API_URL+'post/answer?idPost=' + idPost)
			setPosts(response.data)
		}catch(e){
			console.log(e)
		}
	}
}

export const repostPost = (idPost) =>{
	return async dispatch =>{
	if(idPost){
		try{
			const response = await axios.get(API_URL+'post/repost?idPost=' + idPost, {headers:{Authorization:('Bearer ' + getCookie('token'))}});
			dispatch(pushPost(response.data))
		}catch(e){
			console.log(e)
		}
	}
	}
}

export const likePost = (idPost) =>{
	return async dispatch =>{
		if(idPost){
			try{
				const response = await axios.get(API_URL+`post/like?idPost=` + idPost, 
				{headers:{Authorization:('Bearer ' + getCookie('token'))}})
				if(response.data.message == 'dis'){
					dispatch(unsetLikePost(idPost))
				}else{
					dispatch(setLikePost(idPost))
				}
			}catch(e){
				console.log(e)
			}
		}
	}
}