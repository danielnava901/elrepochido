import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './js/components/container/FormContainer';

const Index = () => {
  return <div>
    <FormContainer />
  </div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));
