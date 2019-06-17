import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {videos : []};

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

        this.setState({videos : response.data.items});
        console.log(this.state.videos);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        );
    }
};

export default App;