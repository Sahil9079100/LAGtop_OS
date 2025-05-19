# LAGtop OS

LAGtop OS is a **web-based operating system** that runs entirely in your browser, simulating the look and feel of Windows. It provides an interactive, desktop-like experience, giving you the illusion of running a full OS inside your browser window.

---

## Features

- Windows-like UI and experience in the browser
- User authentication and session management
- Simulated desktop, start menu, and more
- Modular and extensible frontend and backend

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [MongoDB](https://www.mongodb.com/) database (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sahil9079100/LAGtop_OS.git
   cd LAGtop_OS
   ```

2. **Install dependencies for both backend and frontend:**
   ```sh
   cd backend
   npm install
   cd ../frontend/LagtopOS
   npm install
   cd ..
   ```

3. **Create a `.env` file in the `backend` directory with the following content:**
   ```env
   PORT=3000                # Or any port you prefer
   MONGO_DB_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_for_encryption
   ```

---

## Running the Project

- **Start the backend:**
  ```sh
  cd backend
  npm start
  ```

- **Start the frontend:**
  ```sh
  cd ../frontend/LagtopOS
  npm run dev
  ```

- Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

---

## Contributing

Contributions are welcome!  
If you want to contribute, please feel free to fork the project and submit a pull request.  
I will be updating this project continuously in the future, one feature at a time 🍊

---

## License

This project is open source and available under the [MIT License](LICENSE).