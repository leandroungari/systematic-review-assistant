import React, { Component } from "react";
import TableViewer from "./TableViewer";

export default class AllStudies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  render() {
    const { articles } = this.state;

    return (
      <Grid>
        <TableViewer
          rows={articles}
          renderRow={row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell numeric>{row.calories}</TableCell>
              <TableCell numeric>{row.fat}</TableCell>
            </TableRow>
          )}
        />
      </Grid>
    );
  }
}
