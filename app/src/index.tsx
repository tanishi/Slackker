import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Column from './components/Column';

class App extends React.Component < any, any > {
  constructor() {
    super();
  }

  render() {
    return <Column />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
