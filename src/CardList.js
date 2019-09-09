import React from 'react';
import Card from './Card';

const CardList = ({ cuteCats }) => {
    const cardComponent = cuteCats.map((user, i) => {
        return (
            <Card
                key={i}
                id={cuteCats[i].id}
                name={cuteCats[i].name}
                email={cuteCats[i].email}
            />
        );
    });
    return <div>{cardComponent}</div>;
};

export default CardList;
