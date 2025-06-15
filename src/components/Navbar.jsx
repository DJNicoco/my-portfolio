const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={toggleTheme}>
          {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    </nav>
  );
};

export default Navbar;