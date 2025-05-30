import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles.css'; 
import Footer from './components/Footer';
import Feature from './components/Feature';

function App() {
    return (
        <div className="app">
        <Header />
        <main className="flex-1">
        <Feature />
        </main>
        <Footer />
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('root'));