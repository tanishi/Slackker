import * as React from 'react';
import * as Https from 'https';
import * as WebSocket from 'ws';

import { API_TOKEN } from '../../config';


interface Props {
  userName: string;
  text: string;
  channelName: string;
}

const URL = `https://slack.com/api/rtm.connect?token=${API_TOKEN}`;

export default class Post extends React.Component < Props, any > {
  constructor(props) {
    this.props = props;
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}
