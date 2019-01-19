import React, { Component } from "react";

import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import { article, RESULT_ACCEPT, RESULT_REJECT } from "../data/Review";

import DoneAllOutlined from "@material-ui/icons/DoneAllOutlined";
import DoneOutlined from "@material-ui/icons/DoneOutlined";
import WarningOutlined from "@material-ui/icons/WarningOutlined";
import IndeterminateCheckBoxOutlined from "@material-ui/icons/IndeterminateCheckBoxOutlined";

import { Typography } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

export default class FinalSelection extends Component {
  processStatus = (analysis, review) => {
    let resultAnalysis = "";
    if (!analysis) resultAnalysis = "Não analisado";
    else if (analysis.result)
      resultAnalysis = `Aceito: ${analysis.criterion.join(", ")}`;
    else resultAnalysis = `Rejeitado: ${analysis.criterion.join(", ")}`;

    let resultReview = "";
    if (!review) resultReview = "Não revisado";
    else if (review.result)
      resultReview = `Aceito: ${review.criterion.join(", ")}`;
    else resultReview = `Rejeitado: ${review.criterion.join(", ")}`;

    return { resultAnalysis, resultReview };
  };

  calculateStatus = (analysis, review) => {
    if (!analysis && !review)
      return (
        <Tooltip title="Não analisado">
          <IndeterminateCheckBoxOutlined />
        </Tooltip>
      );
    else if (
      (analysis.result === RESULT_ACCEPT && review.result === RESULT_ACCEPT) ||
      (analysis.result === RESULT_REJECT && review.result === RESULT_REJECT)
    )
      return (
        <Tooltip title="Revisado">
          <DoneAllOutlined />
        </Tooltip>
      );
    else if (
      (analysis.result === RESULT_ACCEPT ||
        analysis.result === RESULT_REJECT) &&
      !review
    )
      return (
        <Tooltip title="Analisado/Não Revisado">
          <DoneOutlined />
        </Tooltip>
      );
    else
      return (
        <Tooltip title="Indeterminado">
          <WarningOutlined />
        </Tooltip>
      );
  };

  render() {
    const { articles } = this.props;

    const date = new Date();
    let filename = `${getTitle()} - Seleção Final - ${monthname(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

    const data = articles.map(({ id, analysis, review }) => {
      const { name, authors, year, base } = article(id);
      const { resultAnalysis, resultReview } = this.processStatus(
        analysis,
        review
      );
      return {
        name,
        authors,
        year,
        base: base.join("/"),
        analysis: resultAnalysis,
        review: resultReview
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
            titles={[
              "Status",
              "Título",
              "Autor(es)",
              "Ano",
              "Base Bibliográfica",
              "Análise",
              "Revisão da Análise"
            ]}
            renderRow={({ id, analysis, review }) => {
              const { name, authors, year, base } = article(id);

              const { resultAnalysis, resultReview } = this.processStatus(
                analysis,
                review
              );

              return (
                <TableRow key={id}>
                  <TableCell onClick={event => this.showStatusDialog(id)}>
                    {this.calculateStatus(analysis, review)}
                  </TableCell>
                  <TableCell
                    style={{ minWidth: 300, cursor: "pointer" }}
                    onClick={() => console.log(id)}
                  >
                    {name}
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
            fields={["name", "authors", "year", "base", "analysis", "review"]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}
