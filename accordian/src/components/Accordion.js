import React from "react";
import { useState } from "react";
import { faqs } from "../data";
import AccordionItem from "./AccordionItem";

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
