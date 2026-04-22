-> Frontend
React + Vite
Tailwind CSS

-> Backend
Node.js
Express.js

-> Database
PostgreSQL
Prisma ORM

-> Tools & Services
OpenAI / OpenRouter API
Stripe (payments)
Postman (API testing)
Render (deployment)

AI-Website-Builder/
│
├── client/          # Frontend (React + Vite)
├── server/          # Backend (Node + Express)
├── prisma/          # Database schema
├── .env             # Environment variables
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/AvnishKr01/AI-Website-Builder.git
cd AI-Website-Builder

2️⃣ Backend Setup
cd server
npm install

-> Create a .env file inside server/:
PORT=3000
DATABASE_URL=your_postgresql_connection_string
OPENROUTER_API_KEY=your_openai_or_openrouter_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=3000
TRUSTED_ORIGIN=http://localhost:5173
BETTER_AUTH_SECRET=DOGumRfbmM0jZo68PR6rqZd8b01TSjuf
BETTER_AUTH_URL=http://localhost:3000
NODE_ENV=development
STRIPE_WEBHOOK_KEY=your_stripe_webhook_key

-> Run Prisma:
npx prisma generate
npx prisma migrate dev

-> Start backend server:
npm run dev

3️⃣ Frontend Setup
cd client
npm install

-> Create a .env file inside client/:
VITE_BACKEND_URL=http://localhost:3000

-> Start frontend:
npm run dev

############## ⭐ Support #################
If you like this project, give it a ⭐ on GitHub!
If you have any query and issues you can contact the below email!
Email -> avnish011kumar@gmail.com
