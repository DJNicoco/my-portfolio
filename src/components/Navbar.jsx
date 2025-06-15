const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Nicole Zino</h2>
      <div>
        <button onClick={toggleTheme}>
          {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;