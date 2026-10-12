import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'

export default function UserHeader() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, user, role } = useSelector((state) => state.app.auth)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2.5 text-sky-600 font-extrabold text-xl tracking-tight hover:opacity-90 transition">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 text-lg">
                        ✚
                    </span>
                    <span>Clinic<span className="text-slate-900">AI</span></span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
                    <Link to="/" className="hover:text-sky-600 transition">Trang chủ</Link>
                    <a href="#services" className="hover:text-sky-600 transition">Dịch vụ y tế</a>
                    <a href="#doctors" className="hover:text-sky-600 transition">Bác sĩ chuyên khoa</a>
                    <a href="#about" className="hover:text-sky-600 transition">Về chúng tôi</a>
                </nav>

                <div className="flex items-center gap-3">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-3">
                            {role === 'ADMIN' || role === 'ADMINISTRATOR' ? (
                                <Link
                                    to="/admin"
                                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition"
                                >
                                    Quản trị
                                </Link>
                            ) : null}
                            <span className="text-xs font-bold text-slate-700 max-w-[120px] truncate">
                                {user?.fullName || user?.email || 'Tài khoản'}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                            >
                                Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm hover:shadow transition"
                        >
                            Đăng nhập
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
