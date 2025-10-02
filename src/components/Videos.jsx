
import "../styles/Videos.css"
import ReactPlayer from 'react-player'

function Videos() {
  return(
      <div className="videosContenedor">
        <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
        width="100%"
        height="100%"
        controls
        className="videosFrame"
      />

      </div>
    
  );
}

export default Videos
