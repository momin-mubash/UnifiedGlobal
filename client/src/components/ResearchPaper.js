import React, { useState } from 'react';

const ResearchPaper = ({ articles }) => {
  const [content, setContent] = useState('');

  const handleGeneratePdf = () => {
    // PDF generation logic here using jsPDF or similar library
  };

  return (
    <div className="research-paper-container">
      <div className="articles">
        {articles.map(article => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
      <div className="text-editor">
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Start writing your research paper..."
        />
        <button onClick={handleGeneratePdf}>Generate PDF</button>
      </div>
    </div>
  );
};

export default ResearchPaper;
