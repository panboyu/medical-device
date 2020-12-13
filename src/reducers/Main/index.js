import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
    HOSPITAL_YEAR_INCOME,
    HOSPITAL_ALL_COST,
    HOSPITAL_YEAR_EARNINGS_OVERVIEW,
    HOSPITAL_YEAR_WORKLOAD_RANK,
    HOSPITAL_TWELVE_MONTH_LIST,
    HOSPITAL_YEAR_DEPAR_RANK,
    HOSPITAL_SIX_CATE,
} from 'actions/Main'

const yearIncome = handleActions({
    [HOSPITAL_YEAR_INCOME]: (state, { payload }) => payload
}, [])

const allCost = handleActions({
    [HOSPITAL_ALL_COST]: (state, { payload }) => payload
}, [])

const erningsOverview = handleActions({
    [HOSPITAL_YEAR_EARNINGS_OVERVIEW]: (state, { payload }) => payload
}, [])

const workloadRank = handleActions({
    [HOSPITAL_YEAR_WORKLOAD_RANK]: (state, { payload }) => payload
}, [])

const twelveMonthList = handleActions({
    [HOSPITAL_TWELVE_MONTH_LIST]: (state, { payload }) => payload
}, [])

const deparRank = handleActions({
    [HOSPITAL_YEAR_DEPAR_RANK]: (state, { payload }) => payload
}, [])

const sixCate = handleActions({
    [HOSPITAL_SIX_CATE]: (state, { payload }) => payload
}, [])

export default combineReducers({
    yearIncome,
    allCost,
    erningsOverview,
    workloadRank,
    twelveMonthList,
    deparRank,
    sixCate,
})