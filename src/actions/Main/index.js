import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const HOSPITAL_YEAR_INCOME = 'HOSPITAL_YEAR_INCOME'
export const HOSPITAL_ALL_COST = 'HOSPITAL_ALL_COST'
export const HOSPITAL_YEAR_EARNINGS_OVERVIEW = 'HOSPITAL_YEAR_EARNINGS_OVERVIEW'
export const HOSPITAL_YEAR_WORKLOAD_RANK = 'HOSPITAL_YEAR_WORKLOAD_RANK'
export const HOSPITAL_TWELVE_MONTH_LIST = 'HOSPITAL_TWELVE_MONTH_LIST'
export const HOSPITAL_YEAR_DEPAR_RANK = 'HOSPITAL_YEAR_DEPAR_RANK'
export const HOSPITAL_SIX_CATE = 'HOSPITAL_SIX_CATE'

export const getYearIncome = createAction(
    HOSPITAL_YEAR_INCOME,
    params => api.get('', params)
)

export const getHospitalAlllCost = createAction(
    HOSPITAL_ALL_COST,
    params=>api.get('', params)
)

export const getHospitalYearEarningsOverview = createAction(
    HOSPITAL_YEAR_EARNINGS_OVERVIEW,
    params=>api.get('', params)
)

export const getHospitalYearWorkloadRank = createAction(
    HOSPITAL_YEAR_WORKLOAD_RANK,
    params=>api.get('', params)
)

export const getHospitalTwelveMonthList = createAction(
    HOSPITAL_TWELVE_MONTH_LIST,
    params=>api.get('', params)
)

export const getHospitalYearDepartRank = createAction(
    HOSPITAL_YEAR_DEPAR_RANK,
    params=>api.get('', params)
)

export const getHospitalSixCategoryItems = createAction(
    HOSPITAL_SIX_CATE,
    params=>api.get('', params)
)