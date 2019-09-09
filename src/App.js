import React, { Component } from 'react';
import CardList from './CardList';
import { cuteCats } from './CuteCats';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cuteCats: cuteCats,
            searchfield: ''
        };
    }

    onSearchChange = e => {
        this.setState({ searchfield: e.target.value });
    };

    render() {
        const filteredCuteCats = this.state.cuteCats.filter(cuteCat => {
            return cuteCat.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="hot-pink grow">Cute Cats</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList cuteCats={filteredCuteCats} />
            </div>
        );
    }
}

export default App;
