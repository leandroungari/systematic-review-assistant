import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Menu from "@material-ui/icons/Menu";

import Panel from "../components/Panel";
import Drawer from "@material-ui/core/Drawer";
import SideMenu from "../components/SideMenu";

import NewReviewDialog from "../components/NewReviewDialog";
import OpenReviewDialog from "../components/OpenReviewDialog";

import { saveAs } from "file-saver";
import {
  getSystematicReview,
  getTitle,
  openSystematicReview,
  showSystematicReview
} from "../data/Review";
import { monthname } from "../data/Date";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    document.title = "Systematic Review Assistant";

    this.state = {
      isNewReviewActive: /*false*/ true,
      isNewReviewDialogVisible: false,
      isOpenReviewDialogVisible: false,

      isDrawerVisible: false,

      tabNumber: 0,

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
            let date = new Date();

            let filename = `${getTitle()} - ${monthname(
              date.getMonth()
            )} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}min`;

            let json = getSystematicReview();
            let blob = new Blob([json], { type: "text/json;charset=utf-8" });

            saveAs(blob, filename);

            this.hideDrawer();
          }
        },
        { type: "divider" },
        {
          type: "option",
          name: "Abrir",
          action: () => {
            this.hideDrawer();
            this.showOpenReviewDialog();
          }
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

  showOpenReviewDialog = () =>
    this.setState({ isOpenReviewDialogVisible: true });
  hideOpenReviewDialog = () =>
    this.setState({ isOpenReviewDialogVisible: false });

  initializeReview = () => {
    this.setState({ isNewReviewActive: true });
    this.hideNewReviewDialog();
  };

  openReview = data => {
    openSystematicReview(data);
    showSystematicReview();
    this.setState({ isNewReviewActive: true });
  };

  render() {
    const {
      isNewReviewActive,
      isDrawerVisible,
      options,
      isNewReviewDialogVisible,
      isOpenReviewDialogVisible,
      tabNumber
    } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar
          position="static"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Toolbar>
            <IconButton color="inherit" onClick={this.showDrawer}>
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Systematic Review Assistant
            </Typography>
          </Toolbar>
          <Tabs
            style={{
              display: isNewReviewActive ? "flex" : "none",
              marginLeft: "150px",
              alignItems: "flex-end"
            }}
            value={tabNumber}
            onChange={(event, newValue) => {
              this.setState({ tabNumber: newValue });
            }}
          >
            <Tab label="Todos Estudos" />
            <Tab label="Seleção Inicial" />
            <Tab label="Seleção Final" />
            <Tab label="Resultado Final" />
          </Tabs>
        </AppBar>
        <Drawer open={isDrawerVisible} onClose={this.hideDrawer}>
          <SideMenu options={options} />
        </Drawer>
        <Panel enable={isNewReviewActive} tab={tabNumber} />

        <NewReviewDialog
          closeDialog={this.hideNewReviewDialog}
          visible={isNewReviewDialogVisible}
          initializeReview={this.initializeReview}
        />
        <OpenReviewDialog
          closeDialog={this.hideOpenReviewDialog}
          visible={isOpenReviewDialogVisible}
          openReview={this.openReview}
        />
      </div>
    );
  }
}
