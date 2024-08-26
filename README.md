<img width="1498" alt="Screenshot 2024-08-26 at 5 37 51 PM" src="https://github.com/user-attachments/assets/14ee577a-a669-4489-b69f-37c82f657e4f">

Xenon - Multi Vendor E-commerce Web Application

Xenon is a feature-rich multi-vendor e-commerce web application designed to provide a seamless online shopping experience. It supports multiple vendors, allowing them to showcase their products on a unified platform, and offers customers a wide range of products to choose from.

Table of Contents
Features
Technologies Used
Installation
Usage
Screenshots
Folder Structure
Contributing
License
Features
Multi-Vendor Support: Multiple vendors can register, manage their products, and handle orders independently.
Product Search: Users can search among thousands of products using a robust search functionality.
Responsive Design: Fully responsive design ensures a smooth experience on all devices.
Authentication: Secure login/signup options for customers, vendors, and admins.
Wishlist & Cart: Customers can add products to their wishlist and cart for easy access later.
Language Support: Multi-language support to cater to a global audience.
Payment Integration: Integrated with popular payment gateways like Stripe or PayPal.
Admin Dashboard: Admins can manage users, vendors, and products efficiently.
Technologies Used
Frontend: React.js, Next.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB/PostgreSQL
Authentication: JWT, OAuth
Carousel Component: ShadCN with Embla Autoplay
Deployment: Vercel/Netlify
Installation
Clone the Repository:


git clone https://github.com/yourusername/xenon-ecommerce.git
cd xenon-ecommerce
Install Dependencies:
npm install
Set Up Environment Variables: Create a .env file in the root directory and add the following variables:

makefile
Copy code
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
Run the Development Server:


npm run dev
Open in Browser: Navigate to http://localhost:3000 to view the application.

Usage
- User Registration: Users can sign up and log in to start shopping.
