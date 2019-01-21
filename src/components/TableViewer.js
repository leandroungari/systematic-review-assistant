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
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

export default class TableViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5,
      filter: "all",
      filters: [
        {
          value: "all",
          action: () => {
            return true;
          }
        },
        {
          value: "not-analyse",
          action: a => {
            return !a.analysis && !a.review;
          }
        },
        {
          value: "analyse/not-review",
          action: a => {
            return a.analysis && !a.review;
          }
        },
        {
          value: "review",
          action: a => {
            return a.analysis && a.review;
          }
        }
      ]
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

  renderFilter = () => {
    const { showFilter } = this.props;
    const { filter } = this.state;

    if (!showFilter) return null;

    return (
      <FormControl style={{ paddingLeft: 30 }}>
        <FormLabel component="legend">Filtre os resultados:</FormLabel>
        <RadioGroup
          style={{ display: "flex", flexDirection: "row" }}
          value={filter}
          onChange={event => this.setState({ filter: event.target.value })}
        >
          <FormControlLabel value="all" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="not-analyse"
            control={<Radio />}
            label="Não Analisado"
          />
          <FormControlLabel
            value="analyse/not-review"
            control={<Radio />}
            label="Analisado/Não Revisado"
          />
          <FormControlLabel
            value="review"
            control={<Radio />}
            label="Revisado"
          />
        </RadioGroup>
      </FormControl>
    );
  };

  render() {
    const { page, rowsPerPage } = this.state;
    const { rows, titles } = this.props;

    const { filter } = this.state;

    const functionFilter = this.state.filters.filter(
      ({ value }) => filter === value
    )[0].action;

    if (rows === undefined || rows.length === 0) {
      return (
        <Grid
          style={{
            display: "flex",
            width: "100%",
            height: 400,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography>Não há registros</Typography>
        </Grid>
      );
    } else
      return (
        <Grid container direction="column">
          {this.renderFilter()}
          <Table style={{ width: this.props.width }}>
            <TableHead>
              <TableRow>
                {titles.map((a, index) => (
                  <TableCell key={index}>{a}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter(a => functionFilter(a))
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
        </Grid>
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
