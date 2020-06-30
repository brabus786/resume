import React, { useEffect, useState } from 'react';
import Articles from './Articles.jsx';

const ArticlesContainer = ({ getArticles }) => {

    const [articles, setArticles] = useState([]);

    const fetchArticles =  async () => {
        if (getArticles) {   
            const articles = await getArticles();
            setArticles(articles);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])


    return (
        <Articles
            articles={articles}
        />
    )
}

export default ArticlesContainer;