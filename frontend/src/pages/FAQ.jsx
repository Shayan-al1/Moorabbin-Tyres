import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/faq.css";

const faqItems = [
  {
    question: "What tyre services can I book with your team?",
    answer:
      "You can book puncture repairs, tyre replacement, wheel balancing, tyre rotation, seasonal tyre checks, pressure checks and general tyre inspections. If you are not sure what service you need, the inspection option is the safest place to start.",
    category: "Services",
  },
  {
    question: "Do you offer same-day tyre service bookings?",
    answer:
      "Same-day availability depends on demand, but urgent bookings are one of the most common requests. The quickest route is to use the booking page and include your vehicle details so the team can confirm the fastest slot.",
    category: "Bookings",
  },
  {
    question: "How do I know if my tyre needs repair or full replacement?",
    answer:
      "A small puncture in the repairable tread area can often be fixed, while sidewall damage, deep cracks, repeated punctures and very low tread usually mean replacement is the safer option. If there is any doubt, a professional inspection should decide it.",
    category: "Safety",
  },
  {
    question: "Can I drive with a punctured or slowly leaking tyre?",
    answer:
      "It is better not to. Driving on a damaged or underinflated tyre can worsen the damage, reduce braking performance and increase the risk of a blowout. A prompt inspection helps avoid turning a minor repair into a full tyre replacement.",
    category: "Safety",
  },
  {
    question: "How often should tyres be rotated and balanced?",
    answer:
      "A practical rule is to check rotation and balancing every 8,000 to 10,000 kilometres, or sooner if you notice vibration, uneven wear or steering pull. Regular maintenance helps extend tyre life and improves ride quality.",
    category: "Maintenance",
  },
  {
    question: "What are the signs that wheel alignment may be off?",
    answer:
      "Common signs include the car pulling to one side, uneven tyre wear, an off-centre steering wheel and reduced straight-line stability. Alignment issues can shorten tyre life quickly, so they should be checked early.",
    category: "Maintenance",
  },
  {
    question: "Do you help customers choose the right tyres for their vehicle?",
    answer:
      "Yes. Tyre recommendations usually depend on the vehicle type, manufacturer size requirements, driving conditions, budget and whether comfort, durability or grip matters most. Sharing your registration or tyre size helps narrow the best options faster.",
    category: "Tyre Buying",
  },
  {
    question: "How long does a typical tyre service appointment take?",
    answer:
      "Simple checks and puncture repairs can be relatively quick, while tyre replacement, balancing and additional inspections take longer. Appointment length depends on the vehicle and the work required, but booking ahead reduces waiting time.",
    category: "Bookings",
  },
  {
    question: "When should I replace my tyres?",
    answer:
      "Tyres should be replaced when tread depth is low, wear is uneven, the rubber is aging or there is structural damage. If traction in wet conditions feels worse than usual, that is another sign the tyres may be nearing the end of service life.",
    category: "Tyre Buying",
  },
  {
    question: "Why is a FAQ page useful before booking tyre service?",
    answer:
      "A strong FAQ page gives quick answers on pricing expectations, service types, warning signs and booking preparation. That saves time for customers and helps search engines understand the site topics more clearly.",
    category: "Bookings",
  },
];

const categoryHighlights = [
  "Tyre puncture repair and emergency advice",
  "Wheel balancing, rotation and alignment warning signs",
  "Replacement guidance for worn, cracked or damaged tyres",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Tyre Service FAQ | Common Questions Before You Book</title>
        <meta
          name="description"
          content="Read common tyre service questions about puncture repair, tyre replacement, balancing, booking times and maintenance before scheduling your service."
        />
        <meta
          name="keywords"
          content="tyre service FAQ, puncture repair questions, tyre replacement advice, wheel balancing FAQ, tyre booking help"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="faq-page">
        <section className="faq-hero">
          <div className="container faq-hero__grid">
            <div className="faq-hero__content">
              <span className="faq-eyebrow">Helpful Answers Before You Book</span>
              <h1>Tyre Service FAQ</h1>
              <p>
                Clear answers about tyre repairs, replacement, balancing,
                maintenance and booking expectations so customers can make
                faster decisions and arrive better prepared.
              </p>

              <div className="faq-hero__chips">
                {categoryHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="faq-hero__card">
              <p className="faq-hero__card-label">Most searched topics</p>
              <ul>
                <li>How to spot unsafe tyre wear</li>
                <li>When puncture repair is possible</li>
                <li>How often tyres should be rotated</li>
                <li>What to expect before booking service</li>
              </ul>
              <Link to="/bookings">Book a tyre service</Link>
            </aside>
          </div>
        </section>

        <section className="faq-content">
          <div className="container faq-layout">
            <div className="faq-intro">
              <span>Search-friendly service guide</span>
              <h2>Answers built around real customer questions</h2>
              <p>
                This page is designed to help drivers understand common tyre
                issues, common maintenance intervals and the safest next step
                before visiting the workshop.
              </p>
            </div>

            <div className="faq-list" aria-label="Frequently asked questions">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question__category">
                        {item.category}
                      </span>
                      <span className="faq-question__text">{item.question}</span>
                      <span className="faq-question__icon">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="faq-cta">
          <div className="faq-cta__box">
            <div>
              <span>Need a direct answer?</span>
              <h2>Book your tyre service with confidence</h2>
              <p>
                If your question is not covered here, use the booking page and
                include your tyre size, vehicle model and the issue you are
                experiencing.
              </p>
            </div>
            <div className="faq-cta__actions">
              <Link to="/bookings" className="faq-cta__primary">
                Book Service
              </Link>
              <Link to="/contact" className="faq-cta__secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
