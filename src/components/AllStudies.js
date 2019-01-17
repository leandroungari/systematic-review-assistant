import React, { Component } from "react";
import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default class AllStudies extends Component {
  render() {
    const { articles } = this.props;

    return (
      <Grid
        style={{
          maxWidth: 0.75 * window.innerWidth,
          overflowX: "auto"
        }}
      >
        <TableViewer
          rows={articles}
          titles={["Título", "Autor(es)", "Ano", "Base Bibliográfica", "DOI"]}
          renderRow={({
            id,
            name,
            authors,
            year,
            base,
            abstract,
            booktitle,
            doi,
            bibtex
          }) => (
            <TableRow key={id}>
              <TableCell style={{ minWidth: 300 }}>{name}</TableCell>
              <TableCell style={{ minWidth: 300 }}>{authors}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>{base}</TableCell>
              <TableCell>{doi}</TableCell>
            </TableRow>
          )}
        />
      </Grid>
    );
  }
}
