import React from 'react';
import { Paper, Input, Grid, Typography, Divider, Table, TableBody, TableHead, TableRow, TableCell, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100%',
        margin: 0,
        padding: 16,
    },
    topPart: {
        display: 'flex',
        // justifyContent: 'space-between',
        padding: 8,
    },
    form: {
        flex: 1,
        marginBottom: 8,
    },
    topPartText: {
        fontSize: '0.8rem',
    },
    topPartInfo: {
        borderBottom: '1px #C8C8C8 solid',
        paddingBottom: 0,
        width: '100%'
    },
    table: {
        marginTop: 16,
        border: '1px #D0D0D0 solid',
        "& td": {
            border: '1px #D0D0D0 solid',
        }
        , "& th": {
            border: '1px #D0D0D0 solid',
            backgroundColor: '#E0E0E0'
        }
    },
    list: {
        padding: 0
    },
    listItem: {
        padding: 0
    },
    rightSide: {
        textAlign: 'right',
    },
    totalCell: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const CellListItem = ({ right, left }) => {
    const classes = useStyles();

    return (
        <ListItem className={classes.listItem}>
            <ListItemText primary={left} />
            <ListItemText primary={right} primaryTypographyProps={{ className: classes.rightSide }} />
        </ListItem>
    );
}

const CellList = () => {
    const classes = useStyles();

    return (
        <TableCell align="center">
            <List className={classes.list}>
                <CellListItem left='test' right='test' />
                <CellListItem left='test' right='test' />
                <CellListItem left='test' right='test' />
                <CellListItem left='test' right='test' />
                <CellListItem left='test' right='test' />
            </List>
        </TableCell>
    );
}


export default function FeeDrawerCard() {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={5}>
            <div className={classes.topPart}>
                <div style={{ height: 75, width: 75, backgroundColor: 'red', marginRight: 40, }} />
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={1} alignItems='center'>
                        <Grid item xs={3}>
                            <Typography align='right' className={classes.topPartText}>Enrollement No.</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Input defaultValue="01130867780" className={classes.topPartInfo} disableUnderline disabled inputProps={{ 'aria-label': 'description' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography align='right' className={classes.topPartText}>Name</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Input defaultValue="FirstName LastName" className={classes.topPartInfo} disableUnderline disabled inputProps={{ 'aria-label': 'description' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography align='right' className={classes.topPartText}>Class</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Input defaultValue="III - A" className={classes.topPartInfo} disableUnderline disabled inputProps={{ 'aria-label': 'description' }} />
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Divider />
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Jan</TableCell>
                        <TableCell align="center">Feb</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Mar</TableCell>
                        <TableCell align="center">Apr</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">May</TableCell>
                        <TableCell align="center">Jun</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Jul</TableCell>
                        <TableCell align="center">Aug</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Sep</TableCell>
                        <TableCell align="center">Oct</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nov</TableCell>
                        <TableCell align="center">Dec</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CellList />
                        <CellList />
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div className={classes.totalCell}>
                                <Typography>Total</Typography>
                                <Typography>300</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}
