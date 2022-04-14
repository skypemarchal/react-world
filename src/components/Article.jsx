import axios from 'axios';
import React from 'react';
import {useState} from 'react';

const Article = (props) => {
    const {article} = props;
    const [edited, setEdited] = useState(false);
    const [editedContent, setEditedContent] = useState(article.content);

    const dateParser = (date) => {
        return new Date(date).toLocaleDateString(
            'fr-FR',{
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }
        );
    }

    const handleEdit = () => {
        setEdited(true);
        //alert('click');
    }
    const handleValidate = () => {
        
        axios.put("http://localhost:3003/articles/"+article.id,
        {
            author: article.author,
            content: editedContent,
            date: article.date
        }).then(()=>{
            setEdited(false);
            alert('good')
        });
        //alert('click');
    }

    return (
        <div className='article'>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            {edited ? 
            <textarea placeholder='Message' onChange={(e) => setEditedContent(e.target.value)} value={editedContent}></textarea>
            : <p>{article.content}</p>}

            <div className="btn-container">
            {!edited ? 
                <button onClick={handleEdit}>Edit</button>
            : <button onClick={handleValidate}>Valider</button>}
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;