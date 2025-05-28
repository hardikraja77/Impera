import React from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
  {
    text: "I ordered a bouquet for my sister's wedding, and it was absolutely stunning! The flowers were fresh, vibrant, and exceeded all my expectations. The attention to detail in every arrangement was fantastic!",
    name: "Samantha",
    rating: 5,
    img: "/images/sam.jpeg"
  },
  {
    text: "I've been using Jane Florist for years, and they never disappoint. Whether it’s for a special occasion or just because, the flowers are always perfect and last so long. Highly recommend!",
    name: "Sai Pallavi",
    rating: 5,
    img: "/images/sai.jpeg"
  },
  
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className='out_test'>
      <div className='test'>
      <h2>What Our Customers Are Saying</h2>
      <p className="testimonial-sub">
        we believe that every bouquet tells a story, and we’re proud to share the experiences of our satisfied customers.
        From weddings and anniversaries to birthdays and everyday moments.
      </p>
      </div>
      <div className='rev-group'>
      <div className="rev">
          <h4>1,000+</h4>
          <p>Happy customer</p>
        </div>
        <div className="rev">
          <h4>99.9%</h4>
          <p>Customer satisfaction</p>
        </div>
        </div>
        </div>


      <div className='out_stats'>
      <div className="stats-row">
        <div className="stat-card blue">
          <h4>Delivery Success Rate</h4>
          <p className="big">95%</p>
        </div>
        <div className="stat-card black">
          <h4>Repeat Customers</h4>
          <p>An impressive 85% of our customers return to us time and time again for their floral needs.</p>
        </div>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-user">
              <img src={t.img} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <div className="stars">{"⭐".repeat(t.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
