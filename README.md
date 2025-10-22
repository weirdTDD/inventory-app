# Inventory Management System

A modern, full-stack inventory management application built with Next.js 15, React 19, and Prisma. Features user authentication, product tracking, analytics dashboard, and comprehensive inventory controls.

## 🚀 Features

- **User Authentication** - Secure sign-in powered by Stack
- **Dashboard Analytics** - Real-time insights into inventory metrics and trends
- **Product Management** - Add, view, and manage products with detailed tracking
- **Stock Monitoring** - Track low stock alerts and inventory levels
- **Data Visualization** - Interactive charts showing inventory performance over time
- **Responsive Design** - Mobile-first UI built with Tailwind CSS
- **Type Safety** - Full TypeScript implementation with Zod validation

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Stack Auth
- **Charts**: Recharts
- **Validation**: Zod
- **Build Tool**: Turbopack

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/weirdTDD/inventory-app.git
cd inventory-management
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"

# Stack Auth Configuration (get from your Stack dashboard)
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_client_key
STACK_SECRET_SERVER_KEY=your_server_key

# For production deployment, add your domain
NEXT_PUBLIC_STACK_URL=https://your-domain.com
```

### 3. Database Setup

```bash
# Generate Prisma client and run migrations
npx prisma generate
npx prisma db push

# Optional: Seed the database with demo data
npm run seed
```

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and sign in to start using the application.

## 📜 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run seed     # Seed database with sample data
```

## 🏗 Project Structure

```
inventory-management/
├── app/                    # Next.js App Router pages
│   ├── add-products/      # Product creation page
│   ├── dashboard/         # Analytics dashboard
│   ├── inventory/         # Product listing
│   ├── settings/          # User settings
│   └── sign-in/           # Authentication
├── components/            # Reusable React components
│   ├── sidebar.tsx        # Navigation component
│   ├── products-chart.tsx # Chart component
│   └── pagination.tsx     # Pagination component
├── lib/                   # Utility libraries
│   ├── auth.ts            # Authentication helpers
│   ├── prisma.ts          # Database client
│   └── products.ts        # Product operations
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Database schema
│   ├── seed.ts            # Seed data
│   └── migrations/        # Database migrations
└── public/                # Static assets
```

## 🔐 Authentication

This app uses Stack Auth for authentication. Users must sign in to access all features except the homepage.

## 📊 Database Schema

The application uses a single `Product` table with the following structure:

- `id` - Unique identifier
- `userId` - User association
- `name` - Product name
- `sku` - Optional stock keeping unit
- `price` - Product price (decimal)
- `quantity` - Current stock level
- `lowStockAt` - Threshold for low stock alerts
- `createdAt/updatedAt` - Timestamps

## 🚦 Production Notes

### Security Considerations
- Address any npm audit vulnerabilities before deployment
- Ensure all environment variables are properly configured
- Use HTTPS in production

### Performance
- The app is optimized with Turbopack for faster builds
- Database queries are indexed appropriately
- Static generation is used where possible

### Deployment
- Easily deploys to Vercel, Netlify, or any platform supporting Next.js
- Configure your PostgreSQL database (Neon, Supabase, Railway, etc.)
- Set up your Stack Auth project and environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
