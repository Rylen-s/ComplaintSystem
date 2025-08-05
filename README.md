# Complaint Management Agent

A mini full-stack complaint management system that allows users to submit complaints and internal staff to manage and resolve them. Built with React + TypeScript + Vite + Tailwind CSS on the frontend, Node.js + Express on the backend, and Supabase (PostgreSQL) for the database.

## Setup and Installation

### 1. Clone the Repository

bash:
git clone https://github.com/yourusername/complaint-management-agent.git
cd complaint-management-agent

### 2. Backend Server

-cd backend
-npm install

Run node server with:
-node index.js
or (if nodemon)
-npx nodemon index.js

### 3. Frontend Server

-cd frontend
-npm install

Run frontend with:
-npm run dev

### 4. Create .env File Locally Under ./backend

Create .env file and paste SupaBase URL and Public Key:

BASE_URL=https://ujcagspvtmljidgohzlc.supabase.co
PUBLIC_ANNON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqY2Fnc3B2dG1samlkZ29oemxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDgwMDAsImV4cCI6MjA2OTM4NDAwMH0.FGayQTBkgsGoOd7f9FuLHRsYmUlWYaENAoYzs0yMrTg

## Ensure .env file is in ./backend 


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


### Assumptions and Trade-Offs

Assumptions made:
- This complaint system assumes no authentication is necessary, so no token is passed and no authentication header is required.
- Backend assumes frontend validation suffices and takes frontend data as as clean input
- This form assumes only basic information is required, such as name, email, and complaint; more input is likely needed as well as login/auth to ensure real customer
- This assumes the form will only be accessed on web; this has not been generalized for other platforms
- Assumes only binary (pending/resolved) is necessary, more states may be required long term
- Assumes only basic user data such as name, email, complaint, submit time, and id is required by ServiceAgent, more user specific data lilkely necessary

Trade-Offs:
- This system is using Supabase REST API via Axios, rather than a PostgreSQL driver which allows for faster development and a simpler setup while sacrificng direct control and opportunities to perform more complex operations
- This system does not use pagination and is not ideal for large traffic, needing to be implemented for large-scale operations
- Having only one route/table for complaints ensures simplicity in posting and getting but will likely not be great for many requests simultaneously; need to implement larger pipeline for greater durability
- No centralized data aggregation or caching is performantly inefficient for large scale operations
- The entire sql table is scanned for updates, and is also fetched redundantly, this is simple for small scale operations but can be inefficient

### Improvements and Additions

Possible Improvements:

- Providing more fields for specific user data on the form side but also in our tables for a more organized system, which allows us to connect complaints to specific users
- Add pagging, filtering and sorting for large database management
- Improve validation for additional edge cases and add specific error messages
- Adding features that improve database get/post route performance such as indexing or query optimization, pooling or caching which will operate smoother as we scale up the complaint system
- Use React Query for efficient database retrieval and management as well as caching
- Improve user friendliness and attention to detail with UI; ensure complaint form matches ServiceAgent theme

Possible Additions:
- Important features such as authorization/login could be important to validate complaints and to attach a user to the complaint
- Add tags or additional ways to filter complaints on admin side
- Add detailed analytics for admin side as well, in addition to table view of complaints
- Notifications via email for status of complaint
- Ensure generalization; the complaint form works on other platforms



