// Danh sách sản phẩm mẫu
export const products = [
  {
    id: 1,
    name: "Khóa học React từ cơ bản đến nâng cao",
    price: 800000,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Nắm vững React chỉ trong 30 ngày",
    longDesc:
      "Khóa học đầy đủ, cập nhật mới nhất về ReactJS. Bao gồm project thực tế, hỗ trợ mentor trực tiếp, phù hợp cho cả người mới bắt đầu và dev muốn nâng cao.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Lộ trình tự học Tiếng Anh giao tiếp",
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Tài liệu + video tự học English tại nhà",
    longDesc:
      "Trọn bộ giáo trình PDF, video hướng dẫn, file nghe - nói thực hành, kèm nhóm hỗ trợ trao đổi kinh nghiệm.",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Khóa học IELTS 7.0+ cấp tốc",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Bứt phá điểm số, luyện đề chuẩn thật",
    longDesc:
      "Chương trình luyện thi chuyên sâu 4 kỹ năng, cam kết tăng band, tặng bộ đề độc quyền, kèm chữa bài trực tiếp.",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Combo giáo trình Data Science cơ bản",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Bộ ebook + tài liệu Python & Machine Learning",
    longDesc:
      "Tổng hợp 5 ebook, slide, cheat-sheet, bài tập thực hành, phù hợp cho sinh viên CNTT và người mới.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Khóa học Thiết kế UI/UX cho Beginner",
    price: 950000,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Nắm vững UI/UX, tự tin làm portfolio",
    longDesc:
      "Hướng dẫn từ căn bản đến nâng cao về UI/UX, thực hành Figma, làm mini-project, nhận feedback từ mentor, tặng mẫu thiết kế độc quyền.",
    rating: 4.85,
  },
  {
    id: 6,
    name: "Lớp học lập trình Python online",
    price: 390000,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Lập trình Python từ số 0, học live qua Zoom",
    longDesc:
      "Lớp học tối ưu cho người chưa biết gì, học tương tác qua Zoom, có bài tập sau mỗi buổi, mentor sửa bài tận tâm.",
    rating: 4.65,
  },
  {
    id: 7,
    name: "Ebook Tự học Excel ứng dụng",
    price: 150000,
    image: "https://picsum.photos/seed/ielts/300/200",
    shortDesc: "Tự học Excel văn phòng, công thức, mẹo vặt",
    longDesc:
      "Ebook PDF hơn 200 trang: hướng dẫn chi tiết, ví dụ thực tế, công thức thường dùng, tặng file thực hành.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Khóa Coaching định hướng nghề nghiệp IT",
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=cover&w=400&q=80",
    shortDesc: "1-1 tư vấn, xác định lộ trình nghề nghiệp IT",
    longDesc:
      "Coaching cá nhân (1-1) cùng chuyên gia IT, giúp bạn xác định mục tiêu, cách học hiệu quả, định hướng phát triển dài hạn.",
    rating: 5.0,
  },
  {
    id: 9,
    name: "Khoá học Digital Marketing căn bản",
    price: 670000,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=cover&w=400&q=80",
    shortDesc: "Tự tin làm quảng cáo, hiểu nền tảng số",
    longDesc:
      "Học về các kênh marketing, cách chạy ads, xây dựng thương hiệu cá nhân & doanh nghiệp, tài liệu cập nhật 2024.",
    rating: 4.55,
  },
  {
    id: 10,
    name: "Bộ tài liệu luyện viết CV tiếng Anh",
    price: 99000,
    image: "https://picsum.photos/seed/python/300/200",
    shortDesc: "Tổng hợp mẫu CV, tips phỏng vấn thực chiến",
    longDesc:
      "Gồm 20+ mẫu CV tiếng Anh, checklist từng ngành, mẹo trả lời phỏng vấn, định hướng nghề nghiệp.",
    rating: 4.4,
  },
];

// Mock API gọi lấy danh sách sản phẩm
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 700); // giả lập loading
  });
}

// Mock API gợi ý sản phẩm phù hợp (giả lập dựa trên id sp đã thích/xem)
export function fetchSuggestions(userId, likedIds = [], viewedIds = []) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tạo danh sách sp chưa thích/chưa xem
      const suggestion = products
        .filter((p) => !likedIds.includes(p.id) && !viewedIds.includes(p.id))
        .slice(0, 4); // lấy 3 sp gợi ý
      // Random lỗi
      if (Math.random() < 0.15) return reject(new Error("API lỗi"));
      resolve(suggestion);
    }, 1300);
  });
}
