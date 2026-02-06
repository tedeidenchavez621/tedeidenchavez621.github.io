import { useState } from 'react';
import './App.css';
import duduBubu from './assets/dudu-bubu.gif';

const App = () => {
    return (
        <div className="container">
            <img src={String(duduBubu)} alt="Bubu and Dudu" />
            <h2>Hello </h2>
            <button>CONTINUE</button>
        </div>
    );
};

export default App;
