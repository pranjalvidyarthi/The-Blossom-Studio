import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);
  

const occasions = [
  {
    icon: "🎉",
    title: "Birthday",
    text: "Make your birthday unforgettable",
    image: "/src/assets/occasions/birthday.jpg",
  },
  {
    icon: "💍",
    title: "Wedding",
    text: "A wedding to remember",
    image: "/src/assets/occasions/wedding.jpg",
  },
  {
    icon: "🥂",
    title: "Anniversary",
    text: "Celebrate your love",
    image: "/src/assets/occasions/anniversary.jpg",
  },
  {
    icon: "🎊",
    title: "Party",
    text: "Fun times with friends",
    image: "/src/assets/occasions/party.jpg",
  },
];


  const features = [
    {
      icon: "🌟",
      title: "Intimate Atmosphere",
      text: "Private dining space exclusively for you and your loved ones.",
    },
    {
      icon: "🍽️",
      title: "Curated Menu",
      text: "Carefully selected meals prepared with love.",
    },
    {
      icon: "✨",
      title: "Complete Setup",
      text: "From decor to ambiance — we handle everything.",
    },
    {
      icon: "💝",
      title: "Affordable Luxury",
      text: "Premium experience at an accessible price.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="d-flex align-items-center text-white text-center"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1555992336-03a23c7b20ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-4 py-md-5">
          <h1 className="fw-bold mb-3  fs-1 display-6 display-md-4 display-lg-3">
            The Blossom Studio 🌸
          </h1>

          <p className="fs-4 fs-md-5 mb-2">
            Your Private Dining Experience Awaits
          </p>

          <p className="opacity-75 fs-5 fs-md-5 mb-4">
            Celebrate Life's Beautiful Moments in Elegance
          </p>

          <a
            href="#booking"
            className="btn btn-light rounded-pill shadow
                       btn-sm btn-md-lg
                       px-4 px-md-5
                       py-2 py-md-3
                       fs-5"
          >
            📅 Book Your Celebration
          </a>
        </div>
      </section>

 {/* OCCASIONS */}
{/* OCCASIONS */}
<section className="container py-5">
  <h2 className="text-center fw-bold mb-4">
    Celebrate Your Special Moments
  </h2>

  {/* Gradient line under title */}
  <div
    className="mx-auto mb-5"
    style={{
      height: "3px",
      width: "80px",
      borderRadius: "2px",
      background: "linear-gradient(90deg, #ffb6c1, #dda0dd)",
    }}
  ></div>

  <div className="row g-4">
    {occasions.map((item, i) => (
      <div className="col-md-3 col-sm-6" key={i}>
        <div
          className="card h-100 border-0 shadow rounded-4 overflow-hidden position-relative"
          style={{
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,182,193,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
          }}
        >
          {/* Image */}
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body text-center">
            <div className="fs-2 mb-2">{item.icon}</div>
            <h5 className="fw-bold">{item.title}</h5>
            <p className="text-muted small">{item.text}</p>
          </div>

          {/* Small gradient line at bottom */}
          <div
            style={{
              height: "4px",
              width: "50%",
              margin: "0 auto 10px auto",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #ffb6c1, #dda0dd)",
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</section>



{/* PRICING */}
<section
  className="py-5 text-white position-relative overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Animated floating circles */}
  {[...Array(8)].map((_, i) => (
    <span
      key={i}
      className="position-absolute rounded-circle"
      style={{
        width: `${25 + Math.random() * 70}px`,
        height: `${25 + Math.random() * 70}px`,
        background: "rgba(255,255,255,0.1)",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `floatAnimation ${5 + Math.random() * 5}s ease-in-out infinite`,
        zIndex: 0,
      }}
    ></span>
  ))}

  <div className="container text-center position-relative" style={{ zIndex: 1 }}>
    <span className="badge bg-warning text-dark rounded-pill mb-3 px-3 py-2 fs-6">
      🌸 MOST POPULAR
    </span>

    <h2 className="fw-bold mb-2 fs-1">Our Complete Package</h2>
    <p className="text-light mb-4 fs-5">
      A luxury private dining experience crafted just for you
    </p>

    <div
      className="card border-0 rounded-5 mx-auto shadow-lg text-white"
      style={{
        maxWidth: "600px",
        background:
          "linear-gradient(135deg, rgba(255,182,193,0.95), rgba(221,160,221,0.95))",
        backdropFilter: "blur(15px)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 25px 60px rgba(255,182,193,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
      }}
    >
      <div className="card-body p-4 p-md-5 text-center">
        <h6 className="text-uppercase opacity-75 mb-2 fs-6">
          All-Inclusive Private Dining
        </h6>

        <h1 className="fw-bold my-3 fs-2 fs-md-1">₹5,500</h1>

        <p className="opacity-75 mb-4 fs-5">⏱ 2.5 Hours Experience</p>

        <ul
          className="list-unstyled text-start mx-auto mb-4 fs-5"
          style={{ maxWidth: "420px" }}
        >
          {[
            "Complete decorative setup",
            "Private dining space",
            "Selected gourmet meals",
            "Ambient lighting & music",
            "Photography-ready ambiance",
            "Personalized arrangements",
          ].map((item, i) => (
            <li key={i} className="mb-2">
              ✨ {item}
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="btn btn-light rounded-pill shadow px-5 py-3 fs-5"
        >
          💖 Reserve Your Moment
        </a>
      </div>
    </div>
  </div>

  {/* Floating animation keyframes */}
  <style>
    {`
      @keyframes floatAnimation {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
    `}
  </style>
</section>

{/* Gradient line divider */}
<div
  style={{
    height: "4px",
    width: "80%",
    margin: "60px auto",
    borderRadius: "2px",
    background: "linear-gradient(90deg, #ffb6c1, #dda0dd)",
  }}
></div>

{/* FEATURES */}
<section
  className="py-6 position-relative"
  // style={{
  //   backgroundImage:
  //     "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // }}
>
  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h2 className="text-center fw-bold mb-5 fs-1 text-gray text-shadow">
      Why Choose <span className="text-gradient">The Blossom Studio?</span>
    </h2>

    <div className="row g-4">
      {features.map((item, i) => (
        <div className="col-md-6" key={i} style={{ perspective: "1000px" }}>
          <div
            className="p-4 rounded-4 shadow-lg bg-white bg-opacity-80 h-100 feature-card position-relative overflow-hidden"
            style={{
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Floating gradient circle */}
            <span
              className="position-absolute rounded-circle"
              style={{
                width: "120px",
                height: "120px",
                top: "-40px",
                right: "-40px",
                background:
                  "linear-gradient(135deg, rgba(255,192,203,0.5), rgba(221,160,221,0.5))",
                zIndex: 0,
                transform: "rotate(25deg)",
              }}
            ></span>

            {/* Feature image icon */}
            <div className="mb-3">
              <img
                src={
                  item.image ||
                  "https://images.unsplash.com/photo-1612831663419-75f07c116f7a?auto=format&fit=crop&w=100&q=80"
                }
                alt={item.title}
                className="img-fluid rounded-circle shadow-sm"
                style={{ width: "60px", height: "60px" }}
              />
            </div>

            {/* Feature content */}
            <h5 className="fw-bold position-relative" style={{ zIndex: 1 }}>
              {item.icon} {item.title}
            </h5>
            <p className="text-muted mb-0 position-relative" style={{ zIndex: 1 }}>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




{/* BOOKING */}
<section id="booking" className="py-4 py-md-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card border-0 shadow rounded-4">
          <div className="card-body p-4 p-md-5">
            <h2 className="fw-bold text-center mb-2">
              📅 Book Your Celebration
            </h2>
            <p className="text-center text-muted mb-4">
              Fill in the details and we’ll handle everything
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                // Extract form values
                const form = e.target;
                const name = form.name.value || "";
                const phone = form.phone.value || "";
                const email = form.email.value || "";
                const date = form.date.value || "";
                const guests = form.guests.value || "";
                const message = form.message.value || "";

                // Prepare WhatsApp message
                const text = `Hello! I want to book a celebration at The Blossom Studio.%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Email:* ${email}%0A
*Date:* ${date}%0A
*Guests:* ${guests}%0A
*Special Requests:* ${message}`;

                // WhatsApp number (replace with yours)
                const phoneNumber = "917505977782";

                // Redirect to WhatsApp
                window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
              }}
            >
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                {/* Date */}
                <div className="col-md-6">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>

                {/* Guests */}
                <div className="col-md-6">
                  <select name="guests" className="form-select" required>
                    <option value="">Number of Guests</option>
                    <option>2–4</option>
                    <option>5–10</option>
                    <option>10+</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Special Requests"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 px-md-5 py-2 py-md-3 w-100 w-md-auto"
                  >
                    ✨ Confirm Booking
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
};

export default Home;
