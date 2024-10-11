import "../assets/styles/Body.css"
import React, { useState } from 'react';

const ArticleCard = ({ article }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [newDig, setNewDig] = useState('');
  const [showFullArticle, setShowFullArticle] = useState(false);

  const toggleReadMore = () => {
    setShowFullArticle(!showFullArticle);
  };


  const saveArticle = () => {
    setShowPopup(true);
  };

  const createNewDig = () => {
    // Logic to save article in the new dig
    console.log('New Dig Created:', newDig);
    setShowPopup(false);
  };
  return (
      <div className="article-card">
      <h3>
        <a>{article?.title || 'No Title Available'}</a></h3> {/* Clickable article title */}    
       {/* Fallback for title ,? ensures that if article is undefined, the code won't throw an error, and instead will just return undefined, triggering the fallback.*/ }
     
   <h4>{article?.source || 'No source available'}</h4>
   <button onClick={saveArticle}>Save</button>
    {/* "Read More" option to show full article content */}
    <button onClick={toggleReadMore}>
        {showFullArticle ? 'Show Less' : 'Read More'}
      </button>

      {/* Show full article content inside the website */}
      {showFullArticle && <p>{article.content || 'No content available'}</p>}

   
   {/*this will get triggered when a user clicked on Add article button */}
   {/**a popup will appear for adding articles into digs */}
   {showPopup && (
    <div className="save-popup">
    <h4>Create New Dig</h4>
    <input 
    type="text" 
    placeholder="Enter dig name" 
    value={newDig} 
    onChange={(e) => setNewDig(e.target.value)} 
    />
    <button onClick={createNewDig}>Add Article</button>
    </div>
  )}
  </div>
);
const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};
};


export default ArticleCard;
