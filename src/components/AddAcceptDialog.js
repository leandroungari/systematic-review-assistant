import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { TextField } from "@material-ui/core";

export default class AddSearchDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: ""
    };
  }

  addCriteria = () => {
    this.props.addCriteria(this.state.criteria);
    this.setState({
      criteria: ""
    });
  };

  render() {
    const { visible, closeDialog } = this.props;
    const { criteria } = this.state;
    return (
      <Dialog open={visible} onClose={closeDialog}>
        <DialogTitle>Critério de Aceitação</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px 30px 40px 30px",
            alignItems: "flex-start"
          }}
        >
          <TextField
            label="Critério de Aceitação"
            value={criteria}
            style={{
              width: 250,
              marginBottom: 30
            }}
            onChange={event => this.setState({ criteria: event.target.value })}
          />

          <Grid
            container
            justify="center"
            style={{
              marginTop: 15
            }}
          >
            <Button
              onClick={this.addCriteria}
              variant="contained"
              color="primary"
              style={{
                marginRight: 30
              }}
            >
              Adicionar
            </Button>
            <Button
              onClick={() => {
                this.setState({ criteria: "" });
                closeDialog();
              }}
              variant="contained"
              color="primary"
            >
              Voltar
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}
