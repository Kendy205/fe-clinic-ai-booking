import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import AdminHeader from '../components/admin/AdminHeader'

export default function AdminTemplate() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.app.auth)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div className="min-h-screen flex bg-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
                <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-800">
                    <span className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold">
                        ✚
                    </span>
                    <span className="font-bold text-white text-base tracking-wide">Clinic Admin</span>
                </div>

                <nav className="p-4 space-y-1 flex-1 text-sm font-medium">
                    <Link
                        to="/admin"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold shadow-xs"
                    >
                        <span>📊</span>
                        <span>Tổng quan (Dashboard)</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
                    >
                        <span>🌐</span>
                        <span>Về trang chủ</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="text-xs text-slate-400 mb-2 truncate">
                        Quản trị: <span className="text-white font-medium">{user?.fullName || 'Admin'}</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full text-xs font-semibold py-2 px-3 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/30 transition cursor-pointer text-center"
                    >
                        Đăng xuất
                    </button>
                </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader title="Bảng điều khiển quản trị phòng khám" />

                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
