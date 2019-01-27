import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import SelectOption from "./Select";
import {
  listAddCriterion,
  listDeleteCriterion,
  setAnalysis,
  setReview,
  showSystematicReview,
  getData
} from "../data/Review";

export default class ArticleDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: "non-searched",
      statusAnalysis: "",
      criteriaAnalysis: [],
      statusReview: "",
      criteriaReview: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    //const { statusAnalysis, statusReview } = state;

    if (state.searched === "closed") {
      return {
        searched: "non-searched",
        statusAnalysis: "",
        criteriaAnalysis: [],
        statusReview: "",
        criteriaReview: []
      };
    } else if (props.articleId === "" || state.searched === "searched") {
      return null;
    } else if (props.articleId !== "" && state.searched === "non-searched") {
      const { analysis, review } = getData(props.articleId, props.set);

      return {
        searched: "searched",
        statusAnalysis: analysis ? analysis.result : "",
        criteriaAnalysis: analysis ? analysis.criterion : [],
        statusReview: review ? review.result : "",
        criteriaReview: review ? review.criterion : []
      };
    } else return null;
    /*const { analysis, review } = getData(props.articleId, props.set);
    console.log(props.articleId, analysis, review);
    if (
      props.articleId !== "" &&
      statusAnalysis === "" &&
      statusReview === ""
    ) {

      return {
        statusAnalysis: analysis ? analysis.result : "",
        criteriaAnalysis: analysis ? analysis.criterion : [],
        statusReview: review ? review.result : "",
        criteriaReview: review ? review.criterion : []
      };
    }

    console.log("passou2");
    if (statusAnalysis !== "" || statusReview !== "") return null;

    return {
      statusAnalysis: analysis ? analysis.result : "",
      criteriaAnalysis: analysis ? analysis.criterion : [],
      statusReview: review ? review.result : "",
      criteriaReview: review ? review.criterion : []
    };*/
  }

  confirm = () => {
    const { articleId, set } = this.props;
    const {
      statusAnalysis,
      criteriaAnalysis,
      statusReview,
      criteriaReview
    } = this.state;

    if (statusAnalysis !== "" && criteriaAnalysis.length > 0) {
      setAnalysis(articleId, set, statusAnalysis, criteriaAnalysis);

      if (statusReview !== "" && criteriaReview.length > 0) {
        setReview(articleId, set, statusReview, criteriaReview);
      }
    }

    this.cancel();
    showSystematicReview();
  };

  cancel = () => {
    this.setState({
      searched: "closed"
    });
    this.props.closeDialog();
  };

  render() {
    const { visible, closeDialog } = this.props;
    const accept = listAddCriterion();
    const reject = listDeleteCriterion();

    return (
      <Dialog open={visible} onClose={closeDialog}>
        <DialogTitle>Status do Artigo</DialogTitle>
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
            justify="space-between"
            direction="row"
            wrap="nowrap"
            style={{ width: 500 }}
          >
            <Grid container direction="column" style={{ maxWidth: 220 }}>
              <SelectOption
                label="Análise do Artigo"
                value={this.state.statusAnalysis}
                items={[
                  {
                    label: "Aceito",
                    value: true
                  },
                  {
                    label: "Rejeitado",
                    value: false
                  }
                ]}
                update={value =>
                  this.setState(
                    { statusAnalysis: value, criteriaAnalysis: [] },
                    () => console.log(this.state.statusAnalysis)
                  )
                }
              />
              <SelectOption
                label="Critério(s)"
                placeholder="Selecione vários"
                items={
                  this.state.statusAnalysis
                    ? accept.map(a => ({
                        label: `${a.id} - ${a.criterion}`,
                        value: a.id
                      }))
                    : reject.map(a => ({
                        label: `${a.id} - ${a.criterion}`,
                        value: a.id
                      }))
                }
                update={value =>
                  this.setState({
                    criteriaAnalysis: [...this.state.criteriaAnalysis, value]
                  })
                }
              />
              <Grid
                container
                direction="row"
                style={{ width: 250, margin: "20px 10px" }}
              >
                {this.state.criteriaAnalysis.map((a, i) => (
                  <Chip
                    key={i}
                    style={{
                      margin: "3px 5px",
                      width: 50
                    }}
                    label={a}
                  />
                ))}
              </Grid>
            </Grid>
            <Grid container direction="column" style={{ maxWidth: 220 }}>
              <SelectOption
                label="Revisão do Artigo"
                value={this.state.statusReview}
                items={[
                  {
                    label: "Aceito",
                    value: true
                  },
                  {
                    label: "Rejeitado",
                    value: false
                  }
                ]}
                update={value =>
                  this.setState({ statusReview: value, criteriaReview: [] })
                }
              />
              <SelectOption
                label="Critério(s)"
                placeholder="Selecione vários"
                items={
                  this.state.statusReview
                    ? accept.map(a => ({
                        label: `${a.id} - ${a.criterion}`,
                        value: a.id
                      }))
                    : reject.map(a => ({
                        label: `${a.id} - ${a.criterion}`,
                        value: a.id
                      }))
                }
                update={value =>
                  this.setState({
                    criteriaReview: [...this.state.criteriaReview, value]
                  })
                }
              />
              <Grid
                container
                direction="row"
                style={{ width: 250, margin: "20px 10px" }}
              >
                {this.state.criteriaReview.map((a, i) => (
                  <Chip
                    key={i}
                    style={{
                      margin: "3px 5px",
                      width: 50
                    }}
                    label={a}
                  />
                ))}
              </Grid>
            </Grid>
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
              Confirmar
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
