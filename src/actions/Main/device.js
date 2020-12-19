import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const DEVICE_ITEM_LIST = 'DEVICE_ITEM_LIST'
export const DEVICE_ITEM_COST_TREND = 'DEVICE_ITEM_COST_TREND'
export const DEVICE_ITEM_COST_PART = 'DEVICE_ITEM_COST_PART'
export const DEVICE_ITEM_RATE_YEAR = 'DEVICE_ITEM_RATE_YEAR'
export const DEVICE_ITEM_INCOME_INFO = 'DEVICE_ITEM_INCOME_INFO'
export const DEVICE_ITEM_INCOME_COST_TREND = 'DEVICE_ITEM_INCOME_COST_TREND'
export const DEVICE_ITEM_SINGLEDIA_TREND = 'DEVICE_ITEM_SINGLEDIA_TREND'
export const DEVICE_ITEM_WORK_LOAD = 'DEVICE_ITEM_WORK_LOAD'

export const DEVICE_SINGLEDIA_COUNT = 'DEVICE_SINGLEDIA_COUNT'
export const DEVICE_TOTAL_RATE = 'DEVICE_TOTAL_RATE'
export const DEVICE_TOTAL_RETURN = 'DEVICE_TOTAL_RETURN'
export const DEVICE_COMPARE_RATE = 'DEVICE_COMPARE_RATE'

//  设备列表
export const getItemList = createAction(
    DEVICE_ITEM_LIST,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  年成本趋势
export const getItemCostTrend = createAction(
    DEVICE_ITEM_COST_TREND,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  总成本构成
export const getItemCostPart = createAction(
    DEVICE_ITEM_COST_PART,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  当年任务完成
export const getItemReturnrateYear = createAction(
    DEVICE_ITEM_RATE_YEAR,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  总收入总成本 本年收入本年成本
export const getItemIncomeInfo = createAction(
    DEVICE_ITEM_INCOME_INFO,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  收入成本趋势
export const getIncomeCostTrend = createAction(
    DEVICE_ITEM_INCOME_COST_TREND,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  检查人次趋势
export const getSinglediaTrend = createAction(
    DEVICE_ITEM_SINGLEDIA_TREND,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  设备工作量前10
export const getItemWorkload = createAction(
    DEVICE_ITEM_WORK_LOAD,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  科室工作量前10
export const getSinglediaCount = createAction(
    DEVICE_SINGLEDIA_COUNT,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  总收益率年收益率
export const getTotalReturnRate = createAction(
    DEVICE_TOTAL_RATE,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  当年总检查治疗人次
export const getTotalSinglediaCount = createAction(
    DEVICE_TOTAL_RETURN,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)

//  同比收益率
export const getCompareReturnRate = createAction(
    DEVICE_COMPARE_RATE,
    params => api.get('', params),
    () => {
        return { noMask: true }
    }
)