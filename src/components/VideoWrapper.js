import './VideoWrapper.css';
import Video from './Video';
import Caption from './Caption';

function VideoWrapper() {
  return (
    <div className="VideoWrapper">
      <span className="VideoTitle">CS229: Machine Learning</span>
      <div className="VideoBox">
        <Video />
        <Caption />
      </div>
    </div>
  );
}

export default VideoWrapper;