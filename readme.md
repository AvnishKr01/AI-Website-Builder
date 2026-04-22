## Frontend
React + Vite<br>
Tailwind CSS
## Backend
Node.js<br>
Express.js

## Database
PostgreSQL<br>
Prisma ORM

## Tools & Services
OpenAI / OpenRouter API<br>
Stripe (payments)<br>
Postman (API testing)<br>
Render (deployment)

## AI-Website-Builder/
│<br>
├── client/          # Frontend (React + Vite)<br>
├── server/          # Backend (Node + Express)<br>
├── prisma/          # Database schema<br>
├── .env             # Environment variables<br>
└── README.md

## ⚙️ Installation & Setup
## 1️⃣ Clone the Repository
git clone https://github.com/AvnishKr01/AI-Website-Builder.git<br>
cd AI-Website-Builder

## 2️⃣ Backend Setup
cd server<br>
npm install

## Create a .env file inside server/:
PORT=3000<br>
DATABASE_URL=your_postgresql_connection_string<br>
OPENROUTER_API_KEY=your_openai_or_openrouter_api_key<br>
STRIPE_SECRET_KEY=your_stripe_secret_key<br>
TRUSTED_ORIGIN=http://localhost:5173<br>
BETTER_AUTH_SECRET=DOGumRfbmM0jZo68PR6rqZd8b01TSjuf<br>
BETTER_AUTH_URL=http://localhost:3000<br>
NODE_ENV=development<br>
STRIPE_WEBHOOK_KEY=your_stripe_webhook_key<br>

## Run Prisma:
npx prisma generate<br>
npx prisma migrate dev<br>

## Start backend server:
npm run dev

## 3️⃣ Frontend Setup
cd client<br>
npm install<br>

## Create a .env file inside client/:
VITE_BACKEND_URL=http://localhost:3000

## Start frontend:
npm run dev

## ##############-⭐ Support-#################
If you like this project, give it a ⭐ on GitHub!<br>
If you have any query and issues you can contact the below email!<br>
Email -> avnish011kumar@gmail.com
