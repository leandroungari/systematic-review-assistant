import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class Article extends React.Component {
  render() {
    const { title, author, abstract } = this.props;
    return (
      <Paper
        elevation={1}
        style={{
          width: 0.5 * window.innerWidth,
          padding: "15px 20px"
        }}
      >
        <Typography variant="headline" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="subheading">{author}</Typography>
        <Typography variant="body1">{abstract}</Typography>
      </Paper>
    );
  }
}
