import React from 'react';

const footerStyles = {
  container: {
    backgroundColor: '#080808ff', // Deep Blue background
    color: '#ffffff',
    padding: '60px 20px 40px',
    marginTop: '60px',
    fontFamily: '"Segoe UI", Roboto, Arial, sans-serif',
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  column: {
    flex: '1 1 250px',
    minWidth: '220px',
  },
  header: {
    fontWeight: '700',
    fontSize: '1.3em',
    marginBottom: '15px',
    color: '#ff9800', // Orange accent
    borderBottom: '2px solid #ff9800',
    display: 'inline-block',
    paddingBottom: '5px',
    letterSpacing: '0.5px',
  },
  text: {
    color: 'rgba(255,255,255,0.85)',
    lineHeight: '1.6',
    fontSize: '0.95em',
  },
  link: {
    display: 'block',
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
  },
  linkHover: {
    color: '#ff9800', // Orange hover
    transform: 'translateX(5px)',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '0.9em',
    color: 'rgba(255,255,255,0.7)',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '20px',
  },
};

export default function Footer() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.innerContainer}>
        {/* About */}
        <div style={footerStyles.column}>
          <h3 style={footerStyles.header}>Morning Bells Academy</h3>
          <p style={footerStyles.text}>
            Nurturing young minds in Rishikesh for a brighter and promising future. We believe in holistic education and lifelong learning.
          </p>
        </div>

        {/* Quick Contact */}
        <div style={footerStyles.column}>
          <h3 style={footerStyles.header}>Quick Contact</h3>
          {[
            { label: 'Phone: +91 135-245XXXX', href: 'tel:+91135245XXXX' },
            { label: 'Email: info@morningbellsrishikesh.edu', href: 'mailto:info@morningbellsrishikesh.edu' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                ...footerStyles.link,
                ...(hoveredLink === i ? footerStyles.linkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.label}
            </a>
          ))}
          <span style={footerStyles.text}>Office Hours: Mon–Fri, 9:00 AM – 3:00 PM</span>
        </div>

        {/* Location */}
        <div style={footerStyles.column}>
          <h3 style={footerStyles.header}>Our Location</h3>
          <p style={footerStyles.text}>
            Near IDPL Township, Virbhadra<br />
            Rishikesh, Dehradun, Uttarakhand – 249202
          </p>
        </div>
      </div>

      <div style={footerStyles.copyright}>
        © {new Date().getFullYear()} Morning Bells Academy. All rights reserved.
      </div>
    </footer>
  );
}
