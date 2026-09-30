import React from "react";

export default function MessageCard({ title, content }) {
  return (
    <div style={styles.card}>
      {title && <h3 style={styles.title}>{title}</h3>}
      <p style={styles.content}>{content}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "18px",
    padding: "20px",
    margin: "15px 0",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(4px)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  title: {
    color: "#7dd3fc",
    fontSize: "1.3rem",
    marginBottom: "10px",
  },
  content: {
    color: "#f1f5f9",
    lineHeight: "1.6",
  },
};
