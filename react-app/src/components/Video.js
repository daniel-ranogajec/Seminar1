import { FaTimes, FaPlay } from 'react-icons/fa'
import { Route } from 'react-router-dom'

const Video = ({ video, onDelete }) => {
	return (
		<div className='video'>
			<img src={video.thumbnail} alt='Thumbnail'/>
			<h3>{video.title} <FaTimes onClick={() => onDelete(video.id)}/></h3>
			<Route render={({ history}) => (
				<FaPlay onClick={() => { history.push(`/video/${video.id}`) }}></FaPlay>
			)} />
		</div>
	)
}

export default Video
