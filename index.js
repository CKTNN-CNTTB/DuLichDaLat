// -------------------- TAILWIND CONFIGURATION --------------------
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                fontFamily: {
                    serif: ['"Playfair Display"', 'serif'],
                    sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                },
                colors: {
                    pine: {
                        50: '#f0fdf4',
                        100: '#dcfce7',
                        500: '#10b981',
                        600: '#059669',
                        700: '#047857',
                        800: '#065f46',
                        900: '#064e3b',
                    },
                    daquy: {
                        400: '#fbbf24',
                        500: '#f59e0b',
                        600: '#d97706',
                    },
                    cream: '#FAF9F6',
                }
            }
        }
    };
}

// -------------------- DATA --------------------
const DESTINATIONS = [
    {
        id: 'dest-1',
        name: 'Đồi Thiên Phúc Đức & Đồi Đa Phú',
        category: 'nature',
        categoryLabel: 'Thiên nhiên & Săn mây',
        rating: 4.9,
        price: 'Miễn phí',
        hours: '04:30 - 18:00',
        address: 'Phường 7, TP. Đà Lạt (Cách trung tâm 8km)',
        coords: '11.9882° N, 108.4351° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKqtWKxlLWcsbRZuj6Sgt7k2ovG6WsyYE8AaQk4zLzRk_tMNOg5UedwAz&s=10',
        desc: 'Thiên đường săn mây bình minh nổi tiếng bậc nhất Đà Lạt với biển mây bồng bềnh ôm trọn thung lũng rừng thông và hình ảnh cây thông cô đơn đầy chất thơ.'
    },
    {
        id: 'dest-2',
        name: 'Ga Đà Lạt',
        category: 'architecture',
        categoryLabel: 'Check-in & Kiến trúc',
        rating: 4.8,
        price: '50.000đ / người',
        hours: '07:30 - 17:00',
        address: 'Số 1 Quang Trung, Phường 10, TP. Đà Lạt',
        coords: '11.9416° N, 108.4548° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZkxaIX3jzDd-bQx0E8n7mi0eZmRGowazO74e6L_1iwr5tvJF8JODDPP6&s=10',
        desc: 'Nhà ga xe lửa cổ nhất Đông Dương mang kiến trúc Art Deco độc đáo với ba chóp mái nhọn mô phỏng đỉnh núi Langbiang hùng vĩ và đầu tàu hơi nước cổ.'
    },
    {
        id: 'dest-3',
        name: 'Thung Lũng Hoa Cẩm Tú Cầu',
        category: 'farm',
        categoryLabel: 'Vườn hoa & Nông trại',
        rating: 4.7,
        price: '60.000đ / người',
        hours: '07:00 - 17:30',
        address: 'Tổ 1, Thôn Lộc Quý, Xã Xuân Thọ, Đà Lạt',
        coords: '11.9289° N, 108.5162° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMgqzHOrw8N2lQdQ7uvouI5SXG5mvDZp6amy7BGPGXQ&s=10',
        desc: 'Cánh đồng hoa cẩm tú cầu rộng hơn 2 hecta nở rộ quanh năm dưới tán thông xanh mát, kết hợp cùng các tiểu cảnh cầu vàng và nấc thang lên thiên đường.'
    },
    {
        id: 'dest-4',
        name: 'Tiệm Cà Phê Túi Mơ To',
        category: 'cafe',
        categoryLabel: 'Cà phê chill',
        rating: 4.9,
        price: '55.000đ - 85.000đ',
        hours: '07:45 - 21:30',
        address: 'Hẻm 31 Sào Nam, Phường 11, TP. Đà Lạt',
        coords: '11.9567° N, 108.4812° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK62Ujw__ErNezfz4-wiiBg2nvsrKOwQ8sruhiTeUERw&s=10',
        desc: 'Ngôi nhà lồng kính ngập tràn hoa cúc họa mi với tầm nhìn bao trọn thung lũng đèn lồng lung linh khi hoàng hôn buông xuống phố núi.'
    },
    {
        id: 'dest-5',
        name: 'Hồ Tuyền Lâm & Rừng Lá Phong',
        category: 'nature',
        categoryLabel: 'Thiên nhiên & Săn mây',
        rating: 4.9,
        price: 'Miễn phí (Chèo SUP 350k)',
        hours: '06:00 - 18:00',
        address: 'Phường 4, TP. Đà Lạt (Cách trung tâm 6km)',
        coords: '11.9022° N, 108.4367° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEumcjWNUyyWB6h-jBw8NLTqZu_eRZjxAhrdPOhBh0A&s=10',
        desc: 'Lá phổi xanh của Đà Lạt với mặt hồ tĩnh lặng phản chiếu rừng thông nguyên sinh, lý tưởng để chèo thuyền SUP đón bình minh hoặc cắm trại dã ngoại.'
    },
    {
        id: 'dest-6',
        name: 'Dinh Bảo Đại III (Biệt Điện Mùa Hè)',
        category: 'architecture',
        categoryLabel: 'Check-in & Kiến trúc',
        rating: 4.6,
        price: '40.000đ / người',
        hours: '07:00 - 17:30',
        address: 'Số 1 Triệu Việt Vương, Phường 4, TP. Đà Lạt',
        coords: '11.9304° N, 108.4297° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYTmsb2I_vptHorXLNVNBB7g52Pfir_fDbaGRGHwCyA&s=10',
        desc: 'Công trình kiến trúc châu Âu tinh tế nằm giữa đồi thông Ái Ân, lưu giữ nguyên vẹn không gian sinh hoạt và làm việc của vị hoàng đế cuối cùng triều Nguyễn.'
    },
    {
        id: 'dest-7',
        name: 'Mê Linh Coffee Garden',
        category: 'cafe',
        categoryLabel: 'Cà phê chill',
        rating: 4.9,
        price: '30.000đ - 180.000đ',
        hours: '07:30 - 17:00',
        address: 'Tổ 20, thôn 4, xã Tà Nung (Cam Ly), TP. Đà Lạt',
        coords: '11.9016° N, 108.3475° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2GczI3MSVSokM_XmX_Z4cdR9xpkXtEyIU_a8CNs0KYxz7FYhVY9iMllz&s=10',
        desc: 'Tọa lạc tại vùng ngoại ô Tà Nung yên bình, Mê Linh Coffee Garden nổi tiếng với không gian mở 360 độ hướng thẳng ra những đồi cà phê xanh mướt và hồ Đập Cam Ly thơ mộng. Đến đây, du khách không chỉ được thưởng thức hương vị cà phê chồn nguyên chất đậm đà mà còn có cơ hội tìm hiểu quy trình sản xuất cà phê tại chỗ và check-in tại nhiều tiểu cảnh độc đáo giữa núi rừng cao nguyên.'
    },
    {
        id: 'dest-8',
        name: 'Vườn hoa thành phố Đà Lạt',
        category: 'farm',
        categoryLabel: 'Vườn hoa & Nông trại',
        rating: 4.9,
        price: 'Người lớn: 40.000 VNĐ / vé / lượt \n Trẻ em (chiều cao dưới 1,2m): 20.000 VNĐ / vé / lượt \n Trẻ em dưới 5 tuổi (hoặc dưới chiều cao quy định): Miễn phí',
        hours: '07:00 - 18:00',
        address: 'Số 02 đường Trần Nhân Tông, Phường 8 (khu vực Lâm Viên), Thành phố Đà Lạt',
        coords: '11.9542° N, 108.4445° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD24eZDbEFp-crgMCbGsD-248MT_nVNU8CUXXCRjlh8K0jH5ybGT4aE3o&s=10',
        desc: 'Nằm ngay khu vực trung tâm bên bờ Hồ Xuân Hương, Vườn hoa thành phố được ví như một bảo tàng thực vật khổng lồ với hàng trăm loài hoa đặc trưng của xứ lạnh như cẩm tú cầu, mimosa, hoa hồng, lan và đỗ quyên khoe sắc quanh năm. Đây là điểm dừng chân lý tưởng để dạo bộ thư giãn, chiêm ngưỡng nghệ thuật sắp đặt tiểu cảnh rực rỡ và lưu giữ những bức ảnh đậm chất "thành phố ngàn hoa".'
    },
    {
        id: 'dest-9',
        name: 'Hồ Xuân Hương',
        category: 'nature',
        categoryLabel: 'Thiên nhiên & Săn mây',
        rating: 4.7,
        price: 'Miễn phí',
        hours: 'Tự do tham quan',
        address: 'Nằm ngay trung tâm Thành phố Đà Lạt (vây quanh các tuyến đường chính như Trần Quốc Toản, Bà Huyện Thanh Quan, Đinh Tiên Hoàng)',
        coords: '11.9404° N, 108.4385° E',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFkvxFj1ys_nxY4IBffa6y-jSuMDOMcP9a3Ntl8_XdF5c0htvWQx3dfA&s=10',
        desc: 'Được mệnh danh là "trái tim của Đà Lạt", Hồ Xuân Hương sở hữu vẻ đẹp dịu dàng với mặt nước phẳng lặng hình trăng lưỡi liềm, bao quanh bởi những hàng thông xanh rì và thảm cỏ êm ái. Dù là tản bộ ngắm sương sớm, đạp vịt lúc chiều tà hay thưởng thức sữa đậu nành nóng bên bờ hồ về đêm, nơi đây luôn mang lại cảm giác bình yên và lãng mạn đặc trưng nhất của phố núi.'
    }
];

const TOURS = [
    {
        id: 'tour-1',
        title: 'Tour Săn Mây Đồi Đa Phú & Đón Bình Minh',
        duration: 'Nửa ngày (04:30 - 09:30)',
        priceAdult: 350000,
        priceChild: 200000,
        rating: 4.9,
        reviewsCount: 248,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CeL9Iv2SHuyOCVQBe4J6dUCth9PIQo0NI7oiokTCAw&s=10',
        highlights: ['Xe đưa đón tận khách sạn lúc 4h30', 'Thưởng thức cà phê nóng & mì ly giữa biển mây', 'Tham quan vườn hồng treo gió & đồi chè Cầu Đất']
    },
    {
        id: 'tour-2',
        title: 'Tour Giao Lưu Cồng Chiêng Tây Nguyên Langbiang',
        duration: 'Buổi tối (18:00 - 21:00)',
        priceAdult: 290000,
        priceChild: 160000,
        rating: 4.8,
        reviewsCount: 192,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf37sE5UBs7D2d_qUduYCjv15QOQrCunyakoUugbZkA&s=10',
        highlights: ['Quây quần bên ánh lửa trại ấm áp dưới chân núi', 'Thưởng thức rượu cần & thịt rừng nướng xiên', 'Hòa mình vào điệu múa xoang của đồng bào K’Ho']
    },
    {
        id: 'tour-3',
        title: 'Tour Khám Phá Thác Datanla & Hành Trình High Rope',
        duration: '1 Ngày (08:30 - 16:00)',
        priceAdult: 650000,
        priceChild: 420000,
        rating: 4.9,
        reviewsCount: 315,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKzuiGeVZrVCplXopZxDLUW3NDJvn3zpBJAE6Us023w&s=10',
        highlights: ['Trải nghiệm máng trượt xuyên rừng dài nhất Đông Nam Á', 'Thử thách đu dây mạo hiểm trên tán thông', 'Chinh phục đỉnh Langbiang bằng xe Jeep']
    },
    {
        id: 'tour-4',
        title: 'Tour Trải Nghiệm Cà Phê Arabica & Nông Trại Xanh',
        duration: '1 Ngày (08:30 - 15:30)',
        priceAdult: 480000,
        priceChild: 280000,
        rating: 4.8,
        reviewsCount: 164,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
        highlights: ['Tìm hiểu quy trình hái & rang xay cà phê Cầu Đất', 'Hái dâu tây công nghệ cao tại vườn', 'Check-in Cổng Trời Bali & Hồ Vô Cực']
    }
];

const CUISINES = [
    {
        name: 'Bánh Tráng Nướng',
        tag: 'Ăn vặt tối',
        price: '15.000đ - 30.000đ/bánh',
        desc: 'Được mệnh danh là "Pizza Đà Lạt", giòn rụm trên bếp than hồng với trứng cút, hành lá, khô bò và phô mai béo ngậy.',
        spot: 'Gợi ý: Bánh tráng nướng Dì Đinh (26 Hoàng Diệu)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6HoQcfGFYqjxCu68GyuQnmd8RO7o-ADhTVwFGWZF9hPVSHFE95WOBGM&s=10'
    },
    {
        name: 'Lẩu Gà Lá É',
        tag: 'Món chính ấm bụng',
        price: '200.000đ - 400.000đ/nồi.',
        desc: 'Nước dùng thanh ngọt từ thịt gà ta thả vườn, măng tươi giòn sần sật hòa quyện hương thơm cay nhẹ của lá é.',
        spot: 'Gợi ý: Lẩu gà lá é Tao Ngộ (Đường 3/4)',
        image: 'https://statics.vinpearl.com/lau-ga-la-e-da-lat-1_1691339792.jpeg'
    },
    {
        name: 'Bánh Căn Nóng Hổi',
        tag: 'Bữa sáng đặc trưng',
        price: '30.000đ - 60.000đ/đĩa',
        desc: 'Từng cặp bánh căn nướng khuôn đất nóng giòn nhân trứng gà, hải sản chấm cùng nước mắm xíu mại béo thơm.',
        spot: 'Gợi ý: Bánh căn Lệ (27/44 Yersin)',
        image: 'https://cdn2.tuoitre.vn/tto/i/s626/2015/12/23/banh-can-da-lat-1450864147.jpg'
    },
    {
        name: 'Kem Bơ Đà Lạt',
        tag: 'Tráng miệng trứ danh',
        price: '30.000đ - 40.000đ/ly.',
        desc: 'Bơ sáp Đà Lạt xay mịn dẻo quánh kết hợp cùng viên kem dừa mát lạnh và dừa khô giòn tan tạo nên món tráng miệng béo ngậy khó quên.',
        spot: 'Gợi ý: Kem bơ Thanh Thảo (76 Nguyễn Văn Trỗi)',
        image: 'https://static.vinwonders.com/production/kem-bo-da-lat-so-1.jpg'
    },
    {
        name: 'Sữa Đậu Nành Nóng',
        tag: 'Đặc sản đêm khuya',
        price: '10.000đ - 15.000đ/ly sữa',
        desc: 'Ly sữa đậu nành thơm lừng bốc khói giữa chợ đêm Đà Lạt, ăn kèm bánh su kem hoặc bánh tiêu nóng.',
        spot: 'Gợi ý: Sữa đậu nành Tăng Bạt Hổ',
        image: 'https://statics.vinpearl.com/sua-dau-nanh-da-lat-10_1700809547.jpg'
    },
    {
        name: 'Bánh mì xíu mại',
        tag: 'Bữa sáng nhanh gọn',
        price: '15.000đ - 30.000đ/chén',
        desc: 'Chén xíu mại nóng hổi, nước dùng ngọt thanh từ xương, ăn kèm bánh mì giòn rụm và rau thơm tươi ngon.',
        spot: 'Gợi ý: Bánh mì xíu mại Hồng Phát (Đường 3/2), Bánh mì xíu mại Bà Hường (Đường 3/4)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkmKJT0fOsEI0-yNPWPKsjmFAgqI75mERgM1lC-O2YA&s=10'
    },
    {
        name: 'Bánh ướt lòng gà',
        tag: 'Ăn xế chiều nhẹ',
        price: '35.000đ - 60.000đ/tô',
        desc: 'Bánh ướt mềm dẻo kết hợp thịt gà xé, lòng gà và nước mắm chua ngọt đậm đà, ăn kèm rau sống tươi ngon.',
        spot: 'Gợi ý: Bánh ướt lòng gà Long Chuyên (Đường 3/4), Bánh ướt lòng gà Đà Lạt (Đường 3/2)',
        image: 'https://static.vinwonders.com/production/banh-uot-long-ga-da-lat-1.jpg'
    },
    {
        name: 'Nem nướng Đà Lạt',
        tag: 'Ăn vặt xế chiều',
        price: '45.000đ - 60.000đ/suất',
        desc: 'Nem cuốn cùng bánh tráng chiên giòn, rau sống tươi ngon và chén nước chấm sệt đặc trưng của phố núi.',
        spot: 'Gợi ý: Nem nướng Bà Hùng, Bà Nghĩa, Út Huệ (Chợ Đà Lạt)',
        image: 'https://lamdongtours.com/wp-content/uploads/2021/04/Nem-nuong-Ba-Nghia.jpg'
    },
    {
        name: 'Cơm niêu & Gà nướng cơm lam',
        tag: 'Bữa chính ấm cúng',
        price: '300.000đ - 450.000đ/con gà',
        desc: 'Thích hợp cho gia đình hoặc nhóm đông người với cơm niêu dẻo thơm, gà nướng mật ong và cơm lam nướng than hồng thơm lừng.',
        spot: 'Gợi ý: Cơm niêu Như Ngọc, Hương Trà Quán, Gà nướng cơm lam Tâm Châu.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6DFKk26c3vjhnEQFPWVz9h4WaKXhNMLwZhh1SJ4URDWPAf0svv35H5c&s=10'
    },
    {
        name: 'Lẩu bò Ba Toa',
        tag: 'Tụ tập buổi tối',
        price: '150.000đ - 350.000đ/nồi.',
        desc: 'Nước lẩu ninh từ xương bò đậm đà, ăn kèm nạm, gân, đuôi bò và rau xanh tươi ngon, thích hợp cho nhóm bạn hoặc gia đình.',
        spot: 'Gợi ý: Lẩu bò Ba Toa (Đường 3/2), Lẩu bò Tùng (Đường 3/4), Lẩu bò Tài Ký (Đường Bùi Thị Xuân).',
        image: 'https://mia.vn/media/uploads/blog-du-lich/lau-bo-ba-toa-2-1761092784.jpg'
    }
];

const INITIAL_REVIEWS = [
    {
        name: 'Minh Thư Nguyễn',
        place: 'Tour Săn Mây Đồi Đa Phú',
        rating: 5,
        date: '2 ngày trước',
        comment: 'Biển mây hôm mình đi đẹp như tranh vẽ! Bạn hướng dẫn viên chụp ảnh siêu có tâm, pha cà phê nóng giữa đồi thông lạnh 14 độ thực sự là trải nghiệm nhớ đời.'
    },
    {
        name: 'Hoàng Nam Trần',
        place: 'Hồ Tuyền Lâm & Cà Phê Túi Mơ To',
        rating: 5,
        date: '1 tuần trước',
        comment: 'Công cụ gợi ý lịch trình 3N2Đ trên web sắp xếp cung đường rất hợp lý, không bị chạy ngược đường nên tụi mình đi được nhiều điểm mà vẫn thong thả nghỉ ngơi.'
    }
];

// -------------------- STATE --------------------
let wishlist = JSON.parse(localStorage.getItem('dalat_wishlist') || '[]');
let cart = JSON.parse(localStorage.getItem('dalat_cart') || '[]');
let reviews = JSON.parse(localStorage.getItem('dalat_reviews') || JSON.stringify(INITIAL_REVIEWS));
let currentPlannerDay = '3N2D';

// -------------------- INITIALIZATION --------------------
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderDestinations(DESTINATIONS);
    renderTours();
    renderCuisines();
    renderReviews();
    generateItinerary();
    updateBadges();
    initStarRating();
});

// -------------------- 1. THEME (DARK/LIGHT MODE) --------------------
function initTheme() {
    const savedTheme = localStorage.getItem('dalat_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon').className = 'fa-solid fa-sun text-base';
    }
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('dalat_theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-icon').className = isDark ? 'fa-solid fa-sun text-base' : 'fa-solid fa-moon text-base';
});

// Mobile Menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.add('hidden');
}

// -------------------- 2. HERO SEARCH --------------------
document.getElementById('hero-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = document.getElementById('search-keyword').value.trim().toLowerCase();
    const category = document.getElementById('search-category').value;
    const duration = document.getElementById('search-duration').value;

    selectPlannerDay(duration);

    let filtered = DESTINATIONS;
    if (category !== 'all') {
        filtered = filtered.filter(d => d.category === category);
    }
    if (keyword) {
        filtered = filtered.filter(d => d.name.toLowerCase().includes(keyword) || d.desc.toLowerCase().includes(keyword));
    }

    updateFilterPillUI(category);
    renderDestinations(filtered);
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    showToast(`Tìm thấy ${filtered.length} điểm đến phù hợp!`, 'info');
});

// -------------------- 3. WEATHER WIDGET SIMULATION --------------------
const WEATHER_DATA = {
    morning: {
        temp: '16°C',
        desc: 'Se lạnh, sương mù nhẹ giăng lối',
        humidity: '84% • Gió nhẹ 9 km/h',
        outfit: 'Áo len mỏng, áo khoác trench coat & khăn choàng',
        icon: 'fa-solid fa-cloud-sun'
    },
    noon: {
        temp: '22°C',
        desc: 'Nắng vàng dịu nhẹ, trời trong xanh',
        humidity: '65% • Gió mát 12 km/h',
        outfit: 'Váy vintage, áo sơ mi dài tay & kính râm',
        icon: 'fa-solid fa-sun'
    },
    night: {
        temp: '14°C',
        desc: 'Lạnh sâu về đêm, trời quang mây',
        humidity: '88% • Gió se lạnh 7 km/h',
        outfit: 'Áo phao ấm, mũ len & giày boots giữ nhiệt',
        icon: 'fa-solid fa-moon'
    }
};

function setWeatherTime(timeKey) {
    const data = WEATHER_DATA[timeKey];
    document.getElementById('weather-temp').textContent = data.temp;
    document.getElementById('weather-desc').textContent = data.desc;
    document.getElementById('weather-humidity').textContent = data.humidity;
    document.getElementById('weather-outfit').textContent = data.outfit;
    document.getElementById('weather-icon').className = data.icon;

    document.querySelectorAll('.weather-btn').forEach(btn => {
        if (btn.dataset.time === timeKey) {
            btn.className = 'weather-btn px-2 py-0.5 rounded bg-pine-700 text-white font-medium';
        } else {
            btn.className = 'weather-btn px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
        }
    });
}

// -------------------- 4. DESTINATIONS RENDER & FILTER --------------------
function updateFilterPillUI(cat) {
    document.querySelectorAll('.filter-pill').forEach(btn => {
        if (btn.dataset.cat === cat) {
            btn.className = 'filter-pill active px-4 py-2 rounded-full text-sm font-semibold bg-pine-800 text-white shadow-sm transition-all';
        } else {
            btn.className = 'filter-pill px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pine-600 transition-all';
        }
    });
}

function filterDestinations(cat) {
    updateFilterPillUI(cat);
    const list = cat === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.category === cat);
    renderDestinations(list);
}

function renderDestinations(list) {
    const grid = document.getElementById('destinations-grid');
    if (list.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">Không tìm thấy điểm đến phù hợp với từ khóa. Hãy thử từ khóa khác nhé!</div>`;
        return;
    }

    grid.innerHTML = list.map(dest => {
        const isLiked = wishlist.includes(dest.id);
        return `
        <article class="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200/70 dark:border-slate-800 transition-all duration-300 flex flex-col">
            <div class="relative h-56 overflow-hidden">
                <img src="${dest.image}" onerror="this.src='https://placehold.co/600x400/065f46/ffffff?text=Da+Lat+Destination'" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-white text-xs font-medium">
                    ${dest.categoryLabel}
                </span>
                <button onclick="toggleWishlist('${dest.id}')" aria-label="Lưu yêu thích" class="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <i class="${isLiked ? 'fa-solid text-rose-500' : 'fa-regular text-slate-600 dark:text-slate-300'} fa-heart"></i>
                </button>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span class="whitespace-pre-line"><i class="fa-solid fa-ticket text-pine-600 mr-1"></i> ${dest.price}</span>
                    <span class="font-bold text-daquy-600 dark:text-daquy-400"><i class="fa-solid fa-star mr-1"></i>${dest.rating}</span>
                </div>

                <h3 class="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-pine-700 dark:group-hover:text-pine-400 transition-colors">
                    ${dest.name}
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 flex-1">
                    ${dest.desc}
                </p>

                <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span class="text-xs text-slate-400 truncate max-w-[160px]"><i class="fa-solid fa-location-dot mr-1"></i>${dest.address.split(',')[0]}</span>
                    <button onclick="openDetailModal('${dest.id}')" class="px-4 py-2 rounded-xl bg-pine-50 hover:bg-pine-800 text-pine-800 hover:text-white dark:bg-slate-800 dark:text-pine-400 dark:hover:bg-pine-700 dark:hover:text-white text-xs font-bold transition-colors">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </article>
        `;
    }).join('');
}

function openDetailModal(id) {
    const dest = DESTINATIONS.find(d => d.id === id);
    if (!dest) return;
    document.getElementById('modal-img').src = dest.image;
    document.getElementById('modal-badge').textContent = dest.categoryLabel;
    document.getElementById('modal-title').textContent = dest.name;
    document.getElementById('modal-rating').textContent = `${dest.rating} / 5.0`;
    document.getElementById('modal-desc').textContent = dest.desc;
    document.getElementById('modal-address').textContent = dest.address;
    document.getElementById('modal-hours-price').textContent = `${dest.hours} • ${dest.price}`;
    document.getElementById('modal-hours-price').classList.add('whitespace-pre-line');
    document.getElementById('modal-coords').textContent = `${dest.coords} • Đà Lạt, Lâm Đồng`;
    document.getElementById('modal-map-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ' Đà Lạt')}`;

    const modal = document.getElementById('detail-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// -------------------- 5. TOURS RENDER --------------------
function renderTours() {
    const grid = document.getElementById('tours-grid');
    grid.innerHTML = TOURS.map(tour => `
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200/70 dark:border-slate-800 flex flex-col sm:flex-row transition-all">
            <div class="sm:w-2/5 h-56 sm:h-auto relative overflow-hidden shrink-0">
                <img src="${tour.image}" onerror="this.src='https://placehold.co/600x500/064e3b/ffffff?text=Da+Lat+Tour'" alt="${tour.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                <span class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/75 text-white text-[11px] font-semibold">
                    <i class="fa-regular fa-clock text-daquy-400 mr-1"></i>${tour.duration}
                </span>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-1.5 text-xs text-daquy-600 dark:text-daquy-400 font-bold mb-1.5">
                        <i class="fa-solid fa-star"></i> ${tour.rating} <span class="text-slate-400 font-normal">(${tour.reviewsCount} đánh giá)</span>
                    </div>
                    <h3 class="font-serif text-xl font-bold text-slate-900 dark:text-white leading-snug">${tour.title}</h3>
                    <ul class="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        ${tour.highlights.map(h => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-pine-600 mt-0.5"></i><span>${h}</span></li>`).join('')}
                    </ul>
                </div>

                <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div>
                        <span class="text-[11px] text-slate-400 block">Giá từ</span>
                        <span class="text-lg font-bold text-pine-800 dark:text-daquy-400">${formatVND(tour.priceAdult)}</span>
                    </div>
                    <button onclick="addToCart('${tour.id}')" class="px-4 py-2.5 rounded-xl bg-pine-800 hover:bg-pine-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5">
                        <i class="fa-solid fa-cart-plus"></i> Đặt Tour Ngay
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// -------------------- 6. CUISINE RENDER --------------------
function renderCuisines() {
    const grid = document.getElementById('cuisine-grid');
    grid.innerHTML = CUISINES.map(item => `
        <div class="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200/70 dark:border-slate-800 flex flex-col transition-all">
            <div class="h-44 overflow-hidden relative">
                <img src="${item.image}" onerror="this.src='https://placehold.co/400x300/d97706/ffffff?text=Am+Thuc+Da+Lat'" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-daquy-500 text-slate-950 text-[11px] font-bold">
                    ${item.tag}
                </span>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-center text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1.5">
                    <i class="fa-solid fa-wallet mr-1.5"></i> ${item.price}
                </div>
                <h3 class="font-serif text-lg font-bold text-slate-900 dark:text-white">${item.name}</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed flex-1">${item.desc}</p>
                <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-pine-700 dark:text-pine-400">
                    <i class="fa-solid fa-utensils mr-1"></i> ${item.spot}
                </div>
            </div>
        </div>
    `).join('');
}

// -------------------- 7. INTERACTIVE ITINERARY PLANNER --------------------
const ITINERARY_TEMPLATES = {
    chill: [
        { day: 'Ngày 1: Chạm Ngõ Phố Sương', morning: 'Check-in homestay đồi thông, thưởng thức bánh căn Lệ nóng hổi.', noon: 'Ăn trưa cơm niêu Hương Việt, nghỉ ngơi thư giãn.', afternoon: 'Ngắm hoàng hôn và uống trà hoa cúc tại Tiệm Cà Phê Túi Mơ To.', evening: 'Dạo chợ đêm Đà Lạt, uống sữa đậu nành nóng & ăn bánh tráng nướng.' },
        { day: 'Ngày 2: Bình Yên Hồ Tuyền Lâm', morning: 'Chèo thuyền SUP đón sương sớm trên mặt hồ Tuyền Lâm tĩnh lặng.', noon: 'Thưởng thức gà nướng cơm lam bên bờ hồ.', afternoon: 'Đọc sách và nghe nhạc Acoustic tại Tiệm cà phê Cheo Veooo.', evening: 'Ăn lẩu gà lá é Tao Ngộ ấm cúng giữa tiết trời 15°C.' },
        { day: 'Ngày 3: Nông Trại & Tạm Biệt', morning: 'Tham quan vườn hồng treo gió và đồi chè Cầu Đất xanh mướt.', noon: 'Ăn trưa bún bò thố đá, mua đặc sản mứt dâu & trà atiso.', afternoon: 'Check-in Quảng trường Lâm Viên trước khi ra sân bay Liên Khương.', evening: 'Kết thúc hành trình nghỉ dưỡng trọn vẹn.' },
        { day: 'Ngày 4: Góc Nhỏ Cổ Điển', morning: 'Dạo bước quanh Dinh Bảo Đại III và rừng thông Ái Ân.', noon: 'Thưởng thức ẩm thực chay thanh tịnh tại Hoa Sen.', afternoon: 'Mua sắm hoa tươi tại chợ hoa Đà Lạt và thưởng thức kem bơ Thanh Thảo.', evening: 'Khởi hành trở về với những kỷ niệm bình yên.' }
    ],
    nature: [
        { day: 'Ngày 1: Chinh Phục Đại Ngàn', morning: 'Khởi hành săn mây sớm lúc 4h30 tại Đồi Đa Phú & Cây Thông Cô Đơn.', noon: 'Ăn trưa đặc sản thịt rừng nướng dưới chân núi Langbiang.', afternoon: 'Đi xe Jeep chinh phục đỉnh Radar Langbiang ngắm toàn cảnh Suối Vàng.', evening: 'Tham gia đêm giao lưu văn hóa Cồng Chiêng Tây Nguyên.' },
        { day: 'Ngày 2: Thác Nước & Rừng Thông', morning: 'Trải nghiệm máng trượt xuyên rừng và đu dây High Rope tại Thác Datanla.', noon: 'Nghỉ ngơi ăn trưa tại khu sinh thái Tuyền Lâm.', afternoon: 'Trekking nhẹ xuyên rừng lá phong ngắm hệ sinh thái nguyên sinh.', evening: 'Cắm trại BBQ tối giữa đồi thông và ngắm bầu trời đầy sao.' },
        { day: 'Ngày 3: Đồi Chè & Thung Lũng', morning: 'Đón bình minh tại Đồi Chè Cầu Đất và điện gió.', noon: 'Ăn trưa bánh ướt lòng gà Trang trứ danh.', afternoon: 'Tham quan Thung Lũng Vàng và vườn dâu công nghệ cao.', evening: 'Tự do khám phá ẩm thực đêm Đà Lạt.' },
        { day: 'Ngày 4: Thác Voi Hùng Vĩ', morning: 'Khám phá cung đường đèo Tà Nung, tham quan Thác Voi & Chùa Linh Ẩn.', noon: 'Thưởng thức cà phê chồn Mê Linh nhìn ra hồ đập Cam Ly.', afternoon: 'Về trung tâm mua quà lưu niệm và chuẩn bị hành lý.', evening: 'Tạm biệt thành phố ngàn hoa.' }
    ],
    photo: [
        { day: 'Ngày 1: Kiến Trúc Đông Dương Cổ', morning: 'Chụp ảnh tại Ga Đà Lạt cổ kính với đầu tàu hơi nước.', noon: 'Ăn trưa tại nhà hàng phong cách Pháp cổ.', afternoon: 'Check-in Trường Cao Đẳng Sư Phạm Đà Lạt & Nhà thờ Con Gà.', evening: 'Dạo phố đi bộ Khu Hòa Bình lung linh ánh đèn.' },
        { day: 'Ngày 2: Sắc Hoa & Tiểu Cảnh', morning: 'Sống ảo giữa cánh đồng hoa Cẩm Tú Cầu Xuân Thọ.', noon: 'Thưởng thức lẩu rau Leguda Buffet trên đồi Robin.', afternoon: 'Check-in Cổng Trời Bali, Hồ Vô Cực và Đường Hầm Điêu Khắc.', evening: 'Chụp ảnh phơi sáng tại Quảng trường Lâm Viên.' },
        { day: 'Ngày 3: Góc Châu Âu Giữa Lòng Phố', morning: 'Check-in Làng Cù Lần hoặc Khu du lịch Lá Phong.', noon: 'Ăn trưa nem nướng Bà Hùng nổi tiếng.', afternoon: 'Thưởng trà chiều phong cách quý tộc tại Ana Mandara Villas.', evening: 'Tự do mua sắm đồ len thủ công.' },
        { day: 'Ngày 4: Nắng Sớm Trên Đồi', morning: 'Chụp bộ ảnh vintage tại Dốc Nhà Bò và Tiệm bánh Cối Xay Gió.', noon: 'Ăn trưa mì Quảng Đà Lạt.', afternoon: 'Ghé vườn hoa thành phố trước giờ ra xe/sân bay.', evening: 'Hoàn thành bộ ảnh triệu like tại Đà Lạt.' }
    ],
    food: [
        { day: 'Ngày 1: Thiên Đường Ăn Sáng & Chợ Đêm', morning: 'Khởi đầu ngày mới với Bánh căn Lệ & sữa đậu nành nóng.', noon: 'Thưởng thức Bánh ướt lòng gà Tăng Bạt Hổ.', afternoon: 'Uống cà phê muối và ăn bánh ngọt tại Lưng Chừng.', evening: 'Food tour Chợ Đêm: Bánh tráng nướng Dì Đinh, xiên nướng, khoai lang mật.' },
        { day: 'Ngày 2: Hương Vị Đặc Sản Phố Núi', morning: 'Ăn Bún bò thố đá nóng hổi giữa sương sớm.', noon: 'Thưởng thức Nem nướng Bà Hùng chuẩn vị.', afternoon: 'Giải nhiệt với Kem bơ Thanh Thảo & chè hé.', evening: 'Quây quần bên nồi Lẩu gà lá é hoặc Lẩu bò Ba Toa Nhà Gỗ.' },
        { day: 'Ngày 3: Ẩm Thực Nông Sản Xanh', morning: 'Ăn sáng Phở Thưng & cà phê vợt Tùng hơn 60 năm tuổi.', noon: 'Buffet rau tươi không giới hạn tại đồi Robin.', afternoon: 'Hái dâu tây tại vườn và thưởng thức sinh tố dâu tươi.', evening: 'Mua hồng treo gió, dâu tây và trà oolong làm quà.' },
        { day: 'Ngày 4: Bữa Sáng Thong Thả', morning: 'Thưởng thức Bánh mì xíu mại Hoàng Diệu trứ danh.', noon: 'Ăn trưa Cơm lam gà nướng trước khi khởi hành về.', afternoon: 'Uống cà phê ngắm phố lần cuối.', evening: 'Kết thúc chuyến Food Tour no nê.' }
    ]
};

function selectPlannerDay(day) {
    currentPlannerDay = day;
    document.querySelectorAll('.planner-day-btn').forEach(btn => {
        if (btn.dataset.day === day) {
            btn.className = 'planner-day-btn py-2.5 rounded-xl text-sm font-semibold bg-daquy-500 text-slate-950 shadow-md transition-all';
        } else {
            btn.className = 'planner-day-btn py-2.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 transition-all';
        }
    });
    generateItinerary();
}

function generateItinerary() {
    const style = document.getElementById('planner-style').value;
    const daysCount = currentPlannerDay === '2N1D' ? 2 : (currentPlannerDay === '3N2D' ? 3 : 4);
    const plan = ITINERARY_TEMPLATES[style].slice(0, daysCount);

    const container = document.getElementById('itinerary-result');
    container.innerHTML = plan.map((item, idx) => `
        <div class="bg-slate-950/40 rounded-2xl p-5 border border-white/10">
            <h4 class="font-serif text-lg font-bold text-daquy-400 mb-3 flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-daquy-500 text-slate-950 text-xs font-bold flex items-center justify-center">${idx + 1}</span>
                ${item.day}
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div class="p-3 rounded-xl bg-white/5"><strong class="text-pine-300 block mb-1">🌅 Buổi Sáng:</strong>${item.morning}</div>
                <div class="p-3 rounded-xl bg-white/5"><strong class="text-amber-300 block mb-1">☀️ Buổi Trưa:</strong>${item.noon}</div>
                <div class="p-3 rounded-xl bg-white/5"><strong class="text-orange-300 block mb-1">🌇 Buổi Chiều:</strong>${item.afternoon}</div>
                <div class="p-3 rounded-xl bg-white/5"><strong class="text-indigo-300 block mb-1">🌙 Buổi Tối:</strong>${item.evening}</div>
            </div>
        </div>
    `).join('');
}

function copyItinerary() {
    const text = document.getElementById('itinerary-result').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = `LỊCH TRÌNH DU LỊCH ĐÀ LẠT (${currentPlannerDay}):\n\n` + text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Đã sao chép lịch trình vào bộ nhớ tạm!', 'success');
}

// -------------------- 8. WISHLIST & BOOKING CART --------------------
function toggleWishlist(destId) {
    const idx = wishlist.indexOf(destId);
    if (idx === -1) {
        wishlist.push(destId);
        showToast('Đã lưu điểm đến vào danh sách yêu thích!', 'success');
    } else {
        wishlist.splice(idx, 1);
        showToast('Đã xóa khỏi danh sách yêu thích.', 'info');
    }
    localStorage.setItem('dalat_wishlist', JSON.stringify(wishlist));
    updateBadges();
    renderDestinations(DESTINATIONS);
    renderWishlistDrawer();
}

function addToCart(tourId) {
    const existing = cart.find(item => item.tourId === tourId);
    if (existing) {
        existing.adults += 1;
    } else {
        cart.push({ tourId, adults: 2, children: 0 });
    }
    saveCart();
    showToast('Đã thêm tour vào giỏ đặt chỗ!', 'success');
    openDrawer('cart');
}

function updateCartQty(tourId, type, delta) {
    const item = cart.find(i => i.tourId === tourId);
    if (!item) return;
    if (type === 'adults') {
        item.adults = Math.max(1, item.adults + delta);
    } else {
        item.children = Math.max(0, item.children + delta);
    }
    saveCart();
}

function removeFromCart(tourId) {
    cart = cart.filter(i => i.tourId !== tourId);
    saveCart();
}

function saveCart() {
    localStorage.setItem('dalat_cart', JSON.stringify(cart));
    updateBadges();
    renderCartDrawer();
}

function updateBadges() {
    const wishBadge = document.getElementById('wishlist-badge');
    if (wishlist.length > 0) {
        wishBadge.textContent = wishlist.length;
        wishBadge.classList.remove('hidden');
    } else {
        wishBadge.classList.add('hidden');
    }
    document.getElementById('cart-badge').textContent = cart.length;
}

function openDrawer(tab) {
    document.getElementById('side-drawer-overlay').classList.remove('hidden');
    document.getElementById('side-drawer').classList.remove('translate-x-full');
    switchDrawerTab(tab);
}

function closeDrawer() {
    document.getElementById('side-drawer-overlay').classList.add('hidden');
    document.getElementById('side-drawer').classList.add('translate-x-full');
}

function switchDrawerTab(tab) {
    const cartBtn = document.getElementById('tab-cart-btn');
    const wishBtn = document.getElementById('tab-wishlist-btn');
    const cartContent = document.getElementById('drawer-cart-content');
    const wishContent = document.getElementById('drawer-wishlist-content');

    if (tab === 'cart') {
        cartBtn.className = 'px-3.5 py-1.5 rounded-xl text-sm font-bold bg-pine-800 text-white';
        wishBtn.className = 'px-3.5 py-1.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
        cartContent.classList.remove('hidden');
        wishContent.classList.add('hidden');
        renderCartDrawer();
    } else {
        wishBtn.className = 'px-3.5 py-1.5 rounded-xl text-sm font-bold bg-rose-600 text-white';
        cartBtn.className = 'px-3.5 py-1.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
        wishContent.classList.remove('hidden');
        cartContent.classList.add('hidden');
        renderWishlistDrawer();
    }
}

function renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const form = document.getElementById('checkout-form');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-400">
                <i class="fa-solid fa-suitcase-rolling text-4xl mb-3 opacity-50"></i>
                <p class="text-sm">Giỏ đặt tour của bạn đang trống.</p>
                <button onclick="closeDrawer(); document.getElementById('tours').scrollIntoView({behavior:'smooth'})" class="mt-4 px-4 py-2 rounded-xl bg-pine-800 text-white text-xs font-semibold">Khám phá các gói Tour</button>
            </div>`;
        form.classList.add('hidden');
        return;
    }

    form.classList.remove('hidden');
    let grandTotal = 0;

    container.innerHTML = cart.map(item => {
        const tour = TOURS.find(t => t.id === item.tourId);
        if (!tour) return '';
        const subTotal = (item.adults * tour.priceAdult) + (item.children * tour.priceChild);
        grandTotal += subTotal;

        return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3">
            <div class="flex justify-between gap-2">
                <h5 class="font-bold text-sm text-slate-900 dark:text-white leading-snug">${tour.title}</h5>
                <button onclick="removeFromCart('${tour.id}')" class="text-slate-400 hover:text-rose-500"><i class="fa-solid fa-trash-can text-xs"></i></button>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-xl">
                    <span>Người lớn:</span>
                    <div class="flex items-center gap-2 font-bold">
                        <button type="button" onclick="updateCartQty('${tour.id}', 'adults', -1)" class="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700">-</button>
                        <span>${item.adults}</span>
                        <button type="button" onclick="updateCartQty('${tour.id}', 'adults', 1)" class="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700">+</button>
                    </div>
                </div>
                <div class="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-xl">
                    <span>Trẻ em:</span>
                    <div class="flex items-center gap-2 font-bold">
                        <button type="button" onclick="updateCartQty('${tour.id}', 'children', -1)" class="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700">-</button>
                        <span>${item.children}</span>
                        <button type="button" onclick="updateCartQty('${tour.id}', 'children', 1)" class="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700">+</button>
                    </div>
                </div>
            </div>
            <div class="text-right text-xs font-bold text-pine-700 dark:text-daquy-400">
                Tạm tính: ${formatVND(subTotal)}
            </div>
        </div>`;
    }).join('');

    document.getElementById('cart-total-price').textContent = formatVND(grandTotal);
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlist-items-container');
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-slate-400 text-sm">Bạn chưa lưu điểm đến yêu thích nào. Hãy nhấn biểu tượng trái tim trên các địa điểm nhé!</div>`;
        return;
    }
    container.innerHTML = wishlist.map(id => {
        const dest = DESTINATIONS.find(d => d.id === id);
        if (!dest) return '';
        return `
        <div class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
            <img src="${dest.image}" alt="${dest.name}" class="w-16 h-16 rounded-xl object-cover shrink-0">
            <div class="flex-1 min-w-0">
                <h5 class="font-bold text-sm truncate">${dest.name}</h5>
                <p class="text-xs text-slate-500">${dest.price}</p>
                <button onclick="closeDrawer(); openDetailModal('${dest.id}')" class="text-xs text-pine-700 dark:text-pine-400 font-semibold mt-1">Xem chi tiết →</button>
            </div>
            <button onclick="toggleWishlist('${dest.id}')" class="text-rose-500 p-2"><i class="fa-solid fa-heart"></i></button>
        </div>`;
    }).join('');
}

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value;
    cart = [];
    saveCart();
    closeDrawer();
    e.target.reset();
    showToast(`Cảm ơn ${name}! Yêu cầu đặt tour Đà Lạt của bạn đã được xác nhận. Nhân viên sẽ liên hệ trong 5 phút!`, 'success');
});

// -------------------- 9. REVIEWS & STAR RATING --------------------
function initStarRating() {
    const stars = document.querySelectorAll('#star-rating-input i');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.dataset.val);
            document.getElementById('rev-rating').value = val;
            stars.forEach((s, idx) => {
                s.className = idx < val ? 'fa-solid fa-star text-daquy-500' : 'fa-regular fa-star text-slate-300';
            });
        });
    });
}

function renderReviews() {
    const list = document.getElementById('reviews-list');
    list.innerHTML = reviews.map(rev => `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200/70 dark:border-slate-800">
            <div class="flex items-center justify-between gap-4 mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-pine-100 dark:bg-pine-900 text-pine-800 dark:text-pine-300 font-bold flex items-center justify-center">
                        ${rev.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-slate-900 dark:text-white">${rev.name}</h4>
                        <span class="text-xs text-pine-700 dark:text-pine-400 font-medium">${rev.place || 'Du khách Đà Lạt'} • ${rev.date}</span>
                    </div>
                </div>
                <div class="text-daquy-500 text-xs">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(rev.rating)}
                </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">"${rev.comment}"</p>
        </div>
    `).join('');
}

document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newRev = {
        name: document.getElementById('rev-name').value.trim(),
        place: document.getElementById('rev-place').value.trim() || 'Khám phá Đà Lạt',
        rating: parseInt(document.getElementById('rev-rating').value) || 5,
        date: 'Vừa xong',
        comment: document.getElementById('rev-comment').value.trim()
    };
    reviews.unshift(newRev);
    localStorage.setItem('dalat_reviews', JSON.stringify(reviews));
    renderReviews();
    e.target.reset();
    showToast('Cảm ơn bạn đã chia sẻ đánh giá tuyệt vời!', 'success');
});

// -------------------- 10. NEWSLETTER & UTILITIES --------------------
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
    showToast('Đăng ký thành công! Mã ưu đãi DALAT15 đã được gửi tới email của bạn.', 'success');
});

function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-pine-900 text-white border-pine-700' : 'bg-slate-900 text-white border-slate-700';
    toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl text-xs sm:text-sm font-medium max-w-sm transform transition-all duration-300 translate-y-4 opacity-0 ${bgClass}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check text-daquy-400' : 'fa-circle-info text-sky-400'} text-base"></i><span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}