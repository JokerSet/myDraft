import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Post from './Post'
import {getAnswer} from '../../../action/post'

const PostAnswers = ({id}) =>{
	const newAnswer = useSelector(state=>state.post.newAnswer)
	const [posts, setPosts] = useState([])
	const dispatch = useDispatch()
	
	useEffect(()=>{
		getAnswer(id, setPosts)
	}, [newAnswer])
	
	return(
		<div className='answerList'>
		{
			posts.map((p,i)=>(
				<Post key={i} post = {p} flag={true}/>
			))
		}
		</div>
	)
}

export default PostAnswers