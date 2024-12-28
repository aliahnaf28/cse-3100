import React from 'react';
import './AboutUs.css'; // Optional: Add a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Adoption, our mission is to provide a loving and safe environment for every cat in need. 
          We strive to connect cats with caring families to ensure they have a forever home.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Established in 2010, Purrfect Adoption started as a small rescue shelter for abandoned cats. Over the years, 
          we have grown into a community-focused organization that has helped rehome over 5,000 cats.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          We are a group of passionate cat lovers, including veterinarians, volunteers, and foster families, 
          all dedicated to the well-being of our feline friends.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
