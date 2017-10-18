import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';
import { withTheme } from 'material-ui/styles';
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
          this.setState({ messages: ([json]).concat(this.state.messages) });
        }
      });
    });
  }

  displayColumn() {
    const { messages } = this.state;

    return messages.map(message => (
      <Post
        key={`${message.ts}`}
        user={message.user}
        text={message.text}
        channel={message.channel}
      />
    ));
  }

  hasMessages() {
    return this.state.messages.length !== 0;
  }

  render() {
    return (
      this.hasMessages() ?
      (
        <Grid>
          <Paper style={{ margin: '10px 20px', padding: '10px', width: '300px', height:'100%' }}>
            {this.displayColumn()}
          </Paper>
        </Grid>
      ) : <div />
    );
  }
}

export default withTheme(Column);
