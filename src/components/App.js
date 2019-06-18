import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount = () => {
        this.onTermSubmit('YouTube Trending');
    }

    onTermSubmit = async searchTerm => {
        //It's called q -- query because that's what youtube has defined it to be
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDNv5WJjj0HeQNyf06wu80xKwuv5TkpP5U'
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;