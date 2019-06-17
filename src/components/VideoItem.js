import React from 'react';

//Destructuring props
const VideoItem = ({video}) => {

    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            {video.snippet.title}
        </div>
    );
};

export default VideoItem;

