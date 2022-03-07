import React from "react";
import ReactMarkdown from "react-markdown";

const MarkDownText = ({ src }) => (
  <ReactMarkdown source={src} linkTarget="_blank" />
);

export default MarkDownText;
