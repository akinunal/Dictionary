import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import './index.css';
import App from './App';
class Store {
  constructor() {
    makeAutoObservable(this);
  }

  words = [
    'Abandon',
    'Effect',
    'Weekend',
    'Cable',
    'Battle',
    'Cheese',
    'Oil',
    'Company',
    'Commit',
    'Government',
    'Dance',
    'Solution',
    'Olive',
    'Salad',
    'Economic',
    'Gym',
    'Emergency',
    'Investor',
    'Japanese',
    'Launch',
    'Literally',
    'Mall',
    'Office',
    'Favorite',
    'Package',
    'Tank',
    'Officer',
    'Totally',
    'Zone',
  ];

  options = [
    {
      title: "How many words start with the letter",
      value: '',
      type: 'start'
    },
    {
      title: "How many times does the letter appear in the dictionary",
      value: '',
      type: 'appear'
    },
    {
      title: "How many words end with the letter",
      value: '',
      type: 'end'
    },
    {
      title: "How many words have the same letter repeated in conjunction?",
      value: '',
      type: 'same'
    }
  ]

  addNewWord(word: string) {
    this.words = [...this.words, word];
  }

  changeOptionValue(index: number, letter: string) {
    this.options[index].value = letter;
  }
}

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
