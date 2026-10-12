import { BaseServices } from '../BaseService'

export class AdminService extends BaseServices {
    getDashboardStats = () => this.get('/api/Admin/dashboard')

    getAppointments = (params) => this.get('/api/Admin/appointments', { params })

    updateAppointmentStatus = (id, body) => this.put(`/api/Admin/appointments/${id}/status`, body)

    getDoctors = (params) => this.get('/api/Admin/doctors', { params })
}

export const adminService = new AdminService()
export default adminService
