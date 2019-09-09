import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc br2 ba green bg-washed-red dib br3 pa3 ma2 b--hot-pink mv4 w-100 w-50-m w-25-l mw5 grow shadow-5">
                <img
                    alt="cats"
                    className="w-70"
                    src="https://robohash.org/kitty?set=set4"
                />
                <h2 className="dt w-100 mt1">Cute Cats</h2>
            </div>
        );
    }
}

export default Card;
