import React, { Component } from "react";
import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography, Link } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle, isUpdate, setUpdate, ARTICLES_SET } from "../data/Review";

export default class AllStudies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: this.props.articles()
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (isUpdate()) return null;
    else {
      setUpdate(ARTICLES_SET, true);
      return {
        articles: props.articles()
      };
    }
  }

  allStudies = () => {
    const { articles } = this.state;
    return articles.map(
      ({ id, name, authors, year, base, booktitle, doi }) => ({
        id,
        name,
        authors,
        year,
        base,
        booktitle,
        doi
      })
    );
  };

  render() {
    const date = new Date();
    let filename = `${getTitle()} - Todos Estudos - ${monthname(
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
            width={1600}
            rows={this.allStudies()}
            showFilter={false}
            titles={[
              { key: "name", value: "Título" },
              { key: "authors", value: "Autor(es)" },
              { key: "year", value: "Ano" },
              { key: "base", value: "Base Bibliográfica" },
              { key: "booktitle", value: "Título do Livro" },
              { key: "doi", value: "DOI" }
            ]}
            renderRow={({ id, name, authors, year, base, booktitle, doi }) => {
              return (
                <TableRow key={id}>
                  <TableCell style={{ minWidth: 350 }}>{name}</TableCell>
                  <TableCell style={{ minWidth: 300 }}>{authors}</TableCell>
                  <TableCell>{year}</TableCell>
                  <TableCell>{base.join(", ")}</TableCell>
                  <TableCell style={{ minWidth: 300 }}>{booktitle}</TableCell>
                  <TableCell>
                    <Typography>
                      {doi ? (
                        <Link
                          target="_blank"
                          color="inherit"
                          href={`http://doi.org/${doi}`}
                        >
                          {doi}
                        </Link>
                      ) : null}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            display: this.allStudies().length === 0 ? "none" : "flex",
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={this.allStudies()}
            fields={["name", "authors", "year", "base", "booktitle", "doi"]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}
