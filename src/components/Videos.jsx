
import "../styles/Videos.css"
import ReactPlayer from 'react-player'

function Videos(props) {
  return(
      <div className="videosContenedor">
        <ReactPlayer src={props.linkVideos} 
        width="100%"
        height="100%"
        controls
        className="videosFrame"
      />

      </div>
    
  );
}

export default Videos
