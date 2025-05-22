import { useState } from 'react'

import title from '../../assets/loginTitle.png'
import { Link } from 'react-router-dom'

import {signInAction} from '../../action/user'

import { useDispatch } from "react-redux"

const Signin = () =>{
	
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	
	const dispatch = useDispatch()
	
	const handlerSignIn = () =>{
		dispatch(signInAction(login, password))
	}
	
	return (
	<div className="auth">
		<div className="container">
			<img src={title} />
			<div className='frontAuth'>
				<span>Немой диалог</span>
					<div className="formAuth">
						<span>Авторизация</span>
						<div className="formItems">
						<div className="formItem">
							<span>Логин: </span>
							<input id="login" value={login} onChange={()=>{setLogin(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Пароль: </span>
							<input id="password" value={password} onChange={()=>{setPassword(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formInteractive">
							<span id="changeLink"> <Link to='/signup'>Создать аккаунт</Link></span> 
						</div>
						<div className="formItem">
							<button className="formBtn" id="signInBtn" onClick={handlerSignIn}>Войти</button>
						</div>
						</div>
					</div>
			</div>
		</div>
	</div>
	)
}

export default Signin