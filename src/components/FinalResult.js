import React, { Component } from "react";
import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { article } from "../data/Review";

export default class FinalResult extends Component {
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
          titles={["Título", "Autor(es)", "Ano", "Base Bibliográfica"]}
          renderRow={({ id }) => {
            const { name, authors, year, base } = article(id);

            return (
              <TableRow key={id}>
                <TableCell
                  style={{ minWidth: 300, cursor: "pointer" }}
                  onClick={() => console.log(id)}
                >
                  {name}
                </TableCell>
                <TableCell style={{ minWidth: 250 }}>{authors}</TableCell>
                <TableCell>{year}</TableCell>
                <TableCell>{base.join("/")}</TableCell>
              </TableRow>
            );
          }}
        />
      </Grid>
    );
  }
}
