import {useDispatch} from 'react-redux'
import {setPopUpDisplay} from '../../../reducer/appReducer'
import {setCurrentPost} from '../../../reducer/postReducer'
import {useRef} from 'react'
import {repostPost, likePost} from '../../../action/post'

const PostAction = ({flag, setFlag, countLike, countAnswer, id}) =>{
	const dispatch = useDispatch()
	const answer = useRef(null)
	
	const answerHandler = () =>{
		dispatch(setPopUpDisplay())
		dispatch(setCurrentPost(id))
	}
	
	const answerHandlerPost = () =>{
		if(flag){
			setFlag(false)
			answer.current.textContent=`Коментариев к посту ${countAnswer}`
		}else{
			setFlag(true)
			answer.current.textContent='Скрыть коментарии'
		}
	}
	
	const repostHandler = () =>{
		dispatch(repostPost(id))
	}
	
	const likeHandler = () =>{
		dispatch(likePost(id))
	}
	
	return(
	<div className='postActionBtn'>
		<ul>
			<li id='answerBtn' onClick={answerHandler}>
				<svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="white" fillRule="evenodd" d="M19,2 C20.5949286,2 21.9034643,3.25157398 21.9948968,4.82401157 L22,5 L22,15 C22,16.5949286 20.748426,17.9034643 19.1759884,17.9948968 L19,18 L15.5,18 L12.8,21.6 C12.611,21.852 12.315,22 12,22 C11.724375,22 11.4632969,21.8866875 11.2757187,21.6895391 L11.2,21.6 L8.5,18 L5,18 C3.40507143,18 2.09653571,16.748426 2.00510323,15.1759884 L2,15 L2,5 C2,3.40507143 3.25157398,2.09653571 4.82401157,2.00510323 L5,2 L19,2 Z M19,4 L5,4 C4.48835714,4 4.06466327,4.38714796 4.00674599,4.88361625 L4,5 L4,15 C4,15.5116429 4.38714796,15.9353367 4.88361625,15.993254 L5,16 L9,16 C9.275625,16 9.53670313,16.1133125 9.72428125,16.3104609 L9.8,16.4 L12,19.333 L14.2,16.4 C14.365375,16.1795 14.6126719,16.038625 14.8829375,16.0068516 L15,16 L19,16 C19.5116429,16 19.9353367,15.612852 19.993254,15.1163837 L20,15 L20,5 C20,4.48835714 19.612852,4.06466327 19.1163837,4.00674599 L19,4 Z M12,6 C12.5125714,6 12.9354694,6.38628571 12.9932682,6.88343149 L13,7 L13,9 L15,9 C15.5125714,9 15.9354694,9.38628571 15.9932682,9.88343149 L16,10 C16,10.5125714 15.6137143,10.9354694 15.1165685,10.9932682 L15,11 L13,11 L13,13 C13,13.5125714 12.6137143,13.9354694 12.1165685,13.9932682 L12,14 C11.4874286,14 11.0645306,13.6137143 11.0067318,13.1165685 L11,13 L11,11 L9,11 C8.48742857,11 8.06453061,10.6137143 8.00673178,10.1165685 L8,10 C8,9.48742857 8.38628571,9.06453061 8.88343149,9.00673178 L9,9 L11,9 L11,7 C11,6.48742857 11.3862857,6.06453061 11.8834315,6.00673178 L12,6 Z"/>
</svg>
			</li>
			<li id="repBtn" onClick={repostHandler}>
				<svg fill="#fff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z"/></svg>
			</li>
			<li id="likeBtn" onClick={likeHandler}>
					<svg width="20px" height="20px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
<path  d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
				<span>{countLike}</span>
			</li>
		</ul>
		<span ref={answer} className='answerAction' onClick={answerHandlerPost}>Коментариев к посту {countAnswer}</span>
	</div>
	)
}

export default PostAction