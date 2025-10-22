# 📦 Inventory Management System

A simple web application to help you keep track of your products and stock levels. Whether you run a small store, manage warehouse inventory, or just want to organize your personal items - this app makes inventory management easy and organized.

## ✨ What This App Does

- **Keep track of your products** - Add items with names, prices, and quantities
- **Monitor stock levels** - Get alerts when items are running low
- **View your inventory** - See all your products in one organized list
- **Analyze your data** - Dashboards with charts showing your inventory trends
- **Share securely** - Sign in to keep your inventory private

## 🚀 Quick Start Guide

### Step 1: Get the App Running

1. **Download the code**
   ```bash
   git clone https://github.com/weirdTDD/inventory-app.git
   cd inventory-management
   ```

2. **Install everything needed**
   ```bash
   npm install
   ```

3. **Set up your database**
   - Get a free PostgreSQL database from [Supabase](https://supabase.com), [Neon](https://neon.tech), or [Railway](https://railway.app)
   - Create a `.env` file and add your database connection:

   ```env
   DATABASE_URL="your_database_connection_string_here"
   ```

4. **Start the app**
   ```bash
   npm run dev
   ```

5. **Open your browser** to [http://localhost:3000](http://localhost:3000) and create an account!

### 🚀 Deploy to Vercel (Optional)

To share your app online:

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. **Important:** In your Vercel project settings, add these environment variables:
   ```
   DATABASE_URL=your_database_connection_string
   NEXT_PUBLIC_STACK_PROJECT_ID=your_stack_project_id
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_stack_client_key
   STACK_SECRET_SERVER_KEY=your_stack_server_key
   NEXT_PUBLIC_STACK_URL=https://your-app-name.vercel.app
   ```
4. Deploy and your app will be live!

## 📱 How to Use the App

### Adding Products
1. Click "Add Products" in the sidebar
2. Fill in your product details:
   - **Product Name**: What you call your item
   - **Quantity**: How many you have in stock
   - **Price**: Cost per item
   - **SKU**: Optional tracking number
   - **Low Stock Alert**: When to warn you about running low
3. Click "Add Product" and you're done!

### Viewing Your Inventory
- Go to the "Inventory" page to see all your products
- Products are organized in a easy-to-read table
- See quantity levels and prices at a glance

### Checking Analytics
- Visit the "Dashboard" to see charts and graphs
- Track sales trends and inventory performance
- Monitor which products are moving or sitting in stock

### Managing Stock
- The app automatically alerts you when items reach your "Low Stock" threshold
- Update quantities as you sell or receive new stock

## 🔧 Having Trouble?

### "npm install" doesn't work?
- Make sure you have [Node.js](https://nodejs.org) installed (version 18 or higher)
- Try running `npm install` again

### Can't connect to database?
- Double-check your database URL in the `.env` file
- Make sure your database is running and accessible
- For Supabase/Neon: Check your connection string includes the password

### App won't start?
- Try `npm run dev` again
- Check if port 3000 is being used by another program
- Run `npm install` to make sure all dependencies are installed

## 🛠 For Developers & Advanced Users

### Technical Requirements
This app requires:
- Node.js 18+
- A PostgreSQL database
- Modern web browser

### Full Setup with Authentication

For production use with secure user accounts:

1. Sign up for [Stack Auth](https://stack-auth.com)
2. Create a new project in your Stack dashboard
3. Add these to your `.env` file:
   ```env
   NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_client_key
   STACK_SECRET_SERVER_KEY=your_server_key
   NEXT_PUBLIC_STACK_URL=https://your-domain.com
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Commands You'll Need
```bash
npm run dev      # Start development
npm run build    # Build for production
npm run seed     # Add sample data
```

### Technology Stack
Built with Next.js, React, TypeScript, Prisma, and PostgreSQL for reliable performance.

## 🌟 Contributing

Want to improve this app? Great! Here's how:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-idea`)
3. Make your changes
4. Test everything works
5. Submit a pull request

We welcome all improvements - from bug fixes to new features to better documentation!

## 📄 License

This project is free to use and modify under the MIT License.
