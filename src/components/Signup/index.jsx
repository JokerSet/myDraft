import { useState } from 'react'

import title from '../../assets/loginTitle.png'
import { Link } from 'react-router-dom'

import {signUpAction} from '../../action/user'

import { useDispatch } from "react-redux"

const Signup = () =>{
	
	const [login, setLogin] = useState('')
	const [nickname, setNickname] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePassword] = useState('')
	
	const dispatch = useDispatch()
	
	const handlerSignUp = () =>{
		if(password == rePassword)
		{
			dispatch(signUpAction(login, nickname, password))
		}
	}
	
	return (
	<div className="auth">
		<div className="container">
			<img src={title} />
			<div className='frontAuth'>
				<span>Немой диалог</span>
					<div className="formAuth">
						<span>Регистрация</span>
						<div className="formItems">
						<div className="formItem">
							<span>Логин: </span>
							<input id="login" value={login} onChange={()=>{setLogin(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Ник: </span>
							<input id="nickname" value={nickname} onChange={()=>{setNickname(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Пароль: </span>
							<input id="password" value={password} onChange={()=>{setPassword(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Повтор пароля: </span>
							<input id="rePassword" value={rePassword} onChange={()=>{setRePassword(event.target.value)}} className="inputArea"/>
						</div>
						<div className="formInteractive">
							<span id="changeLink"> <Link to='/signin'>Войти если вы зарегистрированны </Link></span> 
						</div>
						<div className="formItem">
							<button id="signUpBtn" className="formBtn" onClick={handlerSignUp}>Регистрация</button>
						</div>
						</div>
					</div>
			</div>
		</div>
	</div>
	)
}

export default Signup