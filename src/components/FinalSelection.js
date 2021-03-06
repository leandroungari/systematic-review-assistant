import React, { Component } from "react";

import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import {
  article,
  RESULT_ACCEPT,
  RESULT_REJECT,
  SECOND_SET,
  setUpdate
} from "../data/Review";

import DoneAllOutlined from "@material-ui/icons/DoneAllOutlined";
import DoneOutlined from "@material-ui/icons/DoneOutlined";
import WarningOutlined from "@material-ui/icons/WarningOutlined";
import IndeterminateCheckBoxOutlined from "@material-ui/icons/IndeterminateCheckBoxOutlined";

import { Typography } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

import StatusDialog from "./ArticleStatusDialog";

export default class FinalSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleId: "",
      articles: this.props.articles(),
      isStatusDialogVisible: false
    };
  }

  showStatusDialog = id =>
    this.setState({
      isStatusDialogVisible: true,
      articleId: id
    });
  hideStatusDialog = () => {
    this.setState(
      {
        isStatusDialogVisible: false,
        articles: this.props.articles()
      },
      () => {
        setUpdate(SECOND_SET, true);
      }
    );
  };

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
      analysis &&
      review &&
      ((analysis.result === RESULT_ACCEPT && review.result === RESULT_ACCEPT) ||
        (analysis.result === RESULT_REJECT && review.result === RESULT_REJECT))
    )
      return (
        <Tooltip title="Revisado">
          <DoneAllOutlined />
        </Tooltip>
      );
    else if (
      analysis &&
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

  finalSelection = () => {
    const { articles } = this.state;

    return articles.map(({ id, analysis, review }) => {
      const { name, authors, year, base } = article(id);
      const { resultAnalysis, resultReview } = this.processStatus(
        analysis,
        review
      );

      return {
        id,
        name,
        authors,
        year,
        base: base.join("/"),
        analysis: resultAnalysis,
        statusAnalysis: analysis ? true : false,
        statusReview: review ? true : false,
        isUndefined:
          analysis && review && analysis.result !== review.result
            ? true
            : false,
        review: resultReview,
        icon: this.calculateStatus(analysis, review)
      };
    });
  };

  render() {
    const { articleId, isStatusDialogVisible } = this.state;

    const date = new Date();
    let filename = `${getTitle()} - Seleção Final - ${monthname(
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
            rows={this.finalSelection()}
            width={1350}
            showFilter={true}
            titles={[
              { key: "status", value: "Status" },
              { key: "name", value: "Título" },
              { key: "authors", value: "Autor(es)" },
              { key: "year", value: "Ano" },
              { key: "base", value: "Base Bibliográfica" },
              { key: "analysis", value: "Análise" },
              { key: "review", value: "Revisão da Análise" }
            ]}
            renderRow={({
              id,
              name,
              authors,
              year,
              base,
              analysis,
              review,
              icon
            }) => {
              return (
                <TableRow key={id}>
                  <TableCell
                    style={{ cursor: "pointer" }}
                    onClick={event => this.showStatusDialog(id)}
                  >
                    {icon}
                  </TableCell>
                  <TableCell
                    style={{ minWidth: 300, cursor: "pointer" }}
                    onClick={() => console.log(id)}
                  >
                    {name}
                  </TableCell>
                  <TableCell style={{ minWidth: 250 }}>{authors}</TableCell>
                  <TableCell>{year}</TableCell>
                  <TableCell>{base}</TableCell>
                  <TableCell>{analysis}</TableCell>
                  <TableCell>{review}</TableCell>
                </TableRow>
              );
            }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            display: this.finalSelection().length === 0 ? "none" : "flex",
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={this.finalSelection()}
            fields={["name", "authors", "year", "base", "analysis", "review"]}
            filename={filename}
          />
        </Grid>
        <StatusDialog
          closeDialog={this.hideStatusDialog}
          visible={isStatusDialogVisible}
          articleId={articleId}
          set={SECOND_SET}
        />
      </Grid>
    );
  }
}
