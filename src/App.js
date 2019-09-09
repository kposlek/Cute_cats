import React from 'react';
import CardList from './CardList';
import { cuteCats } from './CuteCats';
import SearchBox from './SearchBox';
const App = () => {
    return (
        <div className="tc">
            <h1 className="hot-pink grow">Cute Cats</h1>
            <SearchBox />
            <CardList cuteCats={cuteCats} />
        </div>
    );
};

export default App;
