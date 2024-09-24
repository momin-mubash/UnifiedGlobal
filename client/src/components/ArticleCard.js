import React, { useState } from 'react';

const ArticleCard = ({ article }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [newDig, setNewDig] = useState('');

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
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <button onClick={saveArticle}>Save</button>

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
};

export default ArticleCard;
