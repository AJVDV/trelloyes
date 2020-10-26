import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card';

const cards = {Card};

cards.defaultProps = {
    store: {
    lists: [],
    allCards: {},
    }
};

describe('Messages component', () => {
    it('renders without crashing', () => {
      const section = document.createElement('section');
      ReactDOM.render(<List  />, section);
      ReactDOM.unmountComponentAtNode(section);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List name="List"  />)
        .toJSON();
      expect(tree).toMatchSnapshot();   
    });
  });