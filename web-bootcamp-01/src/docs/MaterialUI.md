Cách 1: Import từ Google Fonts trong index.css

Bạn có thể thêm trực tiếp Roboto từ Google Fonts bằng cách thêm link vào file index.css hoặc App.css.

    1.	Mở file src/index.css hoặc src/App.css.
    2.	Thêm link import Google Fonts vào đầu file:

/_ src/index.css _/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    3.	Material UI sẽ tự động áp dụng font Roboto cho các component của nó nếu font đã được import.

Cách 2: Import từ @fontsource/roboto trong index.tsx hoặc App.tsx

@fontsource/roboto là một thư viện tiện lợi giúp dễ dàng quản lý và tải font Roboto qua npm.

    1.	Cài đặt @fontsource/roboto:

npm install @fontsource/roboto

    2.	Import font vào src/index.tsx hoặc src/App.tsx:

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/roboto'; // Import Roboto font
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

Tùy chỉnh font với theme của Material UI

Bạn có thể tùy chỉnh font trong ThemeProvider của Material UI nếu cần thay đổi kích thước hoặc trọng lượng font:

// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
typography: {
fontFamily: 'Roboto, Arial, sans-serif',
},
});

export default theme;

Sau đó, áp dụng theme này ở cấp ứng dụng:

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import '@fontsource/roboto';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
);
