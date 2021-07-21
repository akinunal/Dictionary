import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import DictionaryContainer from './components/DictionaryContainer/DictionaryContainer';
import Form from './components/Form/Form';


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

interface AppProps {
  store: any
}

const App = observer(({ store }: AppProps) => {
  return (
    <StyledDiv>
      {store.words && <DictionaryContainer words={store.words} store={store} />}
      <Form store={store} />
    </StyledDiv>
  );
});

export default App;
