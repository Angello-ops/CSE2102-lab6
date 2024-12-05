import React, { useState } from 'react';
import Quiz from './components/Quiz';
import AboutPage from './components/AboutPage';

//adde a bottle to nagivate both the quiz and about page
const App = () => {
    const [page, setPage] = useState('quiz');

    return (
        <div>
            <nav style={{ marginBottom: "20px", textAlign: "center" }}>
                <button onClick={() => setPage('quiz')}>Quiz</button>
                <button onClick={() => setPage('about')}>About</button>
            </nav>
            {page === 'quiz' ? <Quiz /> : <AboutPage />}
        </div>
    );
};

export default App;
