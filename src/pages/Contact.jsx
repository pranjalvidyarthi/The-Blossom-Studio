const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          minHeight: "60vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1555992336-03a23c7b20ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">Contact Us 🌸</h1>
          <p className="fs-5 mt-3 opacity-75">
            Let’s plan something beautiful together
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-5">
            <h2 className="fw-bold mb-3">Get In Touch</h2>
            <p className="text-muted fs-5">
              Have a question or want to customize your celebration?
              Reach out to us — we’d love to hear from you.
            </p>

            <ul className="list-unstyled fs-5 text-muted">
              <li className="mb-2">📍 Private Luxury Studio</li>
              <li className="mb-2">📞 +91 75059 77782</li>
              <li className="mb-2">⏰ Available by Appointment</li>
            </ul>
          </div>

          {/* FORM */}
          <div className="col-md-7">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4 p-md-5">
                <h4 className="fw-bold mb-3 text-center">
                  ✨ Send Us a Message
                </h4>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.target;
                    const name = form.name.value || "";
                    const phone = form.phone.value || "";
                    const message = form.message.value || "";

                    const text = `Hello! I want to contact The Blossom Studio.%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Message:* ${message}`;

                    const phoneNumber = "917505977782";

                    window.open(
                      `https://wa.me/${phoneNumber}?text=${text}`,
                      "_blank"
                    );
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill px-5 py-3 fs-5"
                      >
                        💬 Contact via WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-white text-center py-5"
        style={{
          background:
            "linear-gradient(135deg, #ffb6c1, #dda0dd)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">We’re Just One Message Away 💖</h2>
          <p className="fs-5 mb-4">
            Let us take care of everything while you enjoy the moment
          </p>
          <a
            href="/#booking"
            className="btn btn-light rounded-pill px-5 py-3 fs-5 shadow"
          >
            📅 Book a Celebration
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
