import { useState } from 'react';
import './App.css';
import duduBubu from './assets/dudu-bubu.gif';
import catDancing from './assets/cat-dancing.gif';

const App = () => {
    const [isSwapped, setIsSwapped] = useState(false);

    return (
        <div className="container">
            <div className="content-area">
                <h2>Hello</h2>
                {isSwapped ? (
                    <>
                        <h1>This is page 1</h1>
                        <img src={duduBubu} alt="Bubu and Dudu" />
                    </>
                ) : (
                    <>
                        <h1>This is page 2</h1>
                        <img src={catDancing} alt="Cat Dancing" />
                    </>
                )}
            </div>
            <button onClick={() => setIsSwapped(!isSwapped)}>CONTINUE</button>
        </div>
    );
};

export default App;