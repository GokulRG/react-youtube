import React from 'react';
import VideoItem from './VideoItem';

//Destructuring props
const VideoList = ({videos}) => {

    const renderedItems = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} />;
    });

    return(
        <div>
            {renderedItems}
        </div>
    );
}

export default VideoList;