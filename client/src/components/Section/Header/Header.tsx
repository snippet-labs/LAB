import React from 'react';

const Header: React.FC = () => {
  return (
    <section id="home" className="pt-35 px-4 mx-auto lg:px-8 xl:max-w-6xl">
      <div className="h-screen">
        <h1>Welcome to Home</h1>
        <p>This is the home section of our application.</p>
      </div>
    </section>
  );
};

export default Header;
