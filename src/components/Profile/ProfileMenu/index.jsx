import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {formatDate} from '../../../action/timeFormat'
import {getProfile, subscribe} from '../../../action/user'

import {API_URL} from '../../../config'

import {setLoaderProfile} from '../../../reducer/appReducer'

import {Link} from 'react-router-dom'

import defaultHeader from '../../../assets/loginTitle.png'

const ProfileMenu = () =>{
	const dispatch = useDispatch()
	const loader = useSelector(state=>state.app.loaderProfile)
	
	const currentUser = useSelector(state=>state.user.selectedUser)
	const idUser = useSelector(state=>state.user.currentUser.id)
	
	useEffect(()=>{
		dispatch(getProfile(document.URL.split('=')[1]))
	}, [document.URL])
	
	const header = API_URL + 'image/' + currentUser.headerProfile
	const avatar = API_URL + 'image/' + currentUser.avatar
	
	const subHandler = () =>{
		dispatch(subscribe(currentUser.id))
	}
	
	if(loader){
		return(
			<div className="profile">
				Загрузка
			</div>
		)
	}
	return(
		<div className='profile'>
			<div className='profileHeader'>
				<img src={currentUser.headerProfile ? header : defaultHeader} />
			</div>
			<div className='profileTop'>
				<img className='avatar profileSize' src={avatar}/>
				<div className='profileAction'>
				{
					idUser == currentUser.id ?
					<Link to='setting' className='formBtn'>
						Редактировать
					</Link>
					:
					<button className='formBtn' onClick={subHandler}>
						{currentUser.sub ? "Отписаться" : 'Подписаться'}
					</button>
				}
				</div>
			</div>
			<div className='profileName'>
				{currentUser.nickname}
				<span>{"@"+currentUser.login}</span>
			</div>
			{
				currentUser.bioProfile ? 
				<div className='profileBio'>
					{currentUser.bioProfile}
				</div>
				:
				''
			}
			<div className='profileList'>
				<ul>
					<li className='dateCreate'>
					{"Создан: " + formatDate(currentUser.createdAt)}
					</li>
					{
						currentUser.birthDay?.length > 0 ?
							<li>
							{"День рождения: " + formatDate(currentUser.birthDay)}
							</li>
						:
						''
					}
					<li>
						{"Кол-во подписчиков: " + currentUser.countFolower}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProfileMenu