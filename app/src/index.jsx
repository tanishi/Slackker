// @flow

import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  const x : string = 'string';
  return <div>{`Hello World ${x}`}</div>;
}

ReactDOM.render(<Hello />, document.getElementById('app'));
