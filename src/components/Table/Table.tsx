import React, { FC } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableSyles from "../../assets/jss/great-state/components/tableStyle";

const useStyles = makeStyles(() => createStyles(tableSyles));

type CustomTableProps = {
  className?: string,
  tableHeaderColor: 'warning' | 'primary' | 'danger' | 'success' | 'info' | 'rose' | 'gray',
  tableHead: string[],
  tableData: ((string | number)[])[]
};

const CustomTable:FC<CustomTableProps> = ({ className, tableHead, tableData, tableHeaderColor }) => {
  const classes = useStyles();
  const tableClasses = classNames({
    [classes.table]: true,
    [className]: className !== undefined
  });

  return (
    <div className={classes.tableResponsive}>
      <Table className={tableClasses}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomTable;