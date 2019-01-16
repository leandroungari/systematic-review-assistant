import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./SideMenu";
import AllStudies from "./AllStudies";
import FirstSelection from "./FirstSelection";
import FinalSelection from "./FinalSelection";
import FinalResult from "./FinalResult";

import AddSearchDialog from "./AddSearchDialog";

import bibtextParser from "bibtex-parse-js";
import { addArticle, showSystematicReview } from "../data/Review";

export default class ReviewPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddSearchModalVisible: false,
      options: [
        {
          type: "option",
          name: "Adicionar Pesquisa",
          action: () => this.showAddSearch()
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

  loadBibTexFile = (base, text) => {
    const entries = bibtextParser.toJSON(text);
    const bibs = text.split("@").map(a => `@${a}`);

    entries.forEach((entry, index) => {
      const { abstract, author, booktitle, doi, title, year } = entry.entryTags;
      addArticle(
        `${base}${index}`,
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

    showSystematicReview();
  };

  render() {
    const { options, isAddSearchModalVisible } = this.state;
    const { tab } = this.props;

    return (
      <Grid
        container
        style={{
          display: "flex",
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
          {tab === 0 && <AllStudies />}
          {tab === 1 && <FirstSelection />}
          {tab === 2 && <FinalSelection />}
          {tab === 3 && <FinalResult />}
        </Grid>
        <AddSearchDialog
          closeDialog={this.hideAddSearch}
          visible={isAddSearchModalVisible}
          loadFile={this.loadBibTexFile}
        />
      </Grid>
    );
  }
}
