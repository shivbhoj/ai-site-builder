import React, { useState } from "react";
import LivePreview from "./LivePreview";
import { generateSiteCode } from "./api";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const generated = await generateSiteCode(prompt);
      setCode(generated);
    } catch (err) {
      alert("AI generation failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Aetherstack AI Site Builder</h1>
      <textarea
        placeholder="Describe your site or app..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />
      <button onClick={handleGenerate} disabled={loading || !prompt}>
        {loading ? "Generating..." : "Generate Site"}
      </button>
      <LivePreview code={code} />
    </div>
  );
}