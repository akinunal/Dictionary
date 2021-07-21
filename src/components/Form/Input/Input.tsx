import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  padding: 2px 6px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 2px 6px;
  margin: 0 5px;
  max-width: 40px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
  color: #CCC;
  text-align: center;
  &::placeholder {
    color: gray;
  }
`;

const StyledParagraph = styled.span`
  margin-left: 10px;
  color: orange;
  font-weight: bold;
`;

interface InputProps {
  state: any,
  handleStateChange: any,
  maxLength: number,
  index: number,
  words: string[]
};

const Input = ({ state, handleStateChange, maxLength, index, words }: InputProps) => {
  const [value, setValue] = useState('');
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    if (value.length) handleStateChange(index, value);
  }, [value, index, handleStateChange]);

  const handleOnKeyDown = (e: any) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setShowCount(false)
    }
  }

  const getResults = () => {
    switch(state.type) {
      case 'start':
        return words.filter(word => word.toLowerCase().startsWith(value.toLowerCase())).length
      case 'appear':
        return words.filter(word => word.toLowerCase().includes(value.toLowerCase())).length
      case 'end':
        return words.filter(word => word.toLowerCase().endsWith(value.toLowerCase())).length
      default: return null
    }
  }

  return (
    <StyledDiv>
      <label>{state.title}</label>
      <StyledInput
        type="text"
        placeholder="Letter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        maxLength={maxLength}
        onBlur={() => {value.length && setShowCount(true)}}
      />
      ?
      <StyledParagraph>{showCount && getResults()}</StyledParagraph>
    </StyledDiv>
  )
}

export default Input
