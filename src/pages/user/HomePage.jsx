import { Link } from 'react-router-dom'

export default function HomePage() {
    const specialties = [
        { name: 'Nhi khoa', icon: '👶', desc: 'Chăm sóc sức khỏe toàn diện cho trẻ nhỏ' },
        { name: 'Tim mạch', icon: '❤️', desc: 'Tầm soát và điều trị chuyên sâu tim mạch' },
        { name: 'Nội tổng quát', icon: '🩺', desc: 'Khám và tư vấn bệnh lý nội khoa người lớn' },
        { name: 'Răng hàm mặt', icon: '🦷', desc: 'Nha khoa thẩm mỹ & điều trị nha chu' },
        { name: 'Da liễu', icon: '✨', desc: 'Điều trị bệnh lý da & chăm sóc thẩm mỹ' },
        { name: 'Tai mũi họng', icon: '👂', desc: 'Khám nội soi và điều trị hô hấp trên' },
    ]

    return (
        <div className="space-y-16 py-8">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="max-w-2xl relative z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-sky-100 border border-white/20">
                            🤖 Trợ lý AI Khám Chữa Bệnh Thông Minh
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                            Đặt lịch khám bệnh nhanh chóng & chính xác với AI
                        </h1>
                        <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
                            Mô tả triệu chứng của bạn, trợ lý AI sẽ tự động phân tích, gợi ý chuyên khoa phù hợp và đề xuất lịch khám với bác sĩ giỏi nhất.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="#booking"
                                className="px-6 py-3 rounded-xl bg-white text-sky-700 font-bold text-sm shadow-md hover:bg-sky-50 transition transform active:scale-95"
                            >
                                Đặt lịch ngay
                            </a>
                            <Link
                                to="/login"
                                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm backdrop-blur-sm transition"
                            >
                                Tra cứu hồ sơ bệnh án
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-3">
                        Chuyên Khoa Nổi Bật
                    </h2>
                    <p className="text-sm text-slate-500">
                        Đội ngũ chuyên gia hàng đầu và trang thiết bị hiện đại sẵn sàng phục vụ
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialties.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-sky-300 transition duration-200 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition transform">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-base text-slate-800 mb-1">{item.name}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
