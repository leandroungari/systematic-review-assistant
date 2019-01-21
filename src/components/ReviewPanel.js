import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./SideMenu";
import AllStudies from "./AllStudies";
import FirstSelection from "./FirstSelection";
import FinalSelection from "./FinalSelection";
import FinalResult from "./FinalResult";

import AddSearchDialog from "./AddSearchDialog";
import AddAcceptDialog from "./AddAcceptDialog";
import AddRejectDialog from "./AddRejectDialog";

import bibtextParser from "bibtex-parse-js";
import {
  addArticle,
  showSystematicReview,
  articles,
  firsts,
  seconds,
  results,
  addCriterion,
  deleteCriterion,
  setUpdate,
  ARTICLES_SET
} from "../data/Review";

export default class ReviewPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddSearchModalVisible: false,
      isAddCriteriaModalVisible: false,
      isDeleteCriteriaModalVisible: false,

      options: [
        {
          type: "option",
          name: "Adicionar Pesquisa",
          action: () => this.showAddSearch()
        },
        {
          type: "option",
          name: "Critérios de Aceitação",
          action: () => this.showAddCriteria()
        },
        {
          type: "option",
          name: "Critérios de Rejeição",
          action: () => this.showDeleteCriteria()
        },
        {
          type: "option",
          name: "Mostrar Itens de Pesquisa Duplicados",
          action: () => {}
        }
      ]
    };
  }

  showAddSearch = () => this.setState({ isAddSearchModalVisible: true });
  hideAddSearch = () => this.setState({ isAddSearchModalVisible: false });

  showAddCriteria = () => this.setState({ isAddCriteriaModalVisible: true });
  hideAddCriteria = () => this.setState({ isAddCriteriaModalVisible: false });

  showDeleteCriteria = () =>
    this.setState({ isDeleteCriteriaModalVisible: true });
  hideDeleteCriteria = () =>
    this.setState({ isDeleteCriteriaModalVisible: false });

  addCriteria = criteria => {
    addCriterion(criteria);
  };

  deleteCriteria = criteria => {
    deleteCriterion(criteria);
  };

  loadBibTexFile = (base, text) => {
    const entries = bibtextParser.toJSON(text);
    const bibs = text.split("@").map(a => `@${a}`);

    entries.forEach((entry, index) => {
      const { abstract, author, booktitle, doi, title, year } = entry.entryTags;
      addArticle(
        title,
        author,
        Number.parseInt(year),
        base,
        abstract,
        booktitle,
        doi,
        bibs[index]
      );
    });

    setUpdate(ARTICLES_SET, false);

    showSystematicReview();
  };

  render() {
    const {
      options,
      isAddSearchModalVisible,
      isAddCriteriaModalVisible,
      isDeleteCriteriaModalVisible
    } = this.state;
    const { tab } = this.props;

    return (
      <Grid
        container
        style={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row"
        }}
      >
        <Grid
          container
          style={{
            width: 0.2 * window.innerWidth
          }}
        >
          <SideMenu options={options} />
        </Grid>
        <Grid
          style={{
            width: 0.8 * window.innerWidth,
            padding: "25px 20px"
          }}
        >
          {tab === 0 && <AllStudies articles={articles} />}
          {tab === 1 && <FirstSelection articles={firsts} />}
          {tab === 2 && <FinalSelection articles={seconds} />}
          {tab === 3 && <FinalResult articles={results} />}
        </Grid>
        <AddSearchDialog
          closeDialog={this.hideAddSearch}
          visible={isAddSearchModalVisible}
          loadFile={this.loadBibTexFile}
        />
        <AddAcceptDialog
          closeDialog={this.hideAddCriteria}
          visible={isAddCriteriaModalVisible}
          addCriteria={this.addCriteria}
        />
        <AddRejectDialog
          closeDialog={this.hideDeleteCriteria}
          visible={isDeleteCriteriaModalVisible}
          addCriteria={this.deleteCriteria}
        />
      </Grid>
    );
  }
}
