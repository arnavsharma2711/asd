import Video from "./Video";
import "../css/VideoBar.css";

const VideoBar = ({peersStream,userId}) => {
  console.log("From VideoBar")
  console.log(peersStream)
  console.log("2")
  console.log(userId)
 
  return (
    <div className="scrollmenu">

      { peersStream.map((peer) => {
        return ( peer.userId ===undefined? <div>User Left</div>:        
             <Video
            key={peer.userId}
            media={peer.stream}
            height={110}
            width={160}
            muted={userId === peer.userId ? true : false}
          ></Video> 
        
        );
      })}
    </div>
  );
};
export default VideoBar;
