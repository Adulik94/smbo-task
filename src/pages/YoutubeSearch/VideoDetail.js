import React from "react";
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>
            <h1> Search results </h1>
        </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video, "detals vise");
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title="Video player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;