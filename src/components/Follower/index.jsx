import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPost} from '../../action/post'

import PostMenu from '../Main/PostMenu'
import PostList from '../Main/PostList'
import SearchList from '../Main/SearchList'

const Folower = () =>{
		const dispatch = useDispatch()
		const posts = useSelector(state=>state.post.posts)
		const loader = useSelector(state=>state.app.loader)
	
		useEffect(()=>{
			dispatch(getPost())
		}, [])
	
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

export default Folower