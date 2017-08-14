import * as React from 'react';
import * as ReactDOM from 'react-dom';


class Hello extends React.Component < any, any > {
  constructor() {
    super();
  }
  render() {
    const x : string = 'string';
    return <div>{`Hello World ${x}`}</div>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
