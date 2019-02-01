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

  finalResult = () => {
    const { articles } = this.state;

    return articles.map(({ id }) => {
      const { name, authors, year, base } = article(id);

      return {
        id,
        name,
        authors,
        year,
        base: base.join(", ")
      };
    });
  };

  render() {
    const date = new Date();
    let filename = `${getTitle()} - Resultado Final - ${monthname(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

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
            width={1450}
            rows={this.finalResult()}
            showFilter={false}
            titles={[
              { key: "name", value: "Título" },
              { key: "authors", value: "Autor(es)" },
              { key: "year", value: "Ano" },
              { key: "base", value: "Base Bibliográfica" }
            ]}
            renderRow={({ id, name, authors, year, base }) => {
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
                  <TableCell>{base}</TableCell>
                </TableRow>
              );
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            display: this.finalResult().length === 0 ? "none" : "flex",
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={this.finalResult()}
            fields={["name", "authors", "year", "base"]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}
