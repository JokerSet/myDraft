import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getPost, getFollowerPost} from '../../action/post'

import PostMenu from './PostMenu'
import PostList from './PostList'
import SearchList from './SearchList'

const Main = () =>{
	const dispatch = useDispatch()
	const posts = useSelector(state=>state.post.posts)
	const loader = useSelector(state=>state.app.loader)
	
	useEffect(()=>{
		const url = document.URL.split('/')
		if(url[url.length - 1] == 'follower'){
			dispatch(getFollowerPost())
		}else{
			dispatch(getPost())
		}
	}, [document.URL])
	
	return(
	<div className="main">
		<div className="container main">
			<div className="mainList">
				<PostMenu/>
				<PostList/>
			</div>
			<SearchList/>
		</div>
	</div>
	)
}

export default Main