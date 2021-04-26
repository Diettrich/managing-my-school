import React from 'react';
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import FeeTable from '../components/FeeTable';
import FeeDrawer from '../components/FeeDrawer';

const useStyles = makeStyles({
    root: {
        marginTop: 64,
    },
});

export default function Fees3() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <FeeTable />
            <FeeDrawer />
        </Container >
    );
}
