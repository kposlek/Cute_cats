import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="tc ba green bg-washed-red dib br3 pa3 ma2 b--hot-pink mv4 w-100 w-50-m w-25-l mw5 grow shadow-5">
            <img
                alt="cats"
                className="w-70"
                src={`https://robohash.org/kitty${id}?set=set4`}
            />
            <h2 className="dt w-100 mt1">{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;
