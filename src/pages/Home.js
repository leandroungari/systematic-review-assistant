import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

import Menu from "@material-ui/icons/Menu";

import Panel from "../components/Panel";
import Drawer from "@material-ui/core/Drawer";
import SideMenu from "../components/SideMenu";
import NewReviewDialog from "../components/NewReviewDialog";

import { saveAs } from "file-saver";
import { getReview } from "../data/Review";
import { monthname } from "../data/Date";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = "Systematic Review Assistant";

    this.state = {
      isNewReviewActive: false,
      isNewReviewDialogVisible: false,

      isDrawerVisible: false,
      options: [
        {
          type: "option",
          name: "Nova revisão ...",
          action: () => {
            this.hideDrawer();
            this.showNewReviewDialog();
          }
        },
        {
          type: "option",
          name: "Salvar como ...",
          action: () => {
            let review = getReview();
            let date = new Date();

            let filename = `${review.title} - ${monthname(
              date.getMonth()
            )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

            let json = JSON.stringify(review);
            let blob = new Blob([json], { type: "text/json;charset=utf-8" });

            saveAs(blob, filename);

            this.hideDrawer();
          }
        },
        { type: "divider" },
        {
          type: "option",
          name: "Abrir",
          action: () => console.log("Abrir")
        },
        { type: "divider" },
        {
          type: "option",
          name: "Sobre",
          action: () => console.log("Sobre")
        }
      ]
    };
  }

  showDrawer = () => this.setState({ isDrawerVisible: true });
  hideDrawer = () => this.setState({ isDrawerVisible: false });

  showNewReviewDialog = () => this.setState({ isNewReviewDialogVisible: true });
  hideNewReviewDialog = () =>
    this.setState({ isNewReviewDialogVisible: false });

  initializeReview = () => {
    this.setState({ isNewReviewActive: true });
    this.hideNewReviewDialog();
  };

  render() {
    const {
      isNewReviewActive,
      isDrawerVisible,
      options,
      isNewReviewDialogVisible
    } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={this.showDrawer}>
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Systematic Review Assistant
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={isDrawerVisible} onClose={this.hideDrawer}>
          <SideMenu options={options} />
        </Drawer>
        <Panel enable={isNewReviewActive} />
        <NewReviewDialog
          visible={isNewReviewDialogVisible}
          initializeReview={this.initializeReview}
        />
      </div>
    );
  }
}
