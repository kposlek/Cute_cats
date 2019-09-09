import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { cuteCats } from './CuteCats';

ReactDOM.render(
    <div>
        <Card
            id={cuteCats[0].id}
            name={cuteCats[0].name}
            email={cuteCats[0].email}
        />
        <Card
            id={cuteCats[1].id}
            name={cuteCats[1].name}
            email={cuteCats[1].email}
        />
        <Card
            id={cuteCats[2].id}
            name={cuteCats[2].name}
            email={cuteCats[2].email}
        />
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
