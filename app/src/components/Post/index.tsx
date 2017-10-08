import * as React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';


interface Classes {
  card: string;
  title: string;
}

interface Props {
  classes: Classes;
  user: string;
  text: string;
  channel: string;
}

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: '5px 10px 0px',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
});

class Post extends React.Component < Props, any > {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { classes, user, channel, text } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              {`${channel} : ${channel}`}
            </Typography>
            <Typography>
              {text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
