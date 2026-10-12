export default function AdminHeader({ title = 'Bảng điều khiển quản trị' }) {
    return (
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-800">{title}</h1>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Hệ thống hoạt động ổn định
            </span>
        </header>
    )
}
