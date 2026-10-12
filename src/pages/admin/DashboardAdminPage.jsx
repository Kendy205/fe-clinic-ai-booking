export default function DashboardAdminPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <span className="text-xs font-bold text-slate-400 uppercase">Lịch hẹn hôm nay</span>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">24</p>
                    <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">↑ +12% so với hôm qua</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <span className="text-xs font-bold text-slate-400 uppercase">Bác sĩ đang trực</span>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">8</p>
                    <span className="text-xs text-sky-600 font-semibold mt-1 inline-block">4 chuyên khoa sẵn sàng</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <span className="text-xs font-bold text-slate-400 uppercase">Bệnh nhân mới</span>
                    <p className="text-3xl font-extrabold text-slate-800 mt-2">15</p>
                    <span className="text-xs text-indigo-600 font-semibold mt-1 inline-block">Được phân loại bởi AI</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                <h3 className="font-bold text-base text-slate-800 mb-4">Danh sách lịch khám gần nhất</h3>
                <div className="text-xs text-slate-500 py-8 text-center border border-dashed border-slate-200 rounded-xl">
                    Chưa có lịch hẹn mới nào cần duyệt.
                </div>
            </div>
        </div>
    )
}
