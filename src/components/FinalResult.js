import React, { Component } from "react";
import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { article } from "../data/Review";

import { Typography } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

export default class FinalResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: this.props.articles()
    };
  }

  render() {
    const { articles } = this.state;

    const date = new Date();
    let filename = `${getTitle()} - Resultado Final - ${monthname(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

    const data = articles.map(({ id }) => {
      const { name, authors, year, base } = article(id);

      return {
        name,
        authors,
        year,
        base: base.join("/")
      };
    });

    return (
      <Grid container>
        <Grid
          container
          style={{
            maxWidth: 0.75 * window.innerWidth,
            overflowX: "auto"
          }}
        >
          <TableViewer
            rows={articles}
            showFilter={false}
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
        <Grid
          container
          direction="column"
          style={{
            display: articles.length === 0 ? "none" : "flex",
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={data}
            fields={["name", "authors", "year", "base"]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}
