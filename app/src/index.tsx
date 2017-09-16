import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Https from 'https';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles/';

import Column from './components/Column';

import { httpsGet } from './utils';
import Team from './Team';
import { API_TOKEN, KUMOKUMO_API_TOKEN } from './config';


const theme = createMuiTheme();

class App extends React.Component < any, any > {
  oknctTeam;
  constructor() {
    super();

    this.oknctTeam = new Team(API_TOKEN);
    httpsGet(`https://slack.com/api/rtm.start?token=${API_TOKEN}`, (data) => {
      const obj = JSON.parse(data);
      this.oknctTeam.indexTeamData(obj);
      this.oknctTeam.resolveName(obj);
      console.log(this.oknctTeam);
    });

    httpsGet(`https://slack.com/api/rtm.start?token=${KUMOKUMO_API_TOKEN}`, (data) => {
      const obj = JSON.parse(data);
    });
  }

  render() {
    const URL = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;
    const KUMOKUMO_URL = `https://slack.com/api/rtm.connect?token=${KUMOKUMO_API_TOKEN}`;

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          <Column url={URL} />
          <Column url={KUMOKUMO_URL} />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
