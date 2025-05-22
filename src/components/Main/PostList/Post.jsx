import {useState} from 'react'
import {formatDateAgo} from '../../../action/timeFormat'
import {Link} from 'react-router-dom'
import PostAction from './PostAction'
import PostAnswers from './PostAnswers'
import {API_URL} from '../../../config'

const Post = ({post, flag=false}) =>{
	const [answerFlag, setAnswerFlag] = useState(false)
	
	const avatar = API_URL + 'image/' + post.avatar
	const linkProfile = '/profile?idUser=' + post.creater
	const image = post.image ? API_URL + 'image/' + post.image : ''
	const linkRepostProfile = '/profile?idUser=' + post.idUr
	
	return(
		<div className={flag? 'answer' :'post'}>
			{
				post.repostStatus ?
				<Link className='postRep' to={linkRepostProfile}>
				{'Репост от ' + post.nicknameUr + " "
				}
				<span>{"@"+ post.loginUr}</span>
				</Link>
				:
				''
			}
			<div className="postTop">
				<img className="avatar big" src={avatar} />
				<div className='postText'>
					<Link to={linkProfile}>
						<div className='postUser'>
							{post.nickname} 
							<span>{
								'  @' + post.login + ' - ' + formatDateAgo(Date.parse(post.createdAt))
							}</span>
						</div>
					</Link>
					<span>
						{post.text}
					</span>
				</div>
			</div>
			{ post.image &&
			<div className='postImage'>
				<img src={image} />
			</div>
			}
			{!flag &&
			<PostAction flag={answerFlag} setFlag={setAnswerFlag} countLike={post.countLike} countAnswer={post.countAnswer} id={post.id} />
			}
			{answerFlag &&
				<PostAnswers id={post.id}/>
			}
		</div>
	)
}

export default Post
