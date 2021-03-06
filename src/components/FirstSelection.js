import React, { Component } from "react";

import TableViewer from "./TableViewer";

import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {
  article,
  RESULT_ACCEPT,
  RESULT_REJECT,
  FIRST_SET,
  setUpdate,
  showSystematicReview
} from "../data/Review";

import DoneAllOutlined from "@material-ui/icons/DoneAllOutlined";
import DoneOutlined from "@material-ui/icons/DoneOutlined";
import WarningOutlined from "@material-ui/icons/WarningOutlined";
import IndeterminateCheckBoxOutlined from "@material-ui/icons/IndeterminateCheckBoxOutlined";

import { Typography, Tooltip } from "@material-ui/core";
import GenerateCSV from "./GenerateCSV";

import { monthname } from "../data/Date";
import { getTitle } from "../data/Review";

import Link from "@material-ui/core/Link";

import StatusDialog from "./ArticleStatusDialog";
import EditDialog from "./EditItemDialog";

export default class FirstSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStatusDialogVisible: false,
      isEditDialogVisible: false,
      articleId: "",
      editId: "",
      articles: this.props.articles()
    };

    showSystematicReview();
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
        articles: this.props.articles(),
        articleId: ""
      },
      () => {
        setUpdate(FIRST_SET, true);
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

  editItem = id => {
    this.setState({
      editId: id,
      isEditDialogVisible: true
    });
  };

  hideEditDialog = () => {
    this.setState(
      {
        isEditDialogVisible: false,
        articles: this.props.articles(),
        editId: ""
      },
      () => {
        setUpdate(FIRST_SET, true);
      }
    );
  };

  firstSelection = () => {
    const { articles } = this.state;

    return articles.map(({ id, analysis, review }) => {
      const { name, authors, abstract, year, base, doi } = article(id);
      const { resultAnalysis, resultReview } = this.processStatus(
        analysis,
        review
      );

      return {
        id,
        name,
        abstract,
        authors,
        year,
        base,
        doi,
        analysis: resultAnalysis,
        review: resultReview,
        statusAnalysis: analysis ? true : false,
        statusReview: review ? true : false,
        isUndefined:
          analysis && review && analysis.result !== review.result
            ? true
            : false,
        icon: this.calculateStatus(analysis, review)
      };
    });
  };

  render() {
    const {
      isStatusDialogVisible,
      articleId,
      isEditDialogVisible,
      editId
    } = this.state;

    const date = new Date();
    let filename = `${getTitle()} - Seleção Inicial - ${monthname(
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
            width={1800}
            rows={this.firstSelection()}
            showFilter={true}
            titles={[
              { key: "status", value: "Status" },
              { key: "name", value: "Título" },
              { key: "abstract", value: "Resumo" },
              { key: "authors", value: "Autor(es)" },
              { key: "year", value: "Ano" },
              { key: "base", value: "Base Bibliográfica" },
              { key: "analysis", value: "Análise" },
              { key: "review", value: "Revisão da Análise" }
            ]}
            renderRow={({
              id,
              name,
              abstract,
              authors,
              year,
              base,
              doi,
              analysis,
              review,
              icon
            }) => {
              return (
                <TableRow key={id} onDoubleClick={() => this.editItem(id)}>
                  <TableCell
                    style={{ cursor: "pointer" }}
                    onClick={event => {
                      this.showStatusDialog(id);
                    }}
                  >
                    {icon}
                  </TableCell>
                  <TableCell style={{ minWidth: 300, cursor: "pointer" }}>
                    <Typography>
                      <Link
                        target="_blank"
                        color="inherit"
                        href={`http://doi.org/${doi}`}
                      >
                        {name}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell style={{ minWidth: 550 }} align="justify">
                    {abstract}
                  </TableCell>
                  <TableCell style={{ minWidth: 250 }}>{authors}</TableCell>
                  <TableCell>{year}</TableCell>
                  <TableCell>{base.join(", ")}</TableCell>
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
            display: this.firstSelection().length === 0 ? "none" : "flex",
            padding: "30px 0"
          }}
        >
          <Typography variant="body2">Exportar os dados da tabela</Typography>
          <GenerateCSV
            source={this.firstSelection()}
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
        <StatusDialog
          closeDialog={this.hideStatusDialog}
          visible={isStatusDialogVisible}
          articleId={articleId}
          set={FIRST_SET}
        />
        <EditDialog
          closeDialog={this.hideEditDialog}
          visible={isEditDialogVisible}
          id={editId}
        />
      </Grid>
    );
  }
}
