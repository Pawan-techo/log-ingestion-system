# Log Ingestion System

## 1. Project Overview
The **Log Ingestion System** is a full-stack web application that allows users to ingest, store, and filter logs from different resources. The system supports multiple log levels (`error`, `warn`, `info`, `debug`) and includes filtering by message content, resource ID, timestamps, and other metadata.

**Key Features:**
- **Create Logs:** Submit logs with level, message, resource ID, timestamp, trace/span IDs, commit hash, and metadata.
- **Filter Logs:** Flexible multi-criteria filtering with instant frontend updates.
- **Frontend/Backend Separation:** React frontend communicates with Node.js/Express backend.
- **Persistent Storage:** Logs are saved in a JSON file (`logs.json`) on the server.
- **Loading Indicators & Empty States:** Frontend shows a spinner during API calls and a message when no logs are found.
- **Debounced Search:** Optional performance enhancement for text search input.

**Approach:**
- Frontend built using **React + Tailwind CSS** for rapid UI development and responsive design.
- Backend built using **Node.js + Express**, with file-based persistence for simplicity and easy deployment.
- Data is validated and sanitized before ingestion. Filtering logic is handled server-side for efficiency.

---

## 2. Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- Optional: **Git** for cloning the repository

---

## 3. Setup Instructions

### 3.1 Backend Setup
1. Navigate to the backend folder:
```bash
cd backend
````

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm start
```

* Backend server runs at: `http://localhost:3000`

**Backend Details:**

* Logs are stored in `backend/data/logs.json`.
* Endpoints:

  * `POST /logs` → Create a new log
  * `GET /logs` → Retrieve logs with optional filters (`level`, `message`, `resourceId`, `timestamps`, `traceId`, `spanId`, `commit`)

---

### 3.2 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm run dev
```

* Frontend server runs at: `http://localhost:5173` (or another port specified by Vite)

---

### 3.3 Testing

**Backend Unit Tests:**

* Located in `backend/src/tests/`
* Run tests using:

```bash
npm test
```

* Tests include filtering logic for logs with multiple conditions.

**Frontend:**

* Optional: Add component tests with **Jest** or **React Testing Library**.

---

## 4. Design Decisions & Trade-offs

**File-based Persistence:**

* Used JSON (`logs.json`) to simplify storage and avoid database setup.
* Trade-off: Not suitable for very large datasets or concurrent writes in production.

**Library Choices:**

* **Express:** Lightweight, minimal setup, easy routing.
* **React + Tailwind CSS:** Quick UI prototyping with responsive, modern design.
* **Axios:** Simplified HTTP requests with support for query parameters.

**Filtering Logic:**

* Implemented server-side for performance and consistency.
* Supports combined filters across multiple fields.

**Debounced Search:**

* Enhances frontend performance by delaying API calls while typing.

**Error Handling & Validation:**

* Backend validates required fields, log levels, and timestamp formats.
* Returns meaningful HTTP responses (400 for invalid input, 500 for server errors).

**UI/UX Enhancements:**

* Sticky filter bar for easy access.
* Loading spinner during API calls.
* Empty state message when no logs match filters.
* Toast notifications for success/error during log creation.

---

## 5. Assumptions

* Users provide valid ISO 8601 timestamps when filtering by date.
* Logs are ingested with minimal metadata; optional fields default to `"N/A"`.
* JSON file-based storage is sufficient for the project’s intended usage.

---

## 6. Folder Structure

```
log-ingestion-system/
│
├── backend/
│   ├── data/
│   │   └── logs.json                      # JSON file for log persistence
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   └── log.controller.js          # Handles create/get log endpoints
│   │   │
│   │   ├── routes/
│   │   │   └── log.routes.js              # Express routes for logs
│   │   │
│   │   ├── services/
│   │   │   ├── log.service.js             # Business logic for logs
│   │   │   └── filterLogs.js              # Server-side filtering logic
│   │   │
│   │   ├── utils/
│   │   │   ├── fileDB.js                  # JSON read/write helper
│   │   │   └── validateLog.js             # Log validation helper
│   │   │
│   │   ├── tests/
│   │   │   ├── filterLogs.test.js         # Unit tests for filterLogs
│   │   │   └── mocks/
│   │   │       └── logs.mock.js           # Mock logs for tests
│   │   │
│   │   └── app.js                         # Main Express app
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── logApi.js                  # Axios API calls
│   │   │
│   │   ├── components/
│   │   │   ├── FilterBar.jsx              # Filter UI component
│   │   │   ├── LogForm.jsx                # Form for creating logs
│   │   │   ├── LogList.jsx                # Displays list of logs
│   │   │   └── LogRow.jsx                 # Individual log row
│   │   │
│   │   ├── hooks/
│   │   │   └── useDebounce.js             # Debounce hook for search
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.jsx              # Main dashboard page
│   │   │
│   │   ├── app.jsx                        # React entry point
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md                              # Project documentation
```
## 7. Project Assessment & Submission

This project is developed and submitted for evaluation purposes for **Evallo.ai**. It demonstrates:

- Full-stack web development using **React** and **Node.js/Express**.
- File-based persistence with server-side filtering logic.
- A clean and responsive UI using **Tailwind CSS**.
- Unit tests for critical backend logic (filtering logs).
- Thoughtful UX enhancements including sticky filter bar, loading spinner, and toast notifications.

We hope this implementation reflects best practices in design, code structure, and usability.

**Warm regards,**  
**Pawan Bhuyar**
