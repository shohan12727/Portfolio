import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Experience/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;