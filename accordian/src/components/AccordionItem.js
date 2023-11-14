import React, { useState } from "react";
import './Accordion.css';

const AccordionItem = ({ faq }) => {
  const [show, setShow] = useState(false);

  const { question, answer } = faq; //destructuring
  return (
    <li className="accordion_item">
      <button className="button" onClick={ () => setShow(!show)}>
        <p>{question}</p>
        <span className="control">{show ? "-" : "+"}</span>
      </button>

      {show && (
        <div className="answer_wrapper">
          <div className="answer">{answer}</div>
        </div>
      )}
    </li>
  );
};

export default AccordionItem;
