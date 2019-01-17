import React, { Component } from "react";

import { withTheme } from "@material-ui/core/styles/";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";

import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export default class TableViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5
    };
  }

  changePage = (event, newPage) => {
    this.setPage(newPage);
  };

  changeRowsPerPage = event => {
    this.setRowsPerPage(event.target.value);
  };

  setPage = value => this.setState({ page: value });
  setRowsPerPage = value => this.setState({ rowsPerPage: value });

  render() {
    const { page, rowsPerPage } = this.state;
    const { rows, titles } = this.props;

    console.table(titles);

    if (rows === undefined || rows.length === 0) {
      return <Typography>Não há registros</Typography>;
    } else
      return (
        <Table style={{ minWidth: "100%" }}>
          <TableHead>
            <TableRow>
              {titles.map(a => (
                <TableCell>{a}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => this.props.renderRow(row))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.changePage}
                onChangeRowsPerPage={this.changeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      );
  }
}

class TablePaginationActions extends Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    const { page } = this.props;
    this.props.onChangePage(event, page - 1);
  };

  handleNextButtonClick = event => {
    const { page } = this.props;
    this.props.onChangePage(event, page + 1);
  };

  handleLastPageButtonClick = event => {
    const { count, rowsPerPage } = this.props;
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(count / rowsPerPage) - 1)
    );
  };

  render() {
    const theme = withTheme();
    const { count, page, rowsPerPage } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="Primeira Página"
        >
          {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Página Anterior"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Próxima Página"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Última Página"
        >
          {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
        </IconButton>
      </div>
    );
  }
}
