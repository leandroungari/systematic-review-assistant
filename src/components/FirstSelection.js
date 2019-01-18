import React, { Component } from "react";

import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { article, RESULT_ACCEPT, RESULT_REJECT } from "../data/Review";

import DoneAllOutlined from "@material-ui/icons/DoneAllOutlined";
import DoneOutlined from "@material-ui/icons/DoneOutlined";
import WarningOutlined from "@material-ui/icons/WarningOutlined";
import IndeterminateCheckBoxOutlined from "@material-ui/icons/IndeterminateCheckBoxOutlined";

import { Typography } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

export default class FirstSelection extends Component {
  processStatus = (analysis, review) => {
    let resultAnalysis = "";
    if (!analysis) resultAnalysis = "Não analisado";
    else if (analysis.result) resultAnalysis = `Aceito:${analysis.criterion}`;
    else resultAnalysis = `Excluído:${analysis.criterion}`;

    let resultReview = "";
    if (!review) resultReview = "Não revisado";
    else if (review.result) resultReview = `Aceito:${review.criterion}`;
    else resultReview = `Excluído:${review.criterion}`;

    return { resultAnalysis, resultReview };
  };

  calculateStatus = (analysis, review) => {
    if (!analysis && !review) return <IndeterminateCheckBoxOutlined />;
    else if (
      (analysis.result === RESULT_ACCEPT && review.result === RESULT_ACCEPT) ||
      (analysis.result === RESULT_REJECT && review.result === RESULT_REJECT)
    )
      return <DoneAllOutlined />;
    else if (
      (analysis.result === RESULT_ACCEPT ||
        analysis.result === RESULT_REJECT) &&
      !review
    )
      return <DoneOutlined />;
    else return <WarningOutlined />;
  };

  render() {
    const { articles } = this.props;

    const date = new Date();
    let filename = `${getTitle()} - Seleção Inicial - ${monthname(
      date.getMonth()
    )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

    const data = articles.map(({ id, analysis, review }) => {
      const { name, authors, abstract, year, base } = article(id);
      const { resultAnalysis, resultReview } = this.processStatus(
        analysis,
        review
      );
      return {
        name,
        abstract,
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
              "Resumo",
              "Autor(es)",
              "Ano",
              "Base Bibliográfica",
              "Análise",
              "Revisão da Análise"
            ]}
            renderRow={({ id, analysis, review }) => {
              const { name, authors, abstract, year, base } = article(id);

              const { resultAnalysis, resultReview } = this.processStatus(
                analysis,
                review
              );

              return (
                <TableRow key={id}>
                  <TableCell>
                    {this.calculateStatus(analysis, review)}
                  </TableCell>
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
            fields={[
              "name",
              "abstract",
              "authors",
              "year",
              "base",
              "analysis",
              "review"
            ]}
            filename={filename}
          />
        </Grid>
      </Grid>
    );
  }
}
