import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';

import Post from './Post';


interface Props {
  url: string;
}

interface State {
  messages: string[];
}

export default class Column extends React.Component < Props, State > {
  constructor(props) {
    super();

    this.props = props;
    this.state = { messages: [] };

    Https.get(this.props.url, (res) => {
      res.on('data', (chunk : Buffer) => {
        const obj = JSON.parse(chunk.toString('utf8'));
        const ws = new WebSocket(obj.url);

        ws.on('message', (data) => {
          const json = JSON.parse(data);
          if (json.type === 'message') {
            this.setState({ messages: ([json.text]).concat(this.state.messages) });
          }
        });
      });
    });
  }

  displayPost() {
    return this.state.messages.map(message => <Post key={`${message}`} text={message} />);
  }

  render() {
    return (
      <div>
        {this.displayPost()}
      </div>
    );
  }
}
