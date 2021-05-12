import React from 'react';
import '../style/video.css';
const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div style={{ borderBottom: "1px solid white" }} onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content' >
                <div className='header' style={{color:"white"}}>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;