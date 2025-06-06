import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles.css'; 
import Footer from './components/Footer';
import Feature from './components/Feature';
import Anuncio from './components/Anuncio';
import NewArticles from './components/newarticles';

function App() {
    return (
        <div>
            <Header />
                    <Anuncio />
                    <Feature />
                    <NewArticles />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));