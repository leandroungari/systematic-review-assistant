import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { updateArticle, article, setUpdate, FIRST_SET } from "../data/Review";
import { TextField } from "@material-ui/core";

export default class ArticleDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: "non-searched",
      data: {
        name: "",
        authors: "",
        abstract: "",
        year: "",
        booktitle: "",
        doi: ""
      }
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.searched === "closed") {
      return {
        searched: "non-searched",
        data: {
          name: "",
          authors: "",
          abstract: "",
          year: "",
          booktitle: "",
          doi: ""
        }
      };
    } else if (props.id === "") return null;
    else if (state.searched === "non-searched") {
      const { name, authors, abstract, year, booktitle, doi } = article(
        props.id
      );
      return {
        searched: "searched",
        data: { name, authors, abstract, year, booktitle, doi }
      };
    } else return null;
  }

  confirm = () => {
    const { id } = this.props;
    const { data } = this.state;
    updateArticle(id, data);
    setUpdate(FIRST_SET, false);
    this.cancel();
  };

  cancel = () => {
    this.setState({
      searched: "closed"
    });
    this.props.closeDialog();
  };

  render() {
    const { visible, closeDialog } = this.props;
    const { name, authors, abstract, year, booktitle, doi } = this.state.data;

    return (
      <Dialog open={visible} onClose={closeDialog}>
        <DialogTitle>Modificar artigo</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 570,
            padding: "20px 30px 40px 30px",
            alignItems: "flex-start"
          }}
        >
          <Grid
            container
            direction="column"
            wrap="nowrap"
            style={{ width: 500, maxHeight: 400, overflowY: "auto" }}
          >
            <TextField
              style={{ marginBottom: 15 }}
              label="Título"
              value={name}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, name: event.target.value }
                })
              }
            />
            <TextField
              style={{ marginBottom: 15 }}
              label="Autores"
              value={authors}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, authors: event.target.value }
                })
              }
            />
            <TextField
              style={{ marginBottom: 15 }}
              label="Resumo"
              multiline
              rowsMax={5}
              value={abstract}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, abstract: event.target.value }
                })
              }
            />
            <TextField
              style={{ marginBottom: 15 }}
              label="Ano"
              value={year}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, year: event.target.value }
                })
              }
            />
            <TextField
              style={{ marginBottom: 15 }}
              label="Título do Livro"
              value={booktitle}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, booktitle: event.target.value }
                })
              }
            />
            <TextField
              style={{ marginBottom: 15 }}
              label="DOI"
              value={doi}
              onChange={event =>
                this.setState({
                  data: { ...this.state.data, doi: event.target.value }
                })
              }
            />
          </Grid>
          <Grid
            container
            justify="center"
            style={{
              marginTop: 15
            }}
          >
            <Button
              onClick={this.confirm}
              variant="contained"
              color="primary"
              style={{
                marginRight: 30
              }}
            >
              Salvar
            </Button>
            <Button onClick={this.cancel} variant="contained" color="primary">
              Cancelar
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}
