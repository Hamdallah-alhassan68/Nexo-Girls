import React from 'react';

export default function PageHero({ image, title, description, children, className = '' }) {
  return (
    <section
      className={`hero page-hero ${className}`.trim()}
      style={{ '--hero-image': `url("${image}")` }}
    >
      <div className="overlay">
        <h1>{title}</h1>
        {description && <p className="join">{description}</p>}
        {children}
      </div>
    </section>
  );
}
