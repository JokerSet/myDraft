import PostMenu from '../PostMenu'
import {useSelector, useDispatch} from 'react-redux'
import {setPopUpDisplay} from '../../../reducer/appReducer'
import {setCurrentPost} from '../../../reducer/postReducer'

const PopUpSend = () =>{
	const dispatch = useDispatch()
	const popUpDisplay = useSelector(state=>state.app.popUpDisplay)
	
	const windowHandler = () =>{
		dispatch(setPopUpDisplay())
		dispatch(setCurrentPost(null))
	}
	
	return(
	<div className='popUpWindow' style={{display: popUpDisplay}} onClick={windowHandler}>
		<div className='popUpAction' onClick={event=>event.stopPropagation()}>
			<span>Ответ на пост</span>
			<PostMenu />
		</div>
	</div>
	)
}

export default PopUpSend