import React from 'react';
import './video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
                <div className="btn-play">
                    <div className="play" >
                        <div data-video={video.id.videoId} data-autoplay="0" data-loop="1" id="youtube-audio1"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default VideoItem;