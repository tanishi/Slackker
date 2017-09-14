import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';

import Post from './Post';

import { API_TOKEN } from '../../config';


interface Props {
}

interface State {
  message: string[];
}

export default class Column extends React.Component < any, any > {
  constructor() {
    super();

    this.state = { messages: [] };

    const URL = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;

    Https.get(URL, (res) => {
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
