import ListItem from './ListItem'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getUser, getFollower} from '../../../action/user'

const SearchList = () =>{
	const userList = useSelector(state=>state.user.userList)
	const dispatch = useDispatch()
	
	useEffect(()=>{
		const url = document.URL.split('/')
		if(url[url.length-1] == 'follower')
		{
			dispatch(getFollower())
		}else{
			dispatch(getUser())
		}
	}, [document.URL])
	
	return(
	<div className="searchList">
		<textarea className='searchInput' placeholder='Поиск'>
		</textarea>
		<div className='userList'>
			<ul>
				{userList.map((ul, i)=>(
					<li key={i}>
						<ListItem user={ul}/>
					</li>
				))}
			</ul>
		</div>
	</div>
	)
}

export default SearchList