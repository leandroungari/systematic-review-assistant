import React, { Component } from "react";
import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

export default class AllStudies extends Component {
  render() {
    const { articles } = this.props;

    const date = new Date();
    let filename = `${getTitle()} - Todos Estudos - ${monthname(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

    const data = articles.map(
      ({ name, authors, year, base, booktitle, doi }) => ({
        name,
        authors,
        year,
        base: base.join("/"),
        booktitle,
        doi
      })
    );

    console.log(data);

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
            titles={[
              "Título",
              "Autor(es)",
              "Ano",
              "Base Bibliográfica",
              "Título do Livro",
              "DOI"
            ]}
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
            }) => {
              return (
                <TableRow
                  key={id}
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log(id)}
                >
                  <TableCell style={{ minWidth: 350 }}>{name}</TableCell>
                  <TableCell style={{ minWidth: 300 }}>{authors}</TableCell>
                  <TableCell>{year}</TableCell>
                  <TableCell>{base.join("/")}</TableCell>
                  <TableCell style={{ minWidth: 300 }}>{booktitle}</TableCell>
                  <TableCell>{doi}</TableCell>
                </TableRow>
              );
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={data}
            fields={["name", "authors", "year", "base", "booktitle", "doi"]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}