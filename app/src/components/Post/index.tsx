import * as React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
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
  title: {
    marginBottom: 16,
    fontSize: 14,
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
          <CardContent>
            <Typography>
              {this.props.channel}
              {this.props.user}
            </Typography>
            <Typography>
              {this.props.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
