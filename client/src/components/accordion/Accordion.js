import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ document }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedDocument = document.map((item, index) => {
    const isActive = index === activeIndex;
    const showDescription = isActive ? 'show-description' : '';
    const fontWeightBold = isActive ? 'font-weight-bold' : '';
    const ariaExpanded = isActive ? 'true' : 'false';

    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(isActive ? null : index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <h1 className="faq__title">HDB Selling Guide</h1>
      <p className='faq__intro'>
        Welcome to our comprehensive 14-step HDB Selling Guide, designed to
        empower you throughout your HDB resale journey. Selling your HDB can be
        a rewarding experience, and we're here to guide you every step of the
        way. In this guide, you'll find invaluable insights, tips, and practical
        instructions to navigate the process seamlessly. From registering your
        Intent to Sell to attending the Resale Completion Appointment, we've got
        you covered. Get ready to embark on a successful selling experience, as
        we equip you with the knowledge and tools to achieve your selling goals.
        Let's begin this exciting journey together!
      </p>
      <dl className="faq__list">{renderedDocument}</dl>
    </div>
  );
};

export default Accordion;
