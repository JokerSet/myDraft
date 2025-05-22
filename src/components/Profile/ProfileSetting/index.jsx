import {useDispatch, useSelector} from 'react-redux'
import {useState, useRef} from 'react'

import {API_URL} from '../../../config'

import {updateProfile} from '../../../action/user' 

import defaultHeader from '../../../assets/loginTitle.png'

const ProfileSetting = () =>{
	const currentUser = useSelector(state=>state.user.currentUser)
	
	const headerInput = useRef(null)
	const avatarInput = useRef(null)
	const headerImage = useRef(null)
	const avatarImage = useRef(null)
	
	const [nickname, setNickname] = useState('')
	const [bio, setBio] = useState('')
	const [birthDay, setBirthDay] = useState('')
	const [hideHeader, setHeader] = useState('none')
	const [hideAvatar, setAvatar] = useState('none')
	
	const header = currentUser.headerProfile ? API_URL + 'image/' + currentUser.headerProfile : defaultHeader
	const avatar = API_URL + 'image/' + currentUser.avatar
	
	const updateHandler = () =>{
		updateProfile(nickname, bio, birthDay, avatarInput.current.files[0], headerInput.current.files[0])
	}
	
	const headerClickHandler = () =>{
		headerInput.current.click()
	}
	
	const avatarClickHandler = () =>{
		avatarInput.current.click()
	}
	
	const headerChangeHandler = () =>{
		const file = headerInput.current.files[0]
		
		const reader = new FileReader()
		
		reader.onload = function(e) {
			headerImage.current.src = e.target.result
		}
		
		reader.readAsDataURL(file);
	}
	
	const avatarChangeHandler = () =>{
		const file = avatarInput.current.files[0]
		
		const reader = new FileReader()
		
		reader.onload = function(e) {
			avatarImage.current.src = e.target.result
		}
		
		reader.readAsDataURL(file);
	}
	
	return(
		<div className='main'>
			<div className='container main'>
				<div className='mainList'>
					<div className='profile'>
						<div className='profileHeader'>
							<img src={header}
							ref={headerImage}
							onMouseEnter={()=>{setHeader('flex')}}
							/>
							<div className='changeHeader' 
							onMouseLeave={()=>{setHeader('none')}}
							style={{display:hideHeader}}>
								<div className='formBtn' id='headerBtn' onClick={headerClickHandler}>
									Зугрузить изобрадение
								</div>
							</div>
							<input onChange={headerChangeHandler} ref={headerInput} type='file' id="headerInput"/>
						</div>
						<div className="profileTop">
							<img className="avatar profileSize" src={avatar}
							ref={avatarImage}
							onMouseEnter={()=>{setAvatar('block')}}
							/>
							<div className="changeAvatar"
								style={{display:hideAvatar}}
								onMouseLeave={()=>{setAvatar('none')}}>
								<button className='formBtn'
								onClick={avatarClickHandler}>
									Сменить
								</button>
								<input onChange={avatarChangeHandler} ref={avatarInput} id='avatarInput' type='file'/>
							</div>
							<div className="profileAction">
								<button className='formBtn' onClick={updateHandler}>Применить</button>
							</div>
						</div>
						<div className='profileName'>
							<textarea 
							maxLength='25' 
							placeholder={currentUser.nickname}
							className='settingInput' 
							value={nickname}
							onChange={()=>setNickname(event.target.value)}
							></textarea>
							<span>{'@'+currentUser.login}</span>
						</div>
						<div className='inputItem'>
							<textarea id='prodileBioUnput' className='settingInput'
							placeholder={currentUser.bioProfile}
							maxLength='200'
							value={bio}
							onChange={()=>setBio(event.target.value)}
							></textarea>
						</div>
						<div className='profileList'>
							<ul>
								<li>
									<span>Дата рождения: </span>
									<input type='date' id='birthDayInput' value={birthDay} onChange={()=>setBirthDay(event.target.value)}/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileSetting