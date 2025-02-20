# 📸 Digital Camera Store
Made by Aidyn Shaikenov, Salim Faizullayev.

Welcome to the **Digital Camera Store** project! This is a full-stack web application that allows users to browse, add, and purchase digital cameras. The project includes a **React frontend** and a **Node.js/Express backend**, with user authentication and authorization.
---

## 🚀 Features

### 🛡️ User Authentication
- Register and log in as a user
- JWT-based authentication for secure access

### 📷 Camera Management
- Browse a list of cameras with details (name, brand, price, specifications)
- Add new cameras (admin-only feature)
- Search for cameras by name

### 🛍️ Order Management
- Place orders for cameras
- View order history (future feature)

### 🎨 Responsive Design
- Built with **Bootstrap** for a clean and responsive UI

---

## 🛠 Technologies Used

### 🖥 Frontend
- **React** - JavaScript library for building the user interface
- **React Router** - For routing and navigation
- **Axios** - For making HTTP requests to the backend
- **Bootstrap** - For styling and responsive design

### 🌐 Backend
- **Node.js** - JavaScript runtime for the backend
- **Express** - Web framework for building RESTful APIs
- **MongoDB** - NoSQL database for storing data
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB
- **JSON Web Tokens (JWT)** - For user authentication

---

## 📥 Getting Started

### ✅ Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/)
- **MongoDB**: Install locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas)

### 🛠 Installation

#### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/your-username/digital-camera-store.git
cd digital-camera-store
```

#### 2️⃣ Backend Setup:
Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Create a `.env` file and add the following:
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```
Start the backend server:
```bash
npm start
```

#### 3️⃣ Frontend Setup:
Navigate to the frontend folder:
```bash
cd ../frontend
```
Install dependencies:
```bash
npm install
```
Create a `.env` file and add the following:
```
REACT_APP_API_URL=http://localhost:5000
```
Start the frontend development server:
```bash
npm start
```

---

## 🎯 Usage

- **Register**: Visit `/register` to create a new account
- **Login**: Visit `/login` to log in with your credentials
- **Browse Cameras**: Visit `/cameras` to view the list of cameras
- **Add a Camera**: Visit `/add-camera` to add a new camera (admin-only feature)
- **Place an Order**: Visit `/place-order` to place an order for a camera

---

## 🚀 Deployment

### 📡 Backend
- Deploy the backend to **Heroku** or **Render**
- Update the `MONGO_URI` to point to your production MongoDB instance

### 🌍 Frontend
- Deploy the frontend to **Netlify** or **Vercel**
- Update `REACT_APP_API_URL` to point to your deployed backend

---

## 📸 Screenshots

| Home Page | Camera List | Login Page |
|-----------|------------|------------|
| ![Home Page](![alt text](image.png)) | ![Camera List](link-to-screenshot) | ![Login Page]![alt text](image-1.png) |

---

## 🤝 Contributing

Contributions are welcome! To contribute, follow these steps:
1. **Fork** the repository
2. **Create a new branch** (`git checkout -b feature/YourFeatureName`)
3. **Commit your changes** (`git commit -m 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/YourFeatureName`)
5. **Open a pull request**

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- **Bootstrap**: For responsive design components
- **React**: For the frontend framework
- **Express**: For the backend framework
- **MongoDB**: For the database

---

Enjoy using the **Digital Camera Store**! 🚀

