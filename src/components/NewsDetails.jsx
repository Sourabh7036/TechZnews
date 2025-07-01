import React from 'react';
import { useLocation } from 'react-router-dom';
import Comments from './Comments';

const NewsDetails = () => {
    const location = useLocation(); // Using React Router's useLocation to get the article data passed from News component

    const { data } = location.state; // Destructure data (article details) from location.state

    return (
        <div className="grid grid-cols-2 gap-8 p-5">
            {/* News Article Section */}
            <div className="p-5">
                <h1 className="font-extrabold text-2xl mb-3">{data.title}</h1>
                <p className="mb-4">{data.description}</p>
                {data.urlToImage && <img src={data.urlToImage} alt="News Image" className="w-ful h-auto mb-4 rounded" />}
                
                {/* Display clickable URL */}
                <h2 className="mt-3">
                    Read the full article here:{' '}
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        {data.url}
                    </a>
                </h2>
            </div>

            {/* Comments Section */}
            <div>
                <Comments />
            </div>
        </div>
    );
};

export default NewsDetails;
