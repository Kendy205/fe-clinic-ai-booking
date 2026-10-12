import { createSlice } from '@reduxjs/toolkit'
import { getDashboardStatsAsync } from '../../actions/admin/adminAction'

const initialState = {
    stats: null,
    loading: false,
    error: null,
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        clearAdminError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDashboardStatsAsync.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getDashboardStatsAsync.fulfilled, (state, action) => {
                state.loading = false
                state.stats = action.payload
            })
            .addCase(getDashboardStatsAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { clearAdminError } = adminSlice.actions
export default adminSlice.reducer
