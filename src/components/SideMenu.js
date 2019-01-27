import React, { Component } from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

export default class SideMenu extends Component {
  render() {
    const { options } = this.props;

    return (
      <div className="side-menu">
        <List>
          {options.map(({ type, name, action }, index) =>
            type === "option" ? (
              <ListItem button key={name} onClick={action}>
                <ListItemText primary={name} />
              </ListItem>
            ) : (
              <Divider key={index} />
            )
          )}
        </List>
      </div>
    );
  }
}
