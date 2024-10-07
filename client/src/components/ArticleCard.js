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
console.log(article);
  return (
      <div className="article-card">
      <h3>{article?.title || 'No Title Available'}</h3>     
       {/* Fallback for title ,? ensures that if article is undefined, the code won't throw an error, and instead will just return undefined, triggering the fallback.*/ }
  
    
   <p>{article?.summary || 'No Summary Available'}</p> {/* Fallback for summary */}
   <a href={article?.url || '#'} target="_blank" rel="noopener noreferrer">Read the full article</a>
   
   <h4>{article?.source || 'No source available'}</h4>
   <button onClick={saveArticle}>Save</button>
   
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
};


export default ArticleCard;
