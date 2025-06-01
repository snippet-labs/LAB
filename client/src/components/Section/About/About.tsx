import React from "react";
import CustomLink from "../../../utils/Link/CustomLink";

// --- Main About Us Component ---
const About: React.FC = () => {
    const _contactUsPath = '/contactus'; // Default path for contact us page
    return (
        <>
            <section id="aboutus" className="CONTAINER">
                <div className="SCREEN">
                    <h2 className="TITLE">ABOUT US</h2>
                    <div className="FLEX mr-0 sm:mr-32 md:mr-64 ALL">
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

                    < CustomLink to={_contactUsPath} name="Contact Us" />
                </div>
            </section>
        </>
    );
};

export default About;