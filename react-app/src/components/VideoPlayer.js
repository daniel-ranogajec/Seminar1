import { Link, useParams } from "react-router-dom"
import YouTube from 'react-youtube';


const VideoPlayer = () => {
	const { id } = useParams();
	const opts = {
		width: 540,
		height: 400,
		playerVars: {
			autoplay: 1,
		},
	}

	return (
		<div>
			<YouTube videoId={id} opts={opts} />
			<Link to='/'>Go Back</Link>
		</div>
	)
}

export default VideoPlayer
