import React, { useState } from 'react';
import styled from '@emotion/styled';
import WordList from './Word/Word';

const color = '#CCC';

const StyledDiv = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  color: ${color};
  // border: 1px solid #ccc;
`;

const StyledInput = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  outline: none;
  border: 1px solid gray;
  background-color: transparent;
  color: #CCC;
  &::placeholder {
    color: gray;
  }
`;

const StyledParagraph = styled.p`
  border-bottom: 1px solid #CCC;
  padding-bottom: 5px;
  margin: 0;
  margin-bottom: 5px;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

interface DictionaryProps {
  words: string[],
  store: any
};

const DictionaryContainer = ({ words, store } : DictionaryProps) => {
  const [word, setWord] = useState('');

  const handleOnKeydownInput = (e: any) => {
    if (e.key === 'Enter') handleAddNewWord();
  };

  const handleAddNewWord = () => {
    if (word.length) {
      store.addNewWord(word);
      setWord('');
    }
  };

  return (
    <StyledDiv>
      <StyledParagraph>({words.length}) Words in dictionary:</StyledParagraph>
      <StyledUl>
        {words.sort().map((word, index) => {
          return (
            <WordList word={word} key={index} />
          );
        })}
      </StyledUl>
      <StyledInput
        type="text"
        placeholder="Add new words"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={(e) => handleOnKeydownInput(e)}
      />
    </StyledDiv>
  );
};

export default DictionaryContainer;
