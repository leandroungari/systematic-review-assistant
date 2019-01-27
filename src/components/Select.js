import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default class SelectOption extends Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = {
      value: value !== undefined ? value : ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });

    this.props.update(event.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <FormControl
        style={{
          margin: "15px 0"
        }}
      >
        <InputLabel shrink>{this.props.label}</InputLabel>
        <Select
          value={value}
          onChange={this.handleChange}
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
        >
          {this.props.items.map(({ label, value }, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{this.props.placeholder}</FormHelperText>
      </FormControl>
    );
  }
}
