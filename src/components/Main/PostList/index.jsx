import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'

import Post from './Post'
import PopUpSend from './PopUpSend'

const PostList = () =>{
	const loader = useSelector(state=>state.app.loaderPost)
	const posts = useSelector(state=>state.post.posts) 


	return(
		<div className="postList">
			{
				loader ?
				"загрузка"
				:
                posts.map((p, i) => (
                    <Post key={p.id} post={p} />
                ))
            }
			<PopUpSend />
		</div>
	)
}

export default PostList