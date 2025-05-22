import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { logout } from '../../reducer/userReducer'
import { setDropDown } from '../../reducer/appReducer'
import {API_URL} from '../../config'

const Header = ()=>{
	const isAuth = useSelector(state=>state.user.isAuth)
	const currentUser = useSelector(state=>state.user.currentUser)
	const dropDown = useSelector(state => state.app.dropDown)
	
	const dispatch = useDispatch()
	
	const logOutHandler = () =>{
		dispatch(logout())
		dispatch(setDropDown())
	}
	
	const handlerDropDown = () =>{
		dispatch(setDropDown())
	}
	
	useEffect(()=>{
		console.log('update')
	}, [currentUser])
	
	return(
		<header>
			<div className="container header">
				<div className="logoHeader">
					nS
				</div>
				
				<nav className="navHeader">
					<ul>
						<li>
							<Link to='/'>Домашняя</Link>
						</li>
						<li>
							<Link to='/community'>Сообщества</Link>
						</li>
						<li>
							<Link to='/follower'>Подписки</Link>
						</li>
					</ul>
				</nav>
				
				{
					isAuth ?
					<button className="userMenu" onClick={handlerDropDown}>
						<img className="avatar" src={API_URL + 'image/' + currentUser.avatar} />
						<span className="userName">
							{currentUser.nickname}
						</span>
						<span clss="dropDownArrow">▼</span>
					</button>
					:
					<button className="userMenu" >
						<div className="avatarSceleton"></div>
						<span className="userNameSceleton">
						</span>
						<span className="dropDownArrow">▼</span>
					</button>
				}
				
				<div className="userMenu-dropDown" style={{display:dropDown}}>
					<ul className="dropDownList">
						<li className="dropDownItem">
							<Link to={'/profile?idUser=' + currentUser?.id}>Профиль</Link>
						</li>
						<li className='separator'></li>
						<li className="dropDownItem">
							<div className="btnLogout" onClick={logOutHandler}>
								Выйти
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
	
}

export default Header