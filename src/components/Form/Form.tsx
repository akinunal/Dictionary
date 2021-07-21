import React from 'react';
import { observer } from "mobx-react-lite";
import styled from '@emotion/styled';
import Input from './Input/Input';
import SameLetterComponent from './SameLetterComponent/SameLetterComponent'

const StyledDiv = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #CCC;
  margin-left: 100px;
  border: 1px solid #CCC;
`;

interface FormProps {
  store: any
}

const Form = observer(({ store }: FormProps) => {

  const handleStateChange = (a: number, b: string) => {
    store.changeOptionValue(a, b)
  }

  return (
    <StyledDiv>
      {store.options.map((obj: any, index: number) => {
        if (obj.type === 'same') {
          return (
            <SameLetterComponent
              key={index}
              state={obj}
              words={store.words}
            />
          )
        } else {
          return (
            <Input
              key={index}
              state={obj}
              handleStateChange={handleStateChange}
              maxLength={index < 3 ? 1 : 20}
              index={index}
              words={store.words}
            />
          )
        } 
      })}
    </StyledDiv>
  )
})

export default Form
