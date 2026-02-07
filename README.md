# Task Tracker Application

A full-stack **Task Tracker Application** built as part of the **SkillGenX MERN System Test**. This project demonstrates CRUD operations, REST API design, business rule enforcement, and clean UI implementation using Angular, Node.js, Express, and MongoDB.

---

## 🚀 Tech Stack

**Frontend**

* Angular
* TypeScript
* HTML5, CSS3

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (using Mongoose ODM)

---

## 📌 Project Overview

The Task Tracker application allows users to:

* Create tasks
* View all tasks
* Update task status through predefined stages
* Delete tasks

Each task follows a controlled workflow to ensure data consistency and correct business logic.

---

## ✅ Features

* Add new tasks with default status **TODO**
* View all tasks in a clean, centered UI
* Update task status: **TODO → IN_PROGRESS → DONE**
* Prevent invalid status transitions (TODO → DONE not allowed)
* Delete tasks
* Responsive and recruiter-friendly UI

---

## 🧱 Data Model

Each task follows the structure below:

* **_id**: Unique MongoDB identifier
* **title**: Task description (String)
* **status**: Task status (`TODO`, `IN_PROGRESS`, `DONE`)
* **createdAt**: Timestamp of creation

MongoDB schema is implemented using Mongoose with enum validation to restrict invalid status values.

---

## 🔗 Backend APIs

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| POST   | /api/tasks            | Create a new task  |
| GET    | /api/tasks            | Retrieve all tasks |
| PUT    | /api/tasks/:id/status | Update task status |
| DELETE | /api/tasks/:id        | Delete a task      |

### Validation & Error Handling

* Missing title → `400 Bad Request`
* Invalid status → `400 Bad Request`
* Task not found → `404 Not Found`
* Proper HTTP status codes used throughout

---

## 🎨 Frontend UI

### Components

* **TaskFormComponent** – Create new tasks
* **TaskListComponent** – Display tasks with actions
* **AppComponent** – Root component

### Data Flow

1. User interacts with UI
2. Angular component calls service
3. Service sends HTTP request to backend
4. Backend processes logic and interacts with MongoDB
5. Response updates UI dynamically

---

## 🧠 Business Logic

**Rule Implemented:**

* A task cannot move directly from **TODO → DONE**

**Implementation:**

* Enforced in both frontend and backend

**Reason:**

* Backend ensures data integrity and security
* Frontend improves user experience

---

## 🤖 AI Usage

AI tools were used for:

* Project structure guidance
* Debugging API and routing issues
* Understanding Angular–backend communication

All AI-generated suggestions were reviewed, tested, and manually refined.

---

## 🧪 How to Run the Project Locally

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend/task-tracker-ui
npm install
ng serve
```

### Environment Variables

Create a `.env` file in the backend folder:

```env
MONGO_URI=mongodb://localhost:27017/taskdb
```

---

## 🗂️ Project Structure

```
task-tracker/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   └── task-tracker-ui/
│       ├── src/
│       └── angular.json
├── .gitignore
└── README.md
```

---

## 🏁 Conclusion

This project fulfills all requirements of the **SkillGenX MERN System Test** and demonstrates full-stack development skills including API design, database modeling, UI development, and business rule enforcement.

---

**Author:** Sreekala
