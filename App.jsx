
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
    <img src="/DanceStudio/images/pic1.png" alt="Student Performance 1"/>
    <img src="/DanceStudio/images/pic2.png" alt="Student Performance 2"/>
    <img src="/DanceStudio/images/pic3.png" alt="Student Performance 3"/>
    <img src="/DanceStudio/images/pic4.png" alt="Student Performance 4"/>
    <img src="/DanceStudio/images/pic5.png" alt="Student Performance 5"/>
    <img src="/DanceStudio/images/pic6.png" alt="Student Performance 6"/>
    <img src="/DanceStudio/images/pic7.png" alt="Student Performance 7"/>
    <img src="/DanceStudio/images/pic8.png" alt="Student Performance 8"/>
    <img src="/DanceStudio/images/pic9.png" alt="Student Performance 9"/>
    <img src="/DanceStudio/images/pic10.png" alt="Student Performance 10"/>
    <img src="/DanceStudio/images/567703521_18132218365477434_3876392418664913414_n..jpg" alt="Performance"/>
    <img src="/DanceStudio/images/image2.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image3.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image4.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image5.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image66.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image7.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image8.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image9.jfif" alt="Student Performance"/>
    <img src="/DanceStudio/images/image10.jfif" alt="Student Performance"/>
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
