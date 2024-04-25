import React, { useState } from 'react';

const AboutPage = () => {
    const [isAboutVisible, setIsAboutVisible] = useState(true);
    const [isPrinciplesVisible, setIsPrinciplesVisible] = useState(false);
 
    const toggleAboutVisibility = () => {
        setIsAboutVisible(!isAboutVisible);
    };

    const togglePrinciplesVisibility = () => {
        setIsPrinciplesVisible(!isPrinciplesVisible);
    };

    return (
        <div className='ml-9 mt-8 pb-16'>
            <div className="border mb-4 p-4 flex flex-col">
                <h1>About Us</h1>
                {isAboutVisible && (
                    <>
                        <p>Welcome to our website! We are a team of developers passionate about building amazing web applications.</p>
                        <p>Our goal is to create useful and innovative solutions that make people's lives easier.</p>
                        <p>Feel free to explore our website and learn more about what we do.</p>
                    </>
                )}
                <div className="flex justify-start mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={toggleAboutVisibility}>
                        {isAboutVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>

            <div className="border mb-4 p-4 flex flex-col">
                <h1 className="mt-3">Principles</h1>
                {isPrinciplesVisible && (
                    <>
                        <p>Welcome to our website! We are a team of developers passionate about building amazing web applications.</p>
                        <p>Our goal is to create useful and innovative solutions that make people's lives easier.</p>
                        <p>Feel free to explore our website and learn more about what we do.</p>
                    </>
                )}
                <div className="flex justify-start mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={togglePrinciplesVisibility}>
                        {isPrinciplesVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
