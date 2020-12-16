import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const DEVICE_ITEM_LIST = 'DEVICE_ITEM_LIST'
export const DEVICE_ITEM_COST_TREND = 'DEVICE_ITEM_COST_TREND'
export const DEVICE_ITEM_COST_PART = 'DEVICE_ITEM_COST_PART'
export const DEVICE_ITEM_RATE_YEAR = 'DEVICE_ITEM_RATE_YEAR'
export const DEVICE_ITEM_INCOME_INFO = 'DEVICE_ITEM_INCOME_INFO'
export const DEVICE_ITEM_INCOME_COST_TREND = 'DEVICE_ITEM_INCOME_COST_TREND'
export const DEVICE_ITEM_SINGLEDIA_TREND = 'DEVICE_ITEM_SINGLEDIA_TREND'

//  设备列表
export const getItemList = createAction(
    DEVICE_ITEM_LIST,
    params => api.get('', params)
)

//  年成本趋势
export const getItemCostTrend = createAction(
    DEVICE_ITEM_COST_TREND,
    params => api.get('', params)
)

//  总成本构成
export const getItemCostPart = createAction(
    DEVICE_ITEM_COST_PART,
    params => api.get('', params)
)

//  当年收益率
export const getItemReturnrateYear = createAction(
    DEVICE_ITEM_RATE_YEAR,
    params => api.get('', params)
)

//  总收入年收入月收入
export const getItemIncomeInfo = createAction(
    DEVICE_ITEM_INCOME_INFO,
    params => api.get('', params)
)

//  收入成本趋势
export const getIncomeCostTrend = createAction(
    DEVICE_ITEM_INCOME_COST_TREND,
    params => api.get('', params)
)

//  检查人次趋势
export const getSinglediaTrend = createAction(
    DEVICE_ITEM_SINGLEDIA_TREND,
    params => api.get('', params)
)