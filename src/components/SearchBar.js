import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = {searchTerm : ''};

    onInputChange = event => {
        console.log(event.target.value);
        this.setState({searchTerm : event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        //TODO: Add callback method from Parent Component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.searchTerm} onChange={this.onInputChange} type='text'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;