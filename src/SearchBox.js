import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="tc pa3 br3 ba b--hot-pink bg-white-60 grow"
                type="search"
                placeholder="search cute Cat"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
