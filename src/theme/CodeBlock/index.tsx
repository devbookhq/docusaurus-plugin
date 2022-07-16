import React from 'react';
import CodeBlock, { type Props } from '@theme-init/CodeBlock';
//import './styles.css';
const css = require('./styles.css');


export default function CodeBlockWrapper(props: Props) {
  return (
    <div className="dbk-wrapper">
      <div className="dbk-feedback-btns">
        <span>Devbook</span>
        <span>Devbook</span>
        <span>Devbook</span>
      </div>
      <CodeBlock {...props} />
    </div>
  );
}
