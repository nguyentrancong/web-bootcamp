1. Cài đặt react-router-dom

Đầu tiên, bạn cần cài đặt react-router-dom qua npm hoặc yarn:

npm install react-router-dom

2. Cấu trúc ứng dụng với Router cơ bản

Bước 1: Tạo các trang

Tạo các component trang để định tuyến (ví dụ: HomePage, AboutPage, ContactPage). Ví dụ:

// HomePage.jsx
import React from 'react';

const HomePage = () => {
return <h1>Welcome to the Home Page</h1>;
};

export default HomePage;

// AboutPage.jsx
import React from 'react';

const AboutPage = () => {
return <h1>About Us</h1>;
};

export default AboutPage;

// ContactPage.jsx
import React from 'react';

const ContactPage = () => {
return <h1>Contact Us</h1>;
};

export default ContactPage;

Bước 2: Thiết lập Router trong file chính (App.js hoặc index.js)

react-router-dom cung cấp các component chính như BrowserRouter, Routes, Route, và Link. Hãy thiết lập router trong App.js:

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const App = () => {
return (
<Router>
<nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</nav>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
</Routes>
</Router>
);
};

export default App;

Bước 3: Render ứng dụng với Router

Trong file index.js, chỉ cần import và render App:

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

3. Giải thích các thành phần chính của react-router-dom

   • BrowserRouter: Component chứa toàn bộ ứng dụng và điều hướng dựa trên URL.
   • Routes: Bao bọc các route và giúp điều hướng từng trang.
   • Route: Định nghĩa từng đường dẫn và component sẽ hiển thị khi URL khớp.
   • Link: Tạo các liên kết để chuyển trang mà không cần reload toàn bộ ứng dụng.

4. Thêm Route Bảo vệ (Protected Route)

Nếu có trang cần xác thực trước khi truy cập (như trang Dashboard), bạn có thể dùng ProtectedRoute:

// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

Sử dụng ProtectedRoute trong App.js:

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

const isAuthenticated = true; // Hoặc logic xác thực từ context hoặc state

const App = () => {
return (
<Router>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route
path="/dashboard"
element={
<ProtectedRoute isAuthenticated={isAuthenticated}>
<Dashboard />
</ProtectedRoute>
}
/>
</Routes>
</Router>
);
};

export default App;

5. Sử dụng useNavigate để điều hướng

Trong một số tình huống (như sau khi đăng nhập), bạn có thể cần điều hướng người dùng thông qua mã JavaScript. react-router-dom cung cấp hook useNavigate cho việc này:

// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const navigate = useNavigate();

const handleLogin = () => {
// Logic đăng nhập
navigate('/dashboard');
};

return (
<div>
<h1>Login Page</h1>
<button onClick={handleLogin}>Login</button>
</div>
);
};

export default LoginPage;

6. Sử dụng useParams để lấy thông tin URL động

Để lấy tham số động trong URL (ví dụ: user/:id), bạn có thể dùng useParams:

// UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
const { id } = useParams();

return <h1>User Profile for user ID: {id}</h1>;
};

export default UserProfile;

Và cấu hình route trong App.js:

<Route path="/user/:id" element={<UserProfile />} />
