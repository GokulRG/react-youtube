import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: '' };

    onInputChange = event => {
        this.setState({ searchTerm: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.searchTerm} onChange={this.onInputChange} type='text' />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;