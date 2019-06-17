import React from 'react';
import "./VideoItem.css";

//Destructuring props
const VideoItem = ({ video, onVideoSelect }) => {

    return (
        //This is the arrow function syntax to call a method with arguments
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;

