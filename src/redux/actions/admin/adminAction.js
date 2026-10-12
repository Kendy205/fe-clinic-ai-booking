import { createAsyncThunk } from '@reduxjs/toolkit'
import { adminService } from '../../../services/admin/AdminService'

export const getDashboardStatsAsync = createAsyncThunk(
    'admin/getDashboardStats',
    async (_, { rejectWithValue }) => {
        try {
            const response = await adminService.getDashboardStats()
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message)
        }
    }
)
