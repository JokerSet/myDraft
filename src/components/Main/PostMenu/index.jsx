import {useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setEmojiDropDown, setContentImage, setPopUpDisplay} from '../../../reducer/appReducer'
import {setCurrentPost} from '../../../reducer/postReducer'

import {sendPost, sendPostAnswer} from '../../../action/post'

const PostMenu = () =>{
	
	const emojis = [
	'😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
    '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
    '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
    '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗',
    '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯',
    '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐',
    '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈',
    '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾',
    '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿',
    '😾', '🙈', '🙉', '🙊', '💌', '💘', '💝', '💖', '💗', '💓' ];
	
	//const emojiDropDown = useSelector(state => state.app.emojiDropDown)
	const [emojiDropDown, setEmojiDropDown] = useState('none')
	const contentImage = useSelector(state=>state.app.contentImage)
	const currentPost = useSelector(state=>state.post.currentPost)
	
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	
	const textareaRef = useRef(null)
	const image = useRef(null)
	const inputText = useRef(null)
	
	const inputHandler = () =>{
		const textarea = textareaRef.current;
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
	}
	
	const emojiHandler = () =>{
		//dispatch(setEmojiDropDown())
		if(emojiDropDown=='none'){
			setEmojiDropDown('block')
		}else{
			setEmojiDropDown('none')
		}
	}
	
	const emojiInputHandler = (e) =>{
		const text = textareaRef.current.value
		textareaRef.current.value = text + e.target.textContent
		const textCombine = text + e.target.textContent
		setText(textCombine)
	}

	const sendHandler = () => {
		if(textareaRef.current.value.length > 0)
		{
			if(currentPost){
				if(image.current.value){
					dispatch(sendPostAnswer(currentPost, text, image.current.files[0]))
					textareaRef.current.value = ''
					inputText.current.click()
					setText('')
				}
				else{
					dispatch(sendPostAnswer(currentPost, text))
					textareaRef.current.value = ''
					setText('')
				}
				dispatch(setPopUpDisplay())
			}
			else{
				if(image.current.value){
					dispatch(sendPost(text, image.current.files[0]))
					textareaRef.current.value = ''
					inputText.current.click()
					setText('')
				}
				else{
					dispatch(sendPost(text))
					textareaRef.current.value = ''
					setText('')
				}
			}
			dispatch(setCurrentPost(null))
		}
	}
	
	const imageHandler = () =>{
		image.current.click()
	}
	
	const inputContent = () =>{
		inputText.current.textContent = '' + image.current.files[0].name
		dispatch(setContentImage())
	}
	
	const clickTextHandler = () =>{
		image.current.value = ''
		inputText.current.textContent = ''
		dispatch(setContentImage())
	}

	useEffect(()=>{
		inputHandler()
	}, [])
	
	return(
		<div className="postMenu">
			<textarea placeholder="Введите текст..." className="postInput" ref={textareaRef} onInput={inputHandler} value={text} onChange={()=>setText(event.target.value)}></textarea>
			<div className='inputText' ref={inputText} style={{display: contentImage}} onClick={clickTextHandler}></div>
			<div className="postAction">
				<div className="postTextAdder">
					<ul>
						<li id="imageBtn" onClick={imageHandler}>
							<svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>file_image [#1687]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -1559.000000)" fill="white">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M176,1409.1052 C176,1408.5532 176.448,1408.1052 177,1408.1052 C177.552,1408.1052 178,1408.5532 178,1409.1052 C178,1409.6572 177.552,1410.1052 177,1410.1052 C176.448,1410.1052 176,1409.6572 176,1409.1052 L176,1409.1052 Z M176.75,1412.0532 L180,1416.0002 L168,1416.0002 L172.518,1410.0532 L175.354,1414.1052 L176.75,1412.0532 Z M182,1417.0002 L166,1417.0002 L166,1401.0002 L176,1401.0002 L176,1407.0002 L182,1407.0002 L182,1417.0002 Z M178,1399.0002 L164,1399.0002 L164,1419.0002 L166,1419.0002 L182,1419.0002 L184,1419.0002 L184,1405.1052 L178,1399.0002 Z" id="file_image-[#1687]">

</path>
            </g>
        </g>
    </g>
</svg>
						</li>
						<li id="emojiBtn" onClick={emojiHandler}>
							<svg width="15px" height="15px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M15.4754 9.51572C15.6898 10.3159 15.4311 11.0805 14.8977 11.2234C14.3642 11.3664 13.7579 10.8336 13.5435 10.0334C13.3291 9.23316 13.5877 8.4686 14.1212 8.32565C14.6547 8.18271 15.2609 8.71552 15.4754 9.51572Z" fill="white"/>
<path d="M9.67994 11.0687C9.89436 11.8689 9.63571 12.6335 9.10225 12.7764C8.56878 12.9194 7.9625 12.3865 7.74809 11.5863C7.53368 10.7861 7.79232 10.0216 8.32579 9.87863C8.85925 9.73569 9.46553 10.2685 9.67994 11.0687Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM17.1789 13.3409C17.467 13.6385 17.4593 14.1133 17.1617 14.4014C16.9917 14.566 16.8128 14.7246 16.6256 14.8766L16.8441 15.3216C17.3971 16.4482 16.9214 17.8094 15.787 18.3464C14.6752 18.8728 13.3468 18.4085 12.8047 17.3043L12.5315 16.7477C11.2117 16.998 9.90919 16.9561 8.73026 16.6606C8.32847 16.5599 8.0844 16.1526 8.1851 15.7508C8.2858 15.349 8.69315 15.1049 9.09494 15.2056C10.2252 15.4889 11.5232 15.4924 12.841 15.1393C14.1588 14.7862 15.2811 14.1342 16.1183 13.3237C16.4159 13.0356 16.8908 13.0433 17.1789 13.3409ZM14.0048 16.345L14.1513 16.6433C14.3319 17.0114 14.7747 17.1661 15.1452 16.9907C15.5233 16.8117 15.6818 16.358 15.4975 15.9825L15.3707 15.7241C14.9417 15.9631 14.4851 16.1716 14.0048 16.345Z" fill="white"/>
</svg>
						</li>
					</ul>
					<div className="emojiDropDown" style={{display: emojiDropDown}}>
						{
							emojis.map( (e, i) => <span style={{
								fontSize: "24px",
								margin: "5px",
								cursor: "pointer",
								display: "inline-block"
							}} key={i} onClick={emojiInputHandler}>{e}</span>)
						}
					</div>
					<input ref={image} accept="image/*" type="file" className="imageInput" onChange={inputContent}/>
				</div>
				<button onClick={sendHandler} className="formBtn">Отправить</button>
			</div>
		</div>
	)
} 

export default PostMenu