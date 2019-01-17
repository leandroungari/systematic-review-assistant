import React, { Component } from "react";

import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { article } from "../data/Review";

export default class FirstSelection extends Component {
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
          titles={[
            "Título",
            "Resumo",
            "Autor(es)",
            "Ano",
            "Base Bibliográfica",
            "Análise",
            "Revisão da Análise"
          ]}
          renderRow={({ id, analysis, review }) => {
            const { name, authors, abstract, year, base } = article(id);

            let resultAnalysis = "";
            if (!analysis) resultAnalysis = "Não analisado";
            else if (analysis.result)
              resultAnalysis = `Aceito:${analysis.criterion}`;
            else resultAnalysis = `Excluído:${analysis.criterion}`;

            let resultReview = "";
            if (!review) resultReview = "Não revisado";
            else if (review.result) resultReview = `Aceito:${review.criterion}`;
            else resultReview = `Excluído:${review.criterion}`;

            return (
              <TableRow key={id}>
                <TableCell
                  style={{ minWidth: 300, cursor: "pointer" }}
                  onClick={() => console.log(id)}
                >
                  {name}
                </TableCell>
                <TableCell style={{ minWidth: 550 }} align="justify">
                  {abstract}
                </TableCell>
                <TableCell style={{ minWidth: 250 }}>{authors}</TableCell>
                <TableCell>{year}</TableCell>
                <TableCell>{base.join("/")}</TableCell>
                <TableCell>{resultAnalysis}</TableCell>
                <TableCell>{resultReview}</TableCell>
              </TableRow>
            );
          }}
        />
      </Grid>
    );
  }
}
