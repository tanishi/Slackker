import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles/MuiThemeProvider';


import Column from './components/Column';

import { API_TOKEN, KUMOKUMO_API_TOKEN } from './config';


class App extends React.Component < any, any > {
  constructor() {
    super();
  }

  render() {
    const URL = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;
    const KUMOKUMO_URL = `https://slack.com/api/rtm.connect?token=${KUMOKUMO_API_TOKEN}`;

    return (
      <MuiThemeProvider>
        <div style={{ display: 'flex' }}>
          <Column url={URL}/>
          <Column url={KUMOKUMO_URL}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
