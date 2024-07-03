/* eslint-disable react/prop-types */
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";
import { useRef } from "react";

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const closePlayer = (e) => {
    if (e.target === videoRef.current) props.setPlayState(false);
  };
  return (
    <div
      ref={videoRef}
      onClick={(e) => closePlayer(e)}
      className={`video-player ${!props.playState && "hide"}`}
    >
      <video className="video" src={video} autoPlay muted controls></video>
    </div>
  );
};
export default VideoPlayer;
