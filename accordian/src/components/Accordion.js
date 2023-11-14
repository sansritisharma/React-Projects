import React from "react";
import { faqs } from "../data";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = () => {
  return (
    <ul>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;
