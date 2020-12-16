import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
    DEVICE_ITEM_LIST,
    DEVICE_ITEM_COST_TREND,
    DEVICE_ITEM_COST_PART,
    DEVICE_ITEM_RATE_YEAR,
    DEVICE_ITEM_INCOME_INFO,
    DEVICE_ITEM_INCOME_COST_TREND,
    DEVICE_ITEM_SINGLEDIA_TREND,
} from 'actions/Main/device'

const itemList = handleActions({
    [DEVICE_ITEM_LIST]: (state, { payload }) => payload
}, [])

const itemCostTrend = handleActions({
    [DEVICE_ITEM_COST_TREND]: (state, { payload }) => payload
}, [])

const itemCostPart = handleActions({
    [DEVICE_ITEM_COST_PART]: (state, { payload }) => payload
}, [])

const returnrateYear = handleActions({
    [DEVICE_ITEM_RATE_YEAR]: (state, { payload }) => payload
}, [])

const itemIncomeInfo = handleActions({
    [DEVICE_ITEM_INCOME_INFO]: (state, { payload }) => payload
}, [])

const incomeCostTrend = handleActions({
    [DEVICE_ITEM_INCOME_COST_TREND]: (state, { payload }) => payload
}, [])

const singlediaTrend = handleActions({
    [DEVICE_ITEM_SINGLEDIA_TREND]: (state, { payload }) => payload
}, [])

export default combineReducers({
    itemList,
    itemCostTrend,
    itemCostPart,
    returnrateYear,
    itemIncomeInfo,
    incomeCostTrend,
    singlediaTrend,
})