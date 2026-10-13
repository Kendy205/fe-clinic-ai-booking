import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from './components/loading/Loading'
import ApiErrorModal from './components/error/ApiErrorModal'
import RealtimeNotificationHandler from './components/notification/RealtimeNotificationHandler'
import UserTemplate from './layouts/UserTemplate'
import AdminTemplate from './layouts/AdminTemplate'
import ReceptionLayout from './layouts/ReceptionLayout'
import ProtectedRoute from './utils/route/ProtectedRoute'
import { ADMIN_ROLES, CUSTOMER_ROLES } from './utils/constants/System'

// Import Pages
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import NotFoundPage from './pages/error/NotFoundPage'
import DashboardAdminPage from './pages/admin/DashboardAdminPage'

// Import Reception Pages
import ReceptionDashboardPage from './pages/reception/ReceptionDashboardPage'
import AppointmentsPage from './pages/reception/AppointmentsPage'
import CheckInPage from './pages/reception/CheckInPage'
import QueueManagementPage from './pages/reception/QueueManagementPage'
import PatientsPage from './pages/reception/PatientsPage'
import ClinicSchedulePage from './pages/reception/ClinicSchedulePage'
import AdministrationPage from './pages/reception/AdministrationPage'
import TasksPage from './pages/reception/TasksPage'
import ReportsPage from './pages/reception/ReportsPage'

function App() {
    return (
        <>
            <ToastContainer position="top-right" autoClose={4000} />
            <RealtimeNotificationHandler />
            <Loading />
            <ApiErrorModal />
            <Routes>
                {/* Reception Portal Routes */}
                <Route path="/reception" element={<ReceptionLayout />}>
                    <Route index element={<Navigate to="/reception/dashboard" replace />} />
                    <Route path="dashboard" element={<ReceptionDashboardPage />} />
                    <Route path="appointments" element={<AppointmentsPage />} />
                    <Route path="check-in" element={<CheckInPage />} />
                    <Route path="queue" element={<QueueManagementPage />} />
                    <Route path="patients" element={<PatientsPage />} />
                    <Route path="schedule" element={<ClinicSchedulePage />} />
                    <Route path="administration" element={<AdministrationPage />} />
                    <Route path="tasks" element={<TasksPage />} />
                    <Route path="reports" element={<ReportsPage />} />
                </Route>

                {/* Client / User Routes */}
                <Route element={<UserTemplate />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    
                    {/* Protected User Routes */}
                    <Route element={<ProtectedRoute allowedRoles={CUSTOMER_ROLES} />}>
                        {/* <Route path="/profile" element={<ProfilePage />} /> */}
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={ADMIN_ROLES} />}>
                    <Route path="/admin" element={<AdminTemplate />}>
                        <Route index element={<DashboardAdminPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
