import title from '../../assets/loginTitle.png'
import { Link } from 'react-router-dom'

const Auth = (authFlag) =>{
	return (
	<div className="auth">
		<div className="container">
			<img src={title} />
			<div className='frontAuth'>
				<span>Немой диалог</span>
					{authFlag?
					<div className="formAuth">
						<span>Авторизация</span>
						<div className="formItems">
						<div className="formItem">
							<span>Логин: </span>
							<input id="login" className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Пароль: </span>
							<input id="password" className="inputArea"/>
						</div>
						<div className="formInteractive">
							<span id="changeLink"> <Link to='/signup'>Создать аккаунт</Link></span> 
						</div>
						<div className="formItem">
							<button className="formBtn" id="signInBtn">Войти</button>
						</div>
						</div>
					</div>
					:
					<div className="formAuth">
						<span>Регистрация</span>
						<div className="formItems">
						<div className="formItem">
							<span>Логин: </span>
							<input id="login" className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Ник: </span>
							<input id="nickname" className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Пароль: </span>
							<input id="password" className="inputArea"/>
						</div>
						<div className="formItem">
							<span>Повтор пароля: </span>
							<input id="rePassword" className="inputArea"/>
						</div>
						<div className="formInteractive">
							<span id="changeLink"> <Link to='/signin'>Войти если вы зарегистрированны </Link></span> 
						</div>
						<div className="formItem">
							<button id="signUpBtn" className="formBtn">Регистрация</button>
						</div>
						</div>
					</div>
					}
			</div>
		</div>
	</div>
	)
}

export default Auth