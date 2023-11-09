import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [showDescription]);

  return (
    <div className="faq__question" key={item.title}>
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          className={`faq__question-button ${fontWeightBold}`}
          onClick={onClick}
        >
          {item.title}
        </button>
      </dt>
      <dd>
        <p
          ref={contentRef}
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={`faq__desc ${showDescription}`}
          style={{ height: showDescription ? contentHeight : 0 }}
        >
          {item.description}
        </p>
      </dd>
    </div>
  );
};

export default AccordionItem;
