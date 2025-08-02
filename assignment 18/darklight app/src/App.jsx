import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  const styles = {
    app: {
      height: '100vh',
      width: '100vw',
      backgroundColor: darkMode ? '#121212' : '#f5f5f5',
      color: darkMode ? '#f5f5f5' : '#121212',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial',
      transition: 'all 0.3s ease',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: darkMode ? '#bb86fc' : '#6200ee',
      color: '#fff',
    },
  };

  return (
    <div style={styles.app}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button style={styles.button} onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
}

export default App;
