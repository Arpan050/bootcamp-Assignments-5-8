import React from 'react';

function App() {
  return (
    <div style={styles.card}>
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="Profile"
        style={styles.image}
      />
      <h2 style={styles.name}>Arpan Paul</h2>
      <p style={styles.role}>Full Stack Developer</p>
      <p style={styles.description}>
        Passionate about building web apps with React, Node, and Supabase.
      </p>
      <div style={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:you@example.com">Email</a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#fff',
  },
  image: {
    width: '120px',
    borderRadius: '50%',
  },
  name: {
    margin: '10px 0 5px',
  },
  role: {
    color: 'gray',
    margin: '5px 0',
  },
  description: {
    fontSize: '14px',
    margin: '10px 0',
  },
  socials: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
  },
};

export default App;
