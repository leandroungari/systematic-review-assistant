import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default class Panel extends Component {
  renderPanel = () => {
    const { enable } = this.props;

    if (enable) {
      return (
        <Grid>
          <Typography>Panel</Typography>
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          style={{
            width: window.innerWidth,
            height: 400,
            opacity: 0.5
          }}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="body1">
            Para começar, crie uma nova revisão.
          </Typography>
        </Grid>
      );
    }
  };

  render() {
    return <div className="panel">{this.renderPanel()}</div>;
  }
}
