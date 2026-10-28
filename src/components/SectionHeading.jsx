import React from 'react';

export default function SectionHeading({ title, description, dark = false }) {
  return (
    <div className={`section-heading${dark ? ' section-heading-dark' : ''}`}>
      <h2>{title}</h2>
      <span className="overline" />
      {description && <p>{description}</p>}
    </div>
  );
}
