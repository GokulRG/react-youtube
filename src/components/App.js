import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';

class App extends React.Component {

    onTermSubmit = async searchTerm => {
        //It's called q -- query because that's what youtube has defined it to be
        youtube.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDNv5WJjj0HeQNyf06wu80xKwuv5TkpP5U'
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
        );
    }
};

export default App;