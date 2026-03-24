import "../styles/testimonials.css";

const reviews = [
  {
    name: "Vlad Bolotov",
    meta: "Local Guide",
    date: "2 weeks ago",
    text: "Excellent place very fast service. Great price and easy to deal with. Highly recommend.",
    highlight: "Fast turnaround and fair pricing",
  },
  {
    name: "Shane",
    meta: "Google Review",
    date: "1 month ago",
    text: "I've been coming to this place for wheel rotations and tire replacements. They've always been honest and consistently offer fair pricing.",
    highlight: "Trusted for repeat visits",
  },
  {
    name: "Ramsay Williams",
    meta: "Google Review",
    date: "1 week ago",
    text: "Excellent professional service. Came to my rescue on a long weekend and repaired a punctured tyre in 15 minutes for very reasonable cost.",
    highlight: "Emergency puncture help in 15 minutes",
  },
  {
    name: "Dan Regan",
    meta: "Google Review",
    date: "2 months ago",
    text: "Called and was quoted a very good price for two tyres and alignment. They performed work while I waited and were very polite and courteous.",
    highlight: "Quoted clearly and completed while waiting",
  },
  {
    name: "Ryan Green",
    meta: "Local Guide",
    date: "6 months ago",
    text: "I had a flat tyre and they fixed the puncture in about 20 mins. Would highly recommend. Amazing work and very fast.",
    highlight: "Puncture fixed in about 20 minutes",
  },
  {
    name: "Kyriacos Akathiotis",
    meta: "Google Review",
    date: "1 month ago",
    text: "A very friendly and helpful team. I had my wife's BMW and my Commodore fitted out quickly and with ease. Highly recommend Ali and his team. Thanks again Ali.",
    highlight: "Friendly team and quick fit-out",
  },
];

function ReviewAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return <div className="testimonial-avatar">{initials}</div>;
}

function StarRating() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <i className="fa-solid fa-star" key={index}></i>
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <span className="testimonials-kicker">Google Reviews</span>
          <h2 className="section-title">What Drivers Say About Our Service</h2>
          <p className="testimonials-intro">
            Real feedback from customers who booked tyre replacement, puncture
            repair, wheel rotations, and alignment services.
          </p>
        </div>

        <div className="testimonials-summary">
          <div className="testimonials-score">
            <strong>5.0</strong>
            <span>Average review feel across recent feedback</span>
          </div>

          <div className="testimonials-stars" aria-label="5 star reviews">
            <span>
              <StarRating />
            </span>
          </div>

          <p>
            Customers consistently call out quick help, fair pricing, and
            professional service.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={`${review.name}-${review.date}`}>
              <div className="testimonial-top">
                <div className="testimonial-person">
                  <ReviewAvatar name={review.name} />

                  <div>
                    <h3>{review.name}</h3>
                    <p>
                      {review.meta} <span>&bull;</span> {review.date}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating" aria-hidden="true">
                  <StarRating />
                </div>
              </div>

              <div className="testimonial-highlight">{review.highlight}</div>

              <p className="testimonial-text">"{review.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
