export default function LivePreview({ code }) {
  return (
    <div className="preview-container">
      <h2>Live Preview</h2>
      <iframe
        title="Live Preview"
        srcDoc={code}
        style={{ width: "100%", height: "500px", border: "1px solid #ccc", background: "#fff" }}
      />
    </div>
  );
}
