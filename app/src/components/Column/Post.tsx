import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';

import { API_TOKEN } from '../../config';


interface Props {
}

const URL = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;

export default class Post extends React.Component < any, any > {
  constructor() {
    super();

    this.state = { text: 'nico' };

    Https.get(URL, (res) => {
      res.on('data', (chunk : Buffer) => {
        const obj = JSON.parse(chunk.toString('utf8'));
        const ws = new WebSocket(obj.url);

        ws.on('message', (data) => {
          const json = JSON.parse(data);
          if (json.type === 'message') {
            this.setState({ text: json.text });
          }
        });
      });
    });
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}
