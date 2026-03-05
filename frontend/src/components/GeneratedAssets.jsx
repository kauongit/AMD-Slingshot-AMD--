import { useRef } from "react";

function GeneratedAssets({ assets }) {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div style={styles.container}>
      <h2>Generated Assets</h2>

      <Asset title="Poster Text" text={assets.poster} copy={copy} />
      <Asset title="Social Caption" text={assets.socialCaption} copy={copy} />
      <Asset title="Email Invitation" text={assets.email} copy={copy} />
      <Asset title="Certificate Text" text={assets.certificate} copy={copy} />
      <Asset title="Event Summary" text={assets.summary} copy={copy} />
    </div>
  );
}

function Asset({ title, text, copy }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{title}</h3>
        <button style={styles.copyBtn} onClick={() => copy(text)}>
          Copy
        </button>
      </div>

      <pre style={styles.text}>{text}</pre>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
  },

  card: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  copyBtn: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  text: {
    whiteSpace: "pre-wrap",
    fontSize: "14px",
  },
};

export default GeneratedAssets;