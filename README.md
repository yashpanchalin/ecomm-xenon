<img width="1498" alt="Screenshot 2024-08-26 at 5 37 51 PM" src="https://github.com/user-attachments/assets/14ee577a-a669-4489-b69f-37c82f657e4f">

Xenon - Multi Vendor E-commerce Web Application

Xenon is a comprehensive full-stack e-commerce application built using React, Next.js, Tailwind CSS, and Wix Headless CMS. The project is developed as part of a Next.js shopping app course, incorporating server actions and a headless CMS for content management.


Table of Contents
  -Overview
  -Features
  -Technologies Used
  -Getting Started
  -Screenshots
  -Project Structure
  -Contributing
  -License

Overview
This e-commerce application provides a robust shopping experience with a modern UI. Built with React and Next.js for the frontend, the app leverages Tailwind CSS for styling and integrates with Wix Headless CMS for managing content. The app is designed to be scalable, responsive, and easy to customize for different types of online stores.

Overview
This e-commerce application provides a robust shopping experience with a modern UI. Built with React and Next.js for the frontend, the app leverages Tailwind CSS for styling and integrates with Wix Headless CMS for managing content. The app is designed to be scalable, responsive, and easy to customize for different types of online stores.


Technologies Used

Frontend: React.js, Next.js, Tailwind CSS
Backend: Next.js API Routes, Server Actions
CMS: Wix Headless CMS
Deployment: Vercel/Netlify

Getting Started

Prerequisites

Ensure you have the following installed on your machine:
-Node.js (>=14.x)
-npm or yarn
-A Wix Headless CMS account

Installation

1. Clone the Repository:
  git clone (https://github.com/yashpanchalin/ecomm-xenon.git)
cd nextjs-ecommerce
2. Install Dependencies:
  npm install
  or
  yarn install
3. Set Up Environment Variables:
   Create a .env.local file in the root directory and add the following variables:
      NEXT_PUBLIC_WIX_API_KEY=your_wix_api_key
      NEXT_PUBLIC_WIX_SITE_ID=your_wix_site_id
      NEXT_PUBLIC_JWT_SECRET=your_jwt_secret
5. Run the Development Server:
  npm run dev
  or
  yarn dev
6. Open in Browser: Navigate to http://localhost:3000 to view the application.


Project Structure 
  .
  ├── public            # Public assets
  ├── src
  │   ├── app           # Next.js app directory
  │   ├── components    # Reusable React components
  │   ├── pages         # Next.js pages
  │   ├── styles        # Global and component-specific styles
  │   ├── utils         # Utility functions and helpers
  │   ├── wix           # Wix Headless CMS integration
  │   └── ...
  ├── .env.local        # Environment variables
  ├── package.json      # Project metadata and dependencies
  └── README.md         # Project documentation

Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request. Ensure your changes are well documented and tested.

Usage
- User Registration: Users can sign up and log in to start shopping.
