import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';

import { useUIState, useUIDispatch } from '../UIContext';


const useStyles = makeStyles({
    root: {
        marginTop: 64,
    },
    table: {
        minWidth: 650,
        "& td": {
            border: '1px #D0D0D0 solid',
        }
        , "& th": {
            border: '1px #D0D0D0 solid',
            backgroundColor: '#E0E0E0'
        }
    },
    buttonBase: {
        height: '100%',
        width: '100%',
    }
});

export default function FeeTable() {
    const classes = useStyles();
    const { openDrawer } = useUIDispatch();
    const { feeTableContent } = useUIState();

    return (
        <TableContainer component={Paper}>
            <Table size='small' className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2}>
                            <Typography variant='h6'>Class</Typography>
                        </TableCell>
                        <TableCell rowSpan={2} align="center">
                            <Typography variant='h6'>Sections</Typography>
                        </TableCell>
                        <TableCell colSpan={3} align="center">
                            <Typography variant='h6'>Students</Typography>
                        </TableCell>
                        <TableCell rowSpan={2} align="center">
                            <Typography variant='h6'>Actions</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant='h6'>Total</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='h6'>Setup</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant='h6'>Pending</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feeTableContent.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="td" scope="row">
                                {row.classes}
                            </TableCell>
                            <TableCell align="center">{row.sections}</TableCell>
                            <TableCell align="center">{row.total}</TableCell>
                            <TableCell align="center">{row.setup}</TableCell>
                            <TableCell align="center">{row.pending}</TableCell>
                            <TableCell align="center">
                                <IconButton aria-label="delete" onClick={() => { openDrawer() }}>
                                    <BorderColorRoundedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
