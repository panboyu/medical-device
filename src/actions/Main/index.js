import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const HOSPITAL_YEAR_INCOME = 'HOSPITAL_YEAR_INCOME'

export const getYearIncome = createAction(
    HOSPITAL_YEAR_INCOME,
    params => api.get('/v1/saved-queries', params)
)