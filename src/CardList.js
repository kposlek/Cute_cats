import React from 'react';
import Card from './Card';

const CardList = ({ cuteCats }) => {
    return (
        <div>
            {cuteCats.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={cuteCats[i].id}
                        name={cuteCats[i].name}
                        email={cuteCats[i].email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
