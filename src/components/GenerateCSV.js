import React, { Component } from "react";

import { saveAs } from "file-saver";

import JSONToCSV from "json2csv";
import { Button } from "@material-ui/core";

export default class GenerateCSV extends Component {
  onClick = () => {
    const { source, fields, filename } = this.props;
    console.log(source);
    const csv = JSONToCSV.parse(source, { fields });
    let blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

    saveAs(blob, `${filename}.csv`);
  };

  render() {
    return (
      <Button
        style={{ width: 180, margin: "10px 0" }}
        color="primary"
        variant="contained"
        onClick={this.onClick}
      >
        Exportar CSV
      </Button>
    );
  }
}
