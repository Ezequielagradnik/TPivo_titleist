import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles.css'; 
import Footer from './components/Footer';
function App() {
    return (
        <div className="app">
        <Header />
        <main>
            <h1>Welcome to Titan Golf</h1>
            <p>Your one-stop shop for all things golf.</p>
            <img src="/assets/titan-logo.png" alt="Titan Logo" style={{ height: 100 }} />
           </main>
        <Footer />
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('root'));