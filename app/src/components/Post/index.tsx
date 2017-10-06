import * as React from 'react';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';


interface Props {
  userName: string;
  text: string;
  channelName: string;
}

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class Post extends React.Component < any, any > {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Card style={{ padding: '10px' }}>
          {this.props.text}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
