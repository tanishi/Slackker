import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';
import { withTheme } from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import { httpsGet } from '../../utils';
import Post from '../Post';


interface Props {
  url: string;
}

interface Message {
  ts: string;
  user: string;
  text: string;
  channel: string;
}

interface State {
  messages: Message[];
}

class Column extends React.Component < Props, State > {
  constructor(props) {
    super();

    this.props = props;
    this.state = { messages: [] };

    httpsGet(this.props.url, (data) => {
      const obj = JSON.parse(data);
      const ws = new WebSocket(obj.url);

      ws.on('message', (data) => {
        const json = JSON.parse(data);
        if (json.type === 'message') {
          console.log(json);
          this.setState({ messages: ([json]).concat(this.state.messages) });
        }
      });
    });
  }

  displayColumn() {
    console.log(this.state.messages);
    return this.state.messages.map(message => (
      <Post
        key={`${message.ts}`}
        user={message.user}
        text={message.text}
        channel={message.channel}
      />
    ));
  }

  render() {
    return (
      <Grid container>
        <Paper>
          {this.displayColumn()}
        </Paper>
      </Grid>
    );
  }
}

export default withTheme(Column);
