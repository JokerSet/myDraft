import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {getPost} from '../../action/post'

import SearchList from '../Main/SearchList'
import ProfileMenu from './ProfileMenu'
import PostList from '../Main/PostList'

const Profile = () =>{
	const dispatch = useDispatch()
	const selectedUser = useSelector(state=>state.user.selectedUser)
	
	useEffect(()=>{
		dispatch(getPost(selectedUser.id))
	}, [selectedUser])
	
	return(
		<div className='main'>
			<div className='container main'>
				<div className='mainList'>
					<ProfileMenu/>
					<PostList />
				</div>
				<SearchList />
				
			</div>
		</div>
	)
}

export default Profile