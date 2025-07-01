import React, { useEffect, useState } from 'react'
import logo_tech from '../assets/logo.png'
import { Link } from 'react-router-dom'


const News = (props) => {

    const[news, setNews] = useState([])
    const getRandomPage = () =>{
        return Math.floor(Math.random() *10 ) +1;
    }

    const getNews = () => {

        const randompage = getRandomPage();
        
        fetch(`https://newsapi.org/v2/everything?q=${props.menu}&apiKey=e6d4916e6b424f869e53f0a542989174&page=${randompage} `)
        .then(res => res.json())
        .then(json => setNews(json.articles))
        .catch(err => console.error("Error fetching news: ", err));
    }

    useEffect(() => {
        getNews()
    }, [props.menu])


    const filteredNews = news.filter(data => {
        return data.title.toLowerCase().includes(props.search.toLowerCase());
    });
   
    const limitedNews = filteredNews.slice(0, 16);

    return (
        <div className='main-content mt-16 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {limitedNews.length === 0 ? (
            <p>No news found for "{props.search}"</p>
            ) : (
                limitedNews.map((data, index) => (
                    <Link to="/details" state={{data: data}}><div key={index} className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg mb-6 bg-white">
                        <div className="w-full h-48">
                            <img
                                className="w-full h-full object-cover"
                                src={data.urlToImage || logo_tech} 
                                alt={data.title}
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{data.title}</div>
                            <p className="text-gray-700 text-base">
                                {data.description || "No description available."}
                            </p>
                        </div>
                        
                    </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default News