# React CRUD Application for **Delta-Sigma-Ventures-User Management App**

## Overview

This project is a React-based CRUD (Create, Read, Update, Delete) web application that manages user data through a REST-style API.\
It demonstrates clean component architecture, extensible form design, validation handling, and API abstraction.

The application allows users to:

- Create new users

- View user list

- Update existing user information

- Delete users

- Validate form inputs before submission

A mock backend is implemented using **JSON-server** for development and testing.

---

## Tech Stack

- React (Vite)

- JavaScript (ES6+)

- Fetch API

- JSON-server (Mock API)

- Tailwind CSS (UI styling)

- React Toastify (User notifications)

---

## Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone git@github.com:vishwajeet-8/Delta-Sigma-Ventures-Users-List.git
cd <project-folder>
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run React Application

```bash
npm run dev
```

App will be available at:

```

http://localhost:5173
```

---

### 4️⃣ Run Mock API Server

In a separate terminal:

```bash
npm run server

```

Mock API:

```
http://localhost:3000/users
```

---

## Mock API Setup (JSON-server)

### Install

```bash
npm install json-server --save-dev
```

### Create `db.json`

```json
{
  "users": []
}
```

### Start server

```bash
npm run server
```

JSON-server automatically provides endpoints:

| Method | Endpoint |
| --- | --- |
| GET | /users |
| POST | /users |
| PATCH | /users/:id |
| DELETE | /users/:id |

---

## Form Extensibility — Adding New Fields

The form is configuration-driven using a schema defined in:

```
src/config/formFields.js
```

Each field is declared as an object:

```js
{
  name: "firstName",
  label: "First Name",
  required: true,
  pattern: /^[A-Za-z]+$/,
  message: "Only letters allowed"
}
```

### To Add a New Field

1️⃣ Add a new object in `formFields.js`

Example:

```js
{
    id: 1,
    form: "First Name",
    name: "firstName",
    type: "text",
    required: true,
}
```

2️⃣ Add default value in initial form state:

```js
const obj = {
  firstName: "",
  lastName: "",
  phone: "",
  email: ""
};
```

No additional UI changes are required because:

- Inputs are dynamically rendered from the config

- Validation is applied generically

- Submission logic uses form state dynamically

This architecture ensures minimal code modification when extending fields.

---

## Author

Vishwajeet Rout