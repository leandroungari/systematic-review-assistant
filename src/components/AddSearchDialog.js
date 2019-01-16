import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import classNames from "classnames";
import Dropzone from "react-dropzone";
import { TextField } from "@material-ui/core";

export default class AddSearchDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base: ""
    };
  }

  onDrop = acceptedFiles => {
    const { base } = this.state;

    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileAsText = reader.result;
        // do whatever you want with the file content

        this.props.loadFile(base, fileAsText);
        this.props.closeDialog();
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsText(file);
    });
  };

  render() {
    const { visible, closeDialog } = this.props;
    return (
      <Dialog open={visible} onClose={closeDialog}>
        <DialogTitle>Adicionar Pesquisa</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 450,
            padding: "20px 30px 40px 30px",
            alignItems: "flex-start"
          }}
        >
          <TextField
            label="Base Bibliográfica"
            style={{
              width: 180,
              marginBottom: 40
            }}
            onChange={event => this.setState({ base: event.target.value })}
          />
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className={classNames("dropzone", {
                    "dropzone--isActive": isDragActive
                  })}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Typography>Arraste o arquivo aqui ...</Typography>
                  ) : (
                    <Typography>
                      Arraste o(s) arquivo(s) .bib aqui ou clique para
                      carregá-lo(s) ...
                    </Typography>
                  )}
                </div>
              );
            }}
          </Dropzone>
          <Grid
            container
            justify="center"
            style={{
              marginTop: 55
            }}
          >
            <Button onClick={closeDialog} variant="contained" color="primary">
              Cancelar
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}
