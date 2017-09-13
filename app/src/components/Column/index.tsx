import * as React from 'react';

import Post from './Post';


interface Props {
}

export default class Column extends React.Component < any, any > {
  constructor() {
    super();

    this.state = { messages: [] };

    Https.get(URL, (res) => {
      res.on('data', (chunk : Buffer) => {
        const obj = JSON.parse(chunk.toString('utf8'));
        const ws = new WebSocket(obj.url);

        ws.on('message', (data) => {
          const json = JSON.parse(data);
          if (json.type === 'message') {
            this.setState({ messages: this.state.messages.push(text) });
          }
        });
      });
    });
  }

  render() {
    return {this.state.messages.map(message => <Post text={message} />)};
  }
}
