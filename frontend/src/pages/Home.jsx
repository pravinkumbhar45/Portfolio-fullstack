const Home = () => {
  return (
    <div className="p-4">
      <h1 className="fw-bold">Hi, I’m Pravin 👋</h1>
      <h3 className="text-primary mt-2">
        Java Full Stack Developer
      </h3>

      <p className="mt-3 fs-5">
        I build scalable full-stack applications using
        <strong> React, Spring Boot, and MySQL</strong>.
      </p>

      <div className="mt-4">
        <a href="/resume" className="btn btn-primary me-3">
          View Resume
        </a>
        <a href="/projects" className="btn btn-outline-primary">
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
