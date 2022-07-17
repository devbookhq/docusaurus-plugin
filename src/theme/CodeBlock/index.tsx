import React from 'react';
import CodeBlock, { type Props } from '@theme-init/CodeBlock';
import './styles.css';
//import styled from '@stitches/react';
import styled from 'styled-components';

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: red;
`;


export default function CodeBlockWrapper(props: Props) {
  return (
    <Wrapper>
      <div className="dbk-feedback-btns">
        <span>Devbook</span>
        <span>Devbook</span>
        <span>Devbook</span>
      </div>
      <CodeBlock {...props} />
    </Wrapper>
  );
}
