import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';

import { useUIState, useUIDispatch } from '../UIContext';

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
        "& td": {
            border: '1px #D0D0D0 solid',
        }
        , "& th": {
            border: '1px #D0D0D0 solid',
            backgroundColor: '#E0E0E0'
        }
    },
});

export default function FeeDrawerTable() {
    const classes = useStyles();
    const { feeDrawerTableContent } = useUIState();
    const { checkTableItem } = useUIDispatch();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Select</TableCell>
                        <TableCell align="center">Collection</TableCell>
                        <TableCell align="center">Fee code</TableCell>
                        <TableCell align="center">Fill Label</TableCell>
                        <TableCell align="center">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feeDrawerTableContent.map((row, index) => (
                        <TableRow key={index} onClick={() => { checkTableItem(index) }}>
                            <TableCell scope="row" align='center' padding="checkbox">
                                <Checkbox
                                    checked={row.select}
                                    inputProps={{ 'aria-labelledby': row.fillLabel }}
                                />
                            </TableCell>
                            <TableCell align="center">{row.collection}</TableCell>
                            <TableCell align="center">{row.feeCode}</TableCell>
                            <TableCell align="center">{row.fillLabel}</TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}