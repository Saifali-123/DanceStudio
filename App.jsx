
export default function App() {
  return (
    <div className="container">

      <section className="hero">
        <h1>Annapoorna Shetty Dance Academy</h1>
        <p>Bollywood • Semi Classical • Kids Dance</p>
        <a className="btn" href="https://wa.me/918625049137" target="_blank">
          Book on WhatsApp
        </a>
      </section>

      <section className="section">
        
        <h2>ABOUT INSTRUCTOR</h2>
        <p>
          Professional dance instructor with years of experience teaching
          Bharatanatyam, Bollywood, and freestyle dance. She is a passionate dance instructor teaching
            Bollywood and Semi-Classical dance styles for kids. Classes
            are designed for beginners to advanced levels focusing on
            rhythm, confidence and stage performance.
        </p>
      </section>

      {/* DANCE STYLES */}
      <section className="section">
        <h2>Dance Styles</h2>
        <div className="grid">
          <div className="card">
            <h3>Bollywood</h3>
            <p>Energetic Bollywood choreography for kids.</p>
          </div>
          <div className="card">
            <h3>Semi Classical</h3>
            <p>Beautiful mix of classical grace and modern moves.</p>
          </div>
          <div className="card">
            <h3>Kids Dance</h3>
            <p>Special batches designed for kids beginners.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Why Join Our Dance Class</h2>
        <div className="grid">
          <div className="card">Kids Friendly Classes</div>
          <div className="card">Stage Performance Training</div>
          <div className="card">Weekend Batches</div>
          <div className="card">Small Batch Size</div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <h2>Student Performances</h2>
        <div className="grid">
          <img src="./images/pic1.png"/>
          <img src="./images/pic2.png"/>
          <img src="./images/pic3.png"/>
          <img src="./images/pic4.png"/>
          <img src="./images/pic5.png"/>
          <img src="./images/pic6.png"/>
          <img src="./images/pic7.png"/>
          <img src="./images/pic8.png"/>
          <img src="./images/pic9.png"/>
          <img src="./images/pic10.png"/>
          <img src="./images/image3.jfif"/>
          <img src="./images/image4.jfif"/>
          <img src="./images/image5.jfif"/>
          <img src="./images/image66.jfif"/>
          <img src="./images/image7.jfif"/>
          <img src="./images/image8.jfif"/>
          <img src="./images/image9.jfif"/>
          <img src="./images/image10.jfif"/>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="section">
        <h2>Dance Videos</h2>
        <div className="grid">
          <iframe src="https://www.youtube.com/embed/7LRMVzjylpA?si=vqrGkZQhPqgd0hrO" height="250"></iframe>
          <iframe src="https://www.youtube.com/embed/udih_s_PUFY?si=pRmCzyWQkPr7QRku" height="250"></iframe>
          <iframe src="https://www.youtube.com/embed/rOWKptMqdg8?si=ZAkr0KFFLLs?si=N8T7Qm75RcXnUxJE" height="250"></iframe>
          
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Student Testimonials</h2>
        <div className="grid">
          <div className="card">
            "Amazing dance teacher. My daughter gained confidence."
          </div>
          <div className="card">
            "Very fun Bollywood choreography and great teaching style."
          </div>
          <div className="card">
            "Best dance class in Ghansoli for kids beginners."
          </div>
        </div>
      </section>

      {/* CLASS DETAILS */}
      <section className="section">
        <h2>Class Details</h2>
        <div className="grid">
          <div className="card">
            Saturday & Sunday <br/> 6:00 pm - 7:30 pm
          </div>
          <div className="card">
            Ghansoli Sector 4 <br/> Little Learners Preschool
          </div>
          <div className="card">
            Contact: 8625049137
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section center">
        <h2>Follow Our Dance Journey</h2>
        <p>Follow us on Instagram for latest dance videos</p>
        <a className="btn" href="https://www.instagram.com/__annapoorna_shetty___?igsh=M2phNW9manZnMGZ0" target="_blank">
          Visit Instagram
        </a>
      </section>

      <section className="section">
        <h2>Location</h2>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
        ></iframe>
      </section>


      <footer className="footer">
        © 2026 Annapoorna Shetty Dance Academy
      </footer>

    </div>
  );
}
