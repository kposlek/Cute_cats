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
        const filteredCuteCats = this.state.cuteCats.filter(cuteCat => {
            return cuteCat.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredCuteCats);
    };

    render() {
        return (
            <div className="tc">
                <h1 className="hot-pink grow">Cute Cats</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList cuteCats={this.state.cuteCats} />
            </div>
        );
    }
}

export default App;
