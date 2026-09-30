import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>💚Queridos e Amados Alunos</h1>
      <h2 style={styles.subtitle}>Turma 24PSG2T</h2>
      <p style={styles.text}>
        Uma homenagem com luz, respeito e muita admiração.  
        <br /> — Profª Dalvana Ribeiro
      </p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginTop: "60px",
    marginBottom: "40px",
    zIndex: 2,
  },
  title: {
    fontSize: "3rem",
    background: "linear-gradient(90deg, #38bdf8, #a3e635)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subtitle: {
    color: "#bae6fd",
    fontSize: "1.5rem",
    marginTop: "0.5rem",
  },
  text: {
    color: "#94a3b8",
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
};
