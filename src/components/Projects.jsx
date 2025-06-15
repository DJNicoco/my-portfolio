const Projects = () => {
  return (
    <section id="projects">
      <h2>📌 Featured Projects</h2>

      {/* Task Manager Project */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>🗂️ Tasks Manager</h3>
        <p><strong>Type:</strong> Full-Stack Web Development</p>
        <p><strong>Course:</strong> Advanced Website Programming – UFV (Jan–Apr 2025)</p>
        <p><strong>Overview:</strong> Developed a task management web app with user authentication, role-based access, and Google Calendar integration.</p>
        <p><strong>Tech Used:</strong> FastAPI, PostgreSQL, Docker, JWT</p>
        <p><strong>Features:</strong> Create/update tasks, filter by priority/status, and sync deadlines with Google Calendar.</p>
        <p>
          📄 <a href="/Task Tracker – Full-Stack Task Management App.pdf" target="_blank" rel="noreferrer">
            View README (PDF)
          </a>
        </p>
      </div>

      {/* Grocery List API Project */}
      <div>
        <h3>🛒 Grocery List API</h3>
        <p><strong>Type:</strong> Backend Development</p>
        <p><strong>Course:</strong> Advanced Website Programming – UFV (Jan–Apr 2025)</p>
        <p><strong>Overview:</strong> Built a RESTful API supporting full CRUD operations, data validation, and file-based persistence.</p>
        <p><strong>Tech Used:</strong> FastAPI, Pydantic, Docker, JSON, curl</p>
        <p><strong>Features:</strong> Create/update/delete/search items, validate inputs, save to file, and filter by category/price/name.</p>
        <p>
          📄 <a href="/🛒 Grocery List API – RESTful CRUD Backend.pdf" target="_blank" rel="noreferrer">
            View README (PDF)
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
