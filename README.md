# Soar Task - Financial Dashboard

A responsive, modern financial dashboard built with React and styled-components. It provides visualizations for user activity, expenses, transactions, and card balances, and includes a customizable user settings page.

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hita-anil-kumar/Soar-Task.git
cd soar-task
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm start
# or
yarn start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🗂 Folder Structure

```
soar-task/
│
├── public/
├── src/
│   ├── assets/              # Icons & images
│   ├── components/          # Reusable UI components
│   ├── charts/              # Chart components using Chart.js
│   ├── context/             # React context for user info
│   ├── data/                # Mock JSON data
│   ├── pages/               # Route-based pages (Dashboard, Settings, etc.)
│   ├── api/                 # Simulated API requests
│   └── App.js               # Entry point
│
├── db.json                  # Used with JSON Server for mock backend
├── README.md
└── package.json
```

---

## 🌟 Features

- Responsive layout with adaptive design for desktop and mobile
- Lazy loading of components with `React.lazy` and `Suspense`
- ARIA attributes and keyboard navigation for accessibility
- Data visualizations using `Chart.js`
- Profile editing with image upload and data persistence using localStorage
- Drawer-style sidebar for mobile view
- Styled with `styled-components`
- Mock APIs for transactions, cards, charts, and user info

---

## ⚙️ Tech Stack

- **React 18**
- **React Router v6**
- **Styled-components**
- **Chart.js** with `react-chartjs-2`
- **React DatePicker**
- **JSON Server** (for mock backend)
- **SVG Icons** (custom and imported)

---

## 🧪 Accessibility

- Proper use of ARIA roles: `navigation`, `menuitem`, `search`, `banner`, etc.
- Keyboard navigation supported (Arrow keys, Enter/Space)
- Icons marked `aria-hidden` where appropriate
- Inputs and interactive elements have accessible `aria-label`s

---

## 🚀 Performance Optimizations

- Components like Header, Sidebar, Cards, and Charts are **lazy-loaded**
- Minimal re-renders using proper state isolation
- Lightweight SVG icons instead of full image files

---

## ✅ Assumptions Made

- All data (cards, charts, transactions) is mock and simulates real-world usage
- JSON Server is used to simulate a backend (via `db.json`)
- User login/authentication is not implemented
- User profile is saved in localStorage for persistence
- The app is designed to work best on modern browsers (Chrome, Firefox, Safari, Edge)

---

## 💬 Future Enhancements

- Add authentication and real backend integration
- Enable theme switching (dark/light)
- Add tests using Jest & React Testing Library
- Expand charts with tooltips, filters, and export options

---

## 🖥 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💙 by Hita
