import React from "react";
import CustomLink from "../../../utils/Link/CustomLink";
import { BiMessageSquareDetail } from "react-icons/bi";

// --- Main About Us Component ---
const About: React.FC = () => {
  return (
    <section id="aboutus" className="CONTAINER">
      <div className="SCREEN">
        <h2 className="TITLE GRADIENT">ABOUT US</h2>
        <div className="FLEX COL mr-0 sm:mr-32 md:mr-64 ALL">
          <p className="ABOUTUS-PARAGRAPH">Welcome to <span className="ABOUTUS-HIGHLIGHT">SnippetLabs</span> — a team of
            passionate friends who turned their love for coding into a full-fledged
            software development studio. We're a close-knit group of developers, designers,
            and thinkers dedicated to building meaningful web and mobile applications.</p>
          <p className="ABOUTUS-PARAGRAPH">
            Over the years, we've delivered custom, performant, and secure solutions for
            diverse clients, helping businesses and startups bring their ideas to life.
            From MVPs to full-scale platforms, we craft solutions with modern technologies
            that ensure future-readiness.
          </p>
          <p className="ABOUTUS-PARAGRAPH">
            <span className="ABOUTUS-HIGHLIGHT">Why choose us?</span> We're experienced, collaborative,
            and client-focused, always staying on top of the latest tools. We don't just write code;
            we craft solutions that truly matter. Let's build something great, together.
          </p>
          <p className="ABOUTUS-PARAGRAPH">
            <span className="ABOUTUS-HIGHLIGHT FULL inline-block italic text-center">- Team SnippetLabs</span>
          </p>
        </div>

        <CustomLink
          to="/contactus"
          name="Contact Us"
          icon={<BiMessageSquareDetail className='text-2xl' />}
          linkClass="sm:sticky bottom-6 right-6
                    w-auto pt-10 px-10 sm:p-0
                    FLEX-END" />
      </div>
    </section>
  );
};

export default About;