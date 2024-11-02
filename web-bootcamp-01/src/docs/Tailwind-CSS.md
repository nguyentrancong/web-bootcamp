1. Cài đặt Tailwind CSS

Đầu tiên, cài đặt Tailwind CSS cùng các công cụ hỗ trợ bằng npm hoặc yarn:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Lệnh này sẽ tạo ra các file cấu hình tailwind.config.js và postcss.config.js.

2. Cấu hình Tailwind CSS

Trong file tailwind.config.js, cập nhật content để quét các file TypeScript (.tsx):

// tailwind.config.js
module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}", // Quét cả file TypeScript
],
theme: {
extend: {},
},
plugins: [],
};

3. Thêm các directive Tailwind vào file CSS chính

Trong dự án React với TypeScript, hãy thêm các directive của Tailwind vào file CSS chính, ví dụ src/index.css:

/_ src/index.css _/
@tailwind base;
@tailwind components;
@tailwind utilities;

4. Import CSS vào dự án TypeScript

Trong file src/index.tsx, import file CSS chính của bạn:

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS đã cấu hình với Tailwind
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

5. Sử dụng Tailwind CSS trong các component TypeScript

Bây giờ bạn có thể sử dụng Tailwind CSS trong các component TypeScript (.tsx) như bình thường. Ví dụ:

// src/App.tsx
import React from 'react';

const App: React.FC = () => {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS with TypeScript!</h1>
<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
Click Me
</button>
</div>
);
};

export default App;

6. Bắt đầu chạy ứng dụng

Khởi động ứng dụng bằng lệnh sau:

npm start

Một số lưu ý khi sử dụng Tailwind CSS với TypeScript

    •	Type Safety cho ClassName: Tailwind không kiểm tra kiểu của className, vì vậy TypeScript sẽ không báo lỗi nếu bạn nhập sai tên class. Để kiểm tra lỗi chính tả trong className, bạn có thể sử dụng tiện ích mở rộng như Tailwind CSS IntelliSense trong VS Code.
    •	Customizing Tailwind: Bạn có thể mở rộng theme của Tailwind trong tailwind.config.js nếu muốn thêm màu sắc, font, và các thuộc tính khác.
    •	Responsive Design: Tailwind hỗ trợ đầy đủ các class responsive như sm:, md:, lg:, xl:, giúp tối ưu giao diện cho nhiều thiết bị.
