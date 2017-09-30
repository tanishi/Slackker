import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Https from 'https';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import pink from 'material-ui/colors/pink';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';

import Column from './components/Column';

import { httpsGet } from './utils';
import Team from './Team';
import API_TOKENS from './API_TOKENS';


const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: {
      ...blue,
    },
    error: red,
  },
});

class App extends React.Component < any, any > {
  teams: Team[];

  constructor() {
    super();

    this.initialize();
  }

  initialize() {
    console.log(API_TOKENS);
    this.teams = [];

    API_TOKENS.map((API_TOKEN, index) => {
      const START_API = `https://slack.com/api/rtm.start?token=${API_TOKEN}`;
      this.teams.push(new Team(API_TOKEN));

      httpsGet(START_API, (data) => {
        const obj = JSON.parse(data);
        this.teams[index].indexTeamData(obj);
      });
    });
  }

  render() {
    const columns = API_TOKENS.map(API_TOKEN =>
      <Column key={`${API_TOKEN}`} url={`https://slack.com/api/rtm.connect?token=${API_TOKEN}`} />);

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          {columns}
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
