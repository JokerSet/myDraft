import {Link} from 'react-router-dom'
import {setSelectedUser} from '../../../reducer/userReducer'
import {useDispatch} from 'react-redux'
import {getProfile} from '../../../action/user'

import {API_URL} from '../../../config'

const ListItem = ({user}) =>{
	const linkUrl = '/profile?idUser=' + user.id
	const avatar = API_URL + 'image/' + user.avatar
	
	const dispatch = useDispatch()
	
	const clickHandler = () =>{
		dispatch(setSelectedUser(user))
	}
	
	return(
		<Link className = 'userListItem' to={linkUrl} onClick={clickHandler}>
			<img className='avatar big' src={avatar}/>
			<div className="postUser">
				{user.nickname + " "}
				<span>{"@"+user.login}</span>
			</div>
		</Link>
	)
}

export default ListItem