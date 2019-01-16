import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { init, showSystematicReview } from "../data/Review";

export default class NewReviewDialog extends Component {
  constructor(props) {
    super(props);

    this.title = {
      title: "",
      researchers: "",
      goals: "",
      description: ""
    };
  }

  initReview = () => {
    const { title, description, researchers, goals } = this.state;
    const { initializeReview } = this.props;
    init(title, researchers, description, goals);
    initializeReview();
    showSystematicReview();
  };

  cancelReview = () => {
    this.props.closeDialog();
  };

  render() {
    const { visible, closeDialog } = this.props;

    return (
      <Dialog open={visible} onClose={closeDialog}>
        <DialogTitle>Nova Revisão</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 20px 40px 20px",
            alignItems: "center"
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: 400,
              padding: "0 30px"
            }}
          >
            <Grid container style={{ marginBottom: 20 }}>
              <TextField
                style={{ marginRight: 15, width: 150 }}
                label="Título"
                onChange={event => this.setState({ title: event.target.value })}
              />
              <TextField
                style={{ width: 150 }}
                label="Pesquisador(es)"
                onChange={event =>
                  this.setState({ researchers: event.target.value })
                }
              />
            </Grid>
            <TextField
              style={{ marginBottom: 8 }}
              label="Descrição"
              multiline={true}
              rowsMax={3}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
            <TextField
              style={{ marginBottom: 8 }}
              label="Objetivos"
              multiline={true}
              rowsMax={3}
              onChange={event => this.setState({ goals: event.target.value })}
            />
          </form>
          <Grid
            container
            justify="space-between"
            style={{
              width: 220,
              marginTop: 25
            }}
          >
            <Button
              onClick={this.initReview}
              variant="contained"
              color="primary"
            >
              Criar
            </Button>
            <Button
              onClick={this.cancelReview}
              variant="contained"
              color="primary"
            >
              Cancelar
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}
