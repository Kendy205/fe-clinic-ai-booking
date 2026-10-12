import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppToast } from '../../components/common/AppNotification'
import { loginUserAsync } from '../../redux/actions/user/authAction'

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const from = location.state?.from?.pathname || '/'

    const formik = useFormik({
        initialValues: {
            usernameOrEmail: '',
            password: '',
        },
        validationSchema: Yup.object({
            usernameOrEmail: Yup.string().required('Vui lòng nhập tên đăng nhập hoặc email'),
            password: Yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const resultAction = await dispatch(loginUserAsync(values))
                if (loginUserAsync.fulfilled.match(resultAction)) {
                    AppToast.success('Đăng nhập thành công!')
                    navigate(from, { replace: true })
                } else {
                    AppToast.error(resultAction.payload || 'Đăng nhập thất bại!')
                }
            } catch (err) {
                AppToast.error(err?.message || 'Đăng nhập thất bại!')
            } finally {
                setSubmitting(false)
            }
        },
    })

    return (
        <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Đăng Nhập Tài Khoản</h2>
                    <p className="text-xs text-slate-500">
                        Nhập thông tin tài khoản để quản lý lịch khám và hồ sơ bệnh án
                    </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Tên đăng nhập hoặc Email
                        </label>
                        <input
                            type="text"
                            name="usernameOrEmail"
                            value={formik.values.usernameOrEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="admin@clinic.com hoặc user"
                            className={`custom-admin-input ${
                                formik.touched.usernameOrEmail && formik.errors.usernameOrEmail
                                    ? 'custom-admin-input-error'
                                    : ''
                            }`}
                        />
                        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
                            <p className="text-xs text-red-500 mt-1">{formik.errors.usernameOrEmail}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="••••••••"
                            className={`custom-admin-input ${
                                formik.touched.password && formik.errors.password
                                    ? 'custom-admin-input-error'
                                    : ''
                            }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition cursor-pointer disabled:opacity-50"
                    >
                        {formik.isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
                    </button>
                </form>

                <div className="text-center text-xs text-slate-500">
                    Chưa có tài khoản?{' '}
                    <Link to="/" className="text-sky-600 font-bold hover:underline">
                        Đăng ký ngay
                    </Link>
                </div>
            </div>
        </div>
    )
}
