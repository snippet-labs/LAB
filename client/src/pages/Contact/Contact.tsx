import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="CONTAINER">
      <div className="SCREEN PTOP">
        <h2 className="TITLE">CONTACT US</h2>
        <Link to="/" className="text-white">
          HOME
        </Link>
      </div>
    </section>
  );
};

export default Contact;
