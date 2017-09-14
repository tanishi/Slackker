import * as React from 'react';


interface Props {
  userName: string;
  text: string;
  channelName: string;
}

export default class Post extends React.Component < any, any > {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}
