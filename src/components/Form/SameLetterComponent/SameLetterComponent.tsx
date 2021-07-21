import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  padding: 2px 6px;
  display: flex;
  align-items: center;
`;

const StyledParagraph = styled.span`
  margin-left: 10px;
  color: orange;
  font-weight: bold;
`;

interface InputProps {
  state: any,
  words: string[]
};

const SameLetterComponent = ({ state, words }: InputProps) => {
  const getResults = () => {
    let count = 0
    words.forEach((word, index) => {
      for(let i = 0; i < word.length; i++) {
        if (word[i] === word[i+1]) {
          count += 1;
          break;
        }
      }
    })
    return count;
  }

  return (
    <StyledDiv>
      <label>{state.title}</label>
      <StyledParagraph>{getResults()}</StyledParagraph>
    </StyledDiv>
  )
}

export default SameLetterComponent
