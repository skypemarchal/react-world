import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ReloadContext } from '../AppContext';
import Article from '../components/Article';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const News = () => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [errorContent, setErrorContent] = useState(false);
    const [articles, setArticles] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const reloadContext = useContext(ReloadContext);

    console.log("reloadContext : " + reloadContext)

    useEffect(() =>{
        getData();
    }, []);

    const getData = () => {
        setLoading(true);
        axios.get("http://localhost:3003/articles")
        .then((res) => {
            setArticles(res.data)
        })
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();

        if(content == "")
        {
            setErrorContent(true);
        }else{
            axios.post("http://localhost:3003/articles",{
                author,
                content,
                date: Date.now(),
            }).then(() => {
                setErrorContent(false);
                setAuthor("");
                setContent("");
                getData();
            });
        }
    }

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1>News</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='title' onChange={(e) => setAuthor(e.target.value)} value={author} />
                <textarea 
                style={{border : errorContent ? "2px solid red" : "1px solid black" }}
                placeholder='Message' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                {errorContent && <p>Champs obligatoire</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {articles
                .sort((a,b) => b.date - a.date)
                .map((article) =>(
                    <Article key={article.id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default News;