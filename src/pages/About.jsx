const About = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          minHeight: "60vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">About The Blossom Studio 🌸</h1>
          <p className="fs-5 mt-3 opacity-75">
            Where moments turn into lifelong memories
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p className="text-muted fs-5">
              The Blossom Studio was born from a passion for intimate
              celebrations. We believe that the most beautiful moments deserve
              a private, elegant setting filled with warmth and love.
            </p>
            <p className="text-muted">
              From birthdays to anniversaries, we craft experiences that feel
              personal, luxurious, and unforgettable.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
              alt="Celebration setup"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          height: "4px",
          width: "80%",
          margin: "40px auto",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #ffb6c1, #dda0dd)",
        }}
      ></div>

      {/* EXPERIENCE */}
      <section className="container py-5">
        <div className="row align-items-center g-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">A Thoughtfully Designed Experience</h2>
            <p className="text-muted fs-5">
              Every detail — from lighting and decor to curated dining — is
              carefully planned to create an immersive celebration.
            </p>
            <ul className="fs-5 text-muted">
              <li>✨ Elegant decorative themes</li>
              <li>🍽️ Curated private dining</li>
              <li>🌸 Cozy, romantic ambiance</li>
              <li>📸 Instagram-worthy moments</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Dining experience"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why People Love Us 💖
          </h2>

          <div className="row g-4">
            {[
              {
                title: "Private & Peaceful",
                text: "A calm, intimate space exclusively for you.",
              },
              {
                title: "Personalized Celebrations",
                text: "Every detail customized to your vision.",
              },
              {
                title: "Affordable Luxury",
                text: "Premium experience at an accessible price.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow rounded-4 text-center p-4">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Celebrate With Us 🌸</h2>
        <p className="text-muted fs-5 mb-4">
          Let us turn your special moments into timeless memories.
        </p>
        <a
          href="/#booking"
          className="btn btn-primary rounded-pill px-5 py-3 fs-5"
        >
          📅 Book Your Celebration
        </a>
      </section>
    </>
  );
};

export default About;
