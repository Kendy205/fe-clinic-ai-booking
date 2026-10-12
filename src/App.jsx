import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from './components/loading/Loading'
import ApiErrorModal from './components/error/ApiErrorModal'
import RealtimeNotificationHandler from './components/notification/RealtimeNotificationHandler'
import UserTemplate from './layouts/UserTemplate'
import AdminTemplate from './layouts/AdminTemplate'
import ProtectedRoute from './utils/route/ProtectedRoute'
import { ADMIN_ROLES, CUSTOMER_ROLES } from './utils/constants/System'

// Import Pages
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import NotFoundPage from './pages/error/NotFoundPage'
import DashboardAdminPage from './pages/admin/DashboardAdminPage'

function App() {
    return (
        <>
            <ToastContainer position="top-right" autoClose={4000} />
            <RealtimeNotificationHandler />
            <Loading />
            <ApiErrorModal />
            <Routes>
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
