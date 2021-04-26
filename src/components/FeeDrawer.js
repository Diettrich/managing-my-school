import React from 'react';
import { Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useUIState, useUIDispatch } from '../UIContext';
import FeeDrawerTable from './FeeDrawerTable';
import FeeDrawerCard from './FeeDrawerCard';

const useStyles = makeStyles({
    root: {
        width: '80vw',
    },
    feeDrawerContent: {
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
    },
    table: {
        width: 'calc(44% - 6px)',
    },
    card: {
        width: 'calc(56% - 6px)',
    }
});

export default function FeeDrawer() {
    const classes = useStyles();
    const { isDrawerOpen } = useUIState();
    const { closeDrawer } = useUIDispatch();

    return (
        <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => { closeDrawer() }}>
            <div className={classes.root}>
                <div className={classes.feeDrawerContent}>
                    <div className={classes.table}>
                        <FeeDrawerTable />
                    </div>
                    <div className={classes.card}>
                        <FeeDrawerCard />
                    </div>
                </div>
            </div>
        </Drawer>
    )
}
