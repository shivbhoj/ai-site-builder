import React, { useState } from 'react';

export default function CodePreview() {
  const [prompt, setPrompt] = useState('Create a landing page for a coffee shop with a warm, welcoming design');
  const [activeTab, setActiveTab] = useState('preview');
  
  const sampleCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brew Haven Coffee</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #8B4513, #D2691E);
            color: #333;
        }
        .hero {
            text-align: center;
            padding: 100px 20px;
            color: white;
        }
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
        }
        .cta-button {
            background: #FF6B35;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            font-size: 1.2rem;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Brew Haven Coffee</h1>
        <p>Where every cup tells a story</p>
        <button class="cta-button">Order Now</button>
    </div>
</body>
</html>`;

  return (
    <div className="code-preview-card">
      <div className="card-header">
        <h3>Try it yourself</h3>
      </div>
      
      <div className="input-section">
        <label htmlFor="prompt">Describe your website:</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your site or app..."
          rows={3}
        />
        <button className="generate-button">
          Generate Code
        </button>
      </div>
      
      <div className="preview-section">
        <div className="preview-tabs">
          <button 
            className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button 
            className={`tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>
        
        <div className="preview-content">
          {activeTab === 'preview' ? (
            <iframe
              srcDoc={sampleCode}
              title="Code Preview"
              className="preview-iframe"
            />
          ) : (
            <pre className="code-display">
              <code>{sampleCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}