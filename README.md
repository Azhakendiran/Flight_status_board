# Real-Time Flight Status Board

## 📌 Overview

This **React-based** application, developed using **TypeScript**, simulates a real-time flight status board. It retrieves flight details from an API, updates data at regular intervals, and enables users to access comprehensive flight information.

## 🚀 Features

- **Live Flight Status Updates**: Fetches and displays real-time flight statuses.
- **Automatic Data Refresh**: Periodic updates ensure the latest information.
- **Flight Detail View**: Allows users to click on a flight for more details.
- **Seamless Navigation**: Utilizes React Router for intuitive user experience.
- **Robust Error Handling**: Provides user-friendly messages in case of failures.
- **TypeScript Integration**: Ensures type safety and improved maintainability.
- **Unit Testing**: Implements Jest and React Testing Library for reliable testing.
- **Responsive UI**: Designed for clarity and accessibility.

## 🛠️ Technology Stack

- **React** (Frontend framework)
- **TypeScript** (Static typing for enhanced reliability)
- **Axios** (Efficient API requests handling)
- **React Router** (Client-side routing for better navigation)
- **Jest & React Testing Library** (Unit and integration testing)
- **CSS** (Styling for a clean and user-friendly interface)

## 📂 Project Structure

```
fn
ame is │── src/
│   ├── pages/
│   │   ├── FlightList.tsx        # Displays a table of flights
│   │   ├── FlightDetail.tsx      # Shows detailed flight information
│   ├── App.tsx                   # Main component with route handling
│   ├── index.tsx                 # Entry point for the application
│   ├── index.css                 # Global styling
│── public/
│── package.json
│── README.md
│── .vscode/settings.json          # VS Code configuration
│── .eslintrc.js                   # ESLint configuration
│── jest.config.js                 # Jest test configuration
│── .gitignore
```

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Azhakendiran/Flight_status_board.git
cd Flight_status_board
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm start
```

- Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4️⃣ Execute Unit Tests

```bash
npm test
```

- Runs Jest test cases using **React Testing Library** to ensure functionality.

## 📌 API Endpoints

The application retrieves real-time flight data from the following API:

### **Fetch all flights**

```bash
GET https://flight-status-mock.core.travelopia.cloud/flights
```

### **Retrieve flight details by ID**

```bash
GET https://flight-status-mock.core.travelopia.cloud/flights/:id
```

## 📌 Best Practices Implemented

✅ **TypeScript Usage**: Ensures maintainability and type safety.\
✅ **React Hooks**: Leverages `useState` and `useEffect` for state management.\
✅ **Axios for API Calls**: Handles API requests efficiently with error management.\
✅ **React Router**: Provides structured navigation for a seamless user experience.\
✅ **Error Handling**: Displays informative error messages when API calls fail.\
✅ **Comprehensive Testing**: Ensures UI components and API interactions function as expected.

## 📌 Future Enhancements

🚀 **Search & Filtering Options**: Enables users to find flights faster.\
🚀 **Pagination Support**: Improves efficiency for handling large data sets.\
🚀 **WebSocket Implementation**: Facilitates real-time updates instead of periodic polling.\
🚀 **Dark Mode Support**: Enhances user experience with theme customization.



