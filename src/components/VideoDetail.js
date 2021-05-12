import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1></h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
     
       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div classname="vedio-content">
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment" style={{border:"1px solid white",  backgroundColor: "red" }}>
        <h4 className="ui header" style={{color:"white",backgroundColor:"red"}}>{video.snippet.title}</h4>
        <p style={{ color: "white", backgroundColor: "red" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
