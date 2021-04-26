import React from 'react';
import { reducer, ActionTypes } from './reducer';

const demoFeeTableContent = [
    {
        "classes": "XI",
        "sections": "A",
        "total": 0,
        "setup": 0,
        "pending": 0
    },
    {
        "classes": "XI",
        "sections": "B",
        "total": 0,
        "setup": 0,
        "pending": 0
    },
    {
        "classes": "I",
        "sections": "A",
        "total": 0,
        "setup": 0,
        "pending": 0
    },
    {
        "classes": "I",
        "sections": "B",
        "total": 3,
        "setup": 0,
        "pending": 3
    },
    {
        "classes": "III",
        "sections": "B",
        "total": 0,
        "setup": 0,
        "pending": 0
    }
];

const demoFeeDrawerTableContent = [
    {
        "select": false,
        "collection": "",
        "feeCode": "f-code1",
        "fillLabel": "f-label1",
        "amount": 100
    },
    {
        "select": false,
        "collection": "",
        "feeCode": "f-code2",
        "fillLabel": "f-label2",
        "amount": 200
    },
    {
        "select": false,
        "collection": "2",
        "feeCode": "f-code3",
        "fillLabel": "f-label3",
        "amount": 3000
    },
    {
        "select": false,
        "collection": "2",
        "feeCode": "f-code4",
        "fillLabel": "f-label4",
        "amount": 3000
    },
    {
        "select": false,
        "collection": "2",
        "feeCode": "f-code5",
        "fillLabel": "f-label5",
        "amount": 5000
    },
    {
        "select": false,
        "collection": "2",
        "feeCode": "f-code6",
        "fillLabel": "f-label6",
        "amount": 50
    },
    {
        "select": false,
        "collection": "3",
        "feeCode": "f-code7",
        "fillLabel": "f-label7",
        "amount": 500
    }
];

const initialContext = {
    isDrawerOpen: false,
    feeTableContent: demoFeeTableContent,
    feeDrawerTableContent: demoFeeDrawerTableContent,
}

const StateContext = React.createContext(initialContext)
const DispatchContext = React.createContext(undefined)

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialContext)
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export const useUIState = () => {
    return React.useContext(StateContext)
}

export const useUIDispatch = () => {
    const dispatch = React.useContext(DispatchContext)

    if (dispatch === undefined) {
        throw new Error('useBookingDispatch must be used within a BookingProvider')
    }

    const openDrawer = React.useCallback(() => {
        dispatch({ type: ActionTypes.OPEN_DRAWER })
    }, [dispatch])

    const closeDrawer = React.useCallback(() => {
        dispatch({ type: ActionTypes.CLOSE_DRAWER })
    }, [dispatch])

    const checkTableItem = React.useCallback((id) => {
        dispatch({ type: ActionTypes.CHECK_TABLE_ITEM, payload: id })
    }, [dispatch])

    return React.useMemo(
        () => ({
            openDrawer,
            closeDrawer,
            checkTableItem,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]
    )
}