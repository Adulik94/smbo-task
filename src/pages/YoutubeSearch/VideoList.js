import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {

    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log("videkpokolk",video.id.videoId);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;