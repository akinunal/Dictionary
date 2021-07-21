import React from 'react';
import styled from '@emotion/styled';


const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
`;

interface WordProps {
  word: string
};

const Word = ({ word }: WordProps) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <StyledParagraph>{word}</StyledParagraph>
    </li>
  );
};

export default Word;
