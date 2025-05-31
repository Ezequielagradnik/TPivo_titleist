import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles.css'; 
import Footer from './components/Footer';
import Feature from './components/Feature';
import Anuncio from './components/Anuncio';

function App() {
    return (
        <div>
            <Header />
            <main>
            <Anuncio/>
            <Feature />
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));