import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom'
import Header from './components/Header'
import Videos from './components/Videos'
import AddVideo from './components/AddVideo'
import VideoPlayer from './components/VideoPlayer'
import NotFound from './components/NotFound'

const App = () => {

  const [videos, setVideos] = useState([])
  const history = useHistory();

  useEffect(() => {
    const getVideos = async () => {
      const videos = await fetchVideos()
      setVideos(videos)
    }

    getVideos()
  }, [])

  const fetchVideos = async () => {
    const res = await fetch('http://localhost:8000')
    const data = await res.json()
    return data
  }



  const deleteVideo = async (id) => {
    const data = {"id": id}
    console.log(data)

    await fetch('http://localhost:8000/remove', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    setVideos(videos.filter((video) => video.id !== id))
  }

  const playVideo = (id) => {
    history.push('/video')
  }

  const searchVideo  = async (video) => {
    const res = await fetch("http://localhost:8000/search", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(video),
    })

    const data = await res.json()
    if (data.data === "duplicate") {
      alert(data.title + " is already on the list!")
    } else {
      setVideos([...videos, data])
    }
  }

  return (
    
        <div className="container">
          <Header title="Lista Youtube Videa" />
          <Router>
            <Switch>
          <Route exact path='/' render={(props) => (
            <>
              <AddVideo onAdd={searchVideo}/>
              <Videos videos={videos} onDelete={deleteVideo} onPlay={playVideo}/>
            </>
          )} />
          <Route exact path='/video/:id' render={(props) => (
            <>
              <VideoPlayer />
            </>
          )} />
          <Route component={NotFound} />
          </Switch>
        </Router>
        </div>
     
  );
}

export default App;
