import React from 'react';
import CardList from './CardList';
import { cuteCats } from './CuteCats';
const App = () => {
    return <CardList cuteCats={cuteCats} />;
};

export default App;
