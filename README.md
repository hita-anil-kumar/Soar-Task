# SOAR Financial Dashboard

A modern, responsive financial dashboard built with **React.js** and **styled-components**. It features interactive charts, a user settings panel, transaction history, and card management.

## 🔧 Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hita-anil-kumar/Soar-Task.git
   cd soar-task
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   Open your browser at [http://localhost:3000](http://localhost:3000).

4. **Optional: Start JSON server** for mock API:
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3001
   ```

## 📁 Folder Structure

```
soar-task/
├── public/
├── src/
│   ├── api/                # Mock API calls
│   ├── assets/             # Icons and images
│   ├── charts/             # Chart components (Line, Pie, Bar)
│   ├── components/         # Reusable components (Sidebar, Header, etc.)
│   ├── context/            # UserContext for global state
│   ├── pages/              # Page views like Dashboard and Settings
│   ├── App.jsx             # Root component
│   └── index.js            # App entry point
```

## 🚀 Features

- Interactive dashboard layout
- User profile with editable settings
- Line, bar, and pie charts using Chart.js
- SVG icon system
- Mock API simulation via JSON Server
- Mobile responsive layout
- Sidebar drawer for smaller screens

## ⚙️ Tech Stack

- React
- styled-components
- Chart.js
- React Router DOM
- JSON Server (mock API)

## ✅ Assumptions

- Data is fetched from mocked endpoints (using local `mockApi.js`)
- Profile pictures are stored in `localStorage` during runtime
- The layout prioritizes responsive behavior for screens >375px wide

## 📄 License

This project is licensed under the MIT License.

---

Built with 💙 by Hita
