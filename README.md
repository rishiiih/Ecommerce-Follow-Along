

## Key Features

### 1. REST API
- Implements RESTful principles for efficient client-server communication.
- Endpoints for managing products, users, and orders.

### 2. MERN Stack
- Built with MongoDB, Express.js, React, and Node.js.
- Ensures scalability, performance, and a seamless full-stack experience.

### 3. Order Handling
- Streamlined order processing from cart to checkout.
- Real-time updates for order status and inventory management.

### 4. Product Listing & Management
- Features for adding, editing, and removing products.
- Search and filter functionality for an optimized user experience.

### 5. User Authentication
- Secure authentication with JWT.
- Role-based access control for users and admins.

---

## Milestone 2 Progress 🚀

### ✅ Project Setup
- Structured the project with separate frontend and backend directories.
- Initialized a React app for the frontend and a Node.js server for the backend.

### ✅ Tooling & Configuration
- Configured Tailwind CSS for modern and responsive styling.
- Added useful extensions to improve development efficiency.

### ✅ Login Page Implementation
- Designed and developed a fully functional Login Page.
- Ensured proper UI styling using Tailwind CSS.
- Set up basic authentication logic to handle user login.

This milestone laid the groundwork for the E-Commerce application by setting up the project structure and implementing the first user-facing feature.

---

## Milestone 3 Progress 🚀

### ✅ Backend Folder Structure
- Organized backend code with separate folders for routes, controllers, models, and middleware.
- Introduced `utils` and `middlewares` directories for better modularity.

### ✅ Server Setup
- Created a backend server using Node.js and Express.
- Configured the server to listen on a designated port.

### ✅ Database Connection
- Integrated MongoDB to store and manage data.
- Verified successful connection between the server and MongoDB.

### ✅ Error Handling
- Implemented a global error handler for better debugging.
- Provided meaningful error messages for invalid requests and failed operations.

### ✅ README Update
- Documented Milestone 3 progress in this README file.

This milestone focused on setting up a solid backend infrastructure to support the application’s growth and data management.

---

## Milestone 4: Creating User Model and Controller 🚀

In Milestone 4, we expanded our backend by introducing User Models, Controllers, and File Uploads.

✅ User Model Implementation
Defined a User Schema using Mongoose to store user details (name, email, password, etc.).
Implemented necessary validations to ensure data integrity.
Integrated bcrypt for secure password hashing. 

✅ User Controller Setup
Developed controller functions to:
Create new users
Retrieve user details
Update user information
Delete users if necessary
Handled error responses for invalid or duplicate user entries.

✅ Multer File Upload Integration
Configured Multer to handle file uploads (e.g., profile pictures).
Implemented logic to store and retrieve uploaded images.
Ensured file validation to prevent invalid file types from being uploaded.

✅ Project Submission
Pushed the updated code to GitHub.
Updated the README with Milestone 4 details.

This milestone strengthened the user management aspect of our application, making it more robust and scalable for future enhancements.

## Milestone 5: Creating the Signup Page 🚀
In Milestone 5, we focused on building the frontend Sign-Up page and implementing client-side form validation.

✅ Sign-Up Page UI Development
Created the user interface for the Sign-Up page using HTML and CSS (likely with Tailwind CSS).
Included fields for name, email, and password.
Designed the page to be user-friendly and visually appealing.

✅ Form Validation
Implemented client-side form validation to ensure data quality.
Validated email format, password strength (e.g., minimum length), and other necessary fields.
Provided user-friendly error messages for invalid inputs.

✅ README Update
Documented Milestone 5 progress in this README file.

This milestone focused on creating the user registration interface and ensuring that the data entered by the user is valid before being sent to the backend. This improves user experience and reduces the load on the server.

## Milestone 6: Backend Signup Endpoint and Password Encryption 🚀
In Milestone 6, we implemented the backend endpoint to handle user signup and securely store user data, including encrypting passwords.

✅ Signup Endpoint Implementation
Created a new route and controller function to handle POST requests to the signup endpoint.
Received user data from the frontend signup form.

✅ Password Encryption
Used bcrypt to hash the user's password before storing it in the database.
Ensured that passwords are never stored in plain text.

✅ User Data Storage
Stored the complete user data (name, email, hashed password, etc.) in the MongoDB database.
Implemented error handling for duplicate entries and other potential issues.

✅ README Update
Documented Milestone 6 progress in this README file.

This milestone focused on securely handling user registration on the backend, including the crucial step of password encryption. This is essential for protecting user data and maintaining security best practices.

## Milestone 7: Backend Login Endpoint and Password Validation 🚀

✅ Login Endpoint Implementation Created a backend route to handle user login. Accepted user credentials (email/username and password) from the frontend.

✅ User Authentication Process Retrieved the corresponding user from the database using the provided email. If the user does not exist, returned an error: "User does not exist." Used bcrypt.compare to compare the entered password with the stored hashed password. If the passwords matched, authenticated the user and proceeded to login. If they did not match, returned an authentication error.

✅ Security Measures Ensured that passwords were stored as hashes using bcrypt to maintain security. Handled potential security vulnerabilities, such as brute-force attacks.

✅ README Update Documented Milestone 7 progress in this README file. This milestone introduced the backend authentication process, enabling users to log in securely by verifying their credentials against stored, encrypted passwords. This is crucial for maintaining data security and user authentication in the application.

## Milestone 8: Product Card Component and Homepage Layout 🚀

✅ Frontend Product Card Component Designed and implemented a reusable Product Card component. Utilized props to dynamically render product details like name, image, and price.

✅ Homepage Layout for Products Created a responsive homepage to display multiple Product Cards. Used Grid/Flexbox for optimal layout and user experience.

## Milestone 9: Product Input Form 🚀

✅ Product Form Implementation

Designed a form for adding product details such as name, price, and description.
Implemented an option for uploading multiple product images.
✅ Database Integration

Structured the form to send product data to the backend for storage in MongoDB.
Ensured proper validation and error handling.
✅ README Update

Documented Milestone 9 progress in this README file.
This milestone focused on enabling product input, which is essential for expanding the e-commerce platform by allowing users to add new products dynamically.

## Milestone 10: Product Schema and API Endpoint 🚀

✅ Product Schema Implementation Defined a Product Schema in Mongoose. Implemented validation for fields like name, price, and image URL.

✅ API Endpoint for Adding Products Created a POST endpoint to store product details in MongoDB. Ensured proper validation before saving the data.

## Milestone 11: Dynamic Product Display 🚀

✅ Fetching Product Data Created an endpoint to retrieve all stored products from MongoDB. Implemented API call logic in the frontend to fetch data dynamically.

✅ Displaying Products Passed fetched product data to the Product Card component. Rendered product information dynamically on the homepage.

## Milestone 12: My Products Page 🚀

✅ Filtering Products by User Email
Created a backend endpoint to retrieve products associated with the logged-in user's email.
Queried the MongoDB database to fetch only those products matching the user's email.

✅ Fetching Data on the Frontend
Implemented an API call to request user-specific product data from the backend.
Stored the retrieved data in the application state for dynamic rendering.

✅ Displaying User's Products
Passed the fetched data to the Product Card component.
Rendered the products dynamically on the "My Products" page.

## Milestone 13: Editing Uploaded Products 🚀

✅ Backend Update Endpoint
Created an endpoint to receive and update product details in MongoDB.
Implemented logic to find the product by its ID and modify the existing data.

✅ Frontend Edit Button
Added an Edit button to each product card.
When clicked, it fetches the product details and auto-fills the form.

✅ Updating Product Data
Allowed users to modify product details directly within the form.
Implemented a Save Changes feature to update product details in the database.

## Milestone 14: Deleting Products 🚀

✅ Backend Delete Endpoint
Created an endpoint to delete a product by its ID from MongoDB.
Implemented logic to find the product and remove it from the database.

✅ Frontend Delete Button
Added a Delete button to each product card.
When clicked, it sends the product ID to the server endpoint for deletion.

✅ Updating UI After Deletion
Ensured the product is removed from the frontend dynamically after successful deletion.
Implemented confirmation prompts before deletion for better user experience.

## Milestone 15: Navbar Component 🚀

✅ Creating the Navbar Component
Designed a Nav component with links to key pages:
Home
My Products
Add Product
Cart

✅ Making the Navbar Responsive
Ensured the Navbar adapts to all screen sizes.
Implemented a mobile-friendly design with a collapsible menu.

✅ Reusing the Navbar Across Pages
Added the Nav component to all application pages.
Ensured smooth and intuitive navigation between different sections.

## Milestone 16: Product Info Page 🚀

✅ Creating the Product Info Page
Designed a Product Info page to display detailed product information.

✅ Adding Quantity Selection and Cart Button
Implemented a Quantity Selector to allow users to choose the desired quantity.
Added an Add to Cart button to facilitate easy product purchase.

✅ Dynamic Data Rendering
Integrated backend API calls to fetch and display product details dynamically.
Ensured the page updates based on the selected product.

## Milestone 17: Adding Products to Cart 🚀

✅ Updating User Schema
Modified the User Schema to include a cart field for storing added products.

✅ Cart Schema Implementation
Created a Cart Schema in Mongoose to store cart product details.

✅ Backend Cart Endpoint
Developed an API endpoint to receive product details and store them in the cart collection in MongoDB.

✅ API Integration
Ensured that product details are properly received from the frontend and stored in the cart.

✅ Testing and Validation
Implemented input validation to ensure correct product details are stored.
Tested API responses to confirm successful cart storage.

## Milestone 18: Fetching Cart Products 🚀

✅ Backend Cart Retrieval Endpoint
Created an endpoint to fetch all products inside a user's cart.

✅ User-Based Filtering
Implemented logic to retrieve cart products based on the logged-in user's email.

✅ API Integration with Frontend
Integrated the frontend cart page with the backend to fetch and display cart items.

✅ Testing and Validation
Ensured that the cart data retrieval process is working correctly.
Tested API responses for accuracy and efficiency

## Milestone 19: Cart Page UI & Quantity Management 🚀

✅ Frontend Cart Page
Created a dedicated Cart Page UI to display products inside the cart.
Integrated the frontend with the backend endpoint from Milestone 18 to fetch cart items.

✅ Quantity Management
Implemented + (increase) and - (decrease) buttons for each cart product.
Users can modify product quantities dynamically.

✅ Backend Endpoints for Quantity Update
Created API endpoints to handle incrementing and decrementing the product quantity inside the cart.
Integrated these endpoints with the frontend.

✅ Testing and Validation
Ensured smooth UI interaction for increasing and decreasing quantities.
Tested API responses to validate quantity updates.

## Milestone 20: Profile Page & User Data Endpoint 🚀

✅ Backend Endpoint for User Data
Created a GET endpoint to fetch user details based on their email.
Implemented secure user authentication to ensure only authorized users can access their data.
Integrated error handling to manage invalid or missing user records.

✅ Profile Page UI Implementation
Designed a Profile Page using Tailwind CSS for a modern and responsive look.
Displayed profile photo, name, and email in a dedicated section.

✅ Address Section with Dynamic Rendering
Implemented an address section to show user addresses.
Displayed a message "No address found" if the user has no saved addresses.
Added an "Add Address" button to allow users to add a new address.

✅ API Integration
Connected the frontend Profile Page with the backend endpoint.
Ensured user data is fetched and displayed dynamically.

✅ Testing & Debugging
Verified API response and data retrieval functionality.
Ensured smooth UI rendering and error-free data fetching.

## Milestone 21: Address Form Page 🚀

✅ Frontend Address Form
Created a responsive address input form using HTML, CSS, and JavaScript/React.
Designed a user-friendly UI with fields for country, city, address1, address2, zip code, and address type.

✅ State Management for Address Data
Implemented a state to store user input dynamically.
Ensured real-time updates as users type in the form fields.

✅ Navigation from Profile Page
Integrated an "Add Address" button in the Profile Page.
Enabled navigation to the address form page when the button is clicked.

✅ Form Validation & User Experience
Added basic validation for required fields to ensure accurate input.
Provided clear error messages and user feedback for invalid inputs.

✅ Testing & Debugging
Verified smooth form submission and state updates.
Ensured seamless navigation between Profile Page and Address Form.

## Milestone 22: Save Address to User Profile 🚀

✅ Backend Endpoint for Address Storage
Created a POST endpoint to receive address data from the frontend form.
Validated incoming address details to ensure data integrity.

✅ Storing Address in Database
Updated the user collection by adding the address to the address array inside the user profile.
Ensured that multiple addresses can be stored for a single user.

✅ API Integration with Frontend
Connected the address form submission to the backend API.
Handled API responses and provided user feedback upon successful address storage.

✅ Error Handling & Security
Implemented proper authentication to ensure only logged-in users can add addresses.
Added error handling to manage invalid data or database issues.

✅ Testing & Debugging
Verified that addresses are successfully stored in the database.
Ensured seamless data flow from the frontend to the backend.

## Milestone 23: Select Address & Order Schema 🚀

✅ "Place Order" Button in Cart
Added a "Place Order" button inside the cart page.
Configured navigation to the Select Address page when the button is clicked.

✅ Select Address Page Implementation
Created a Select Address page that displays all saved addresses of the user.
Implemented an option to select one address as the delivery address.

✅ Backend Endpoint for Fetching Addresses
Created an API endpoint to retrieve all saved addresses of the logged-in user.
Ensured secure access to user addresses with proper authentication.

✅ Mongoose Schema for Orders
Designed and implemented a Mongoose schema for storing order details.
Included fields like user ID, selected address, ordered items, total price, order status, and timestamps.

✅ API Integration & Testing
Verified API response and smooth integration with the frontend.
Tested selecting an address and ensuring data is correctly stored for order placement.

✅ Error Handling & Debugging
Implemented error handling for missing addresses and invalid order data.
Ensured seamless user experience when selecting an address and placing an order.

## Milestone 24: Order Confirmation Page 🚀

✅ Order Confirmation Page UI
Created a dedicated Order Confirmation page to display order details.
Designed a clean and user-friendly layout for better user experience.

✅ Displaying Ordered Products
Listed all the products being ordered with their names, prices, and quantities.
Ensured a responsive UI for better visibility on all devices.

✅ Showing Selected Delivery Address
Displayed the user's selected delivery address clearly.
Included full address details for confirmation before placing the order.

✅ Calculating & Displaying Total Price
Computed the total value of the cart, including product prices and any applicable charges.
Ensured real-time updates in case of any modifications before confirming the order.

✅ "Place Order" Button Implementation
Added a "Place Order" button at the bottom of the page.
Ensured smooth transition to the next step in the order process when clicked.

✅ Error Handling & User Experience Enhancements
Implemented validation to prevent proceeding without a selected address.
Handled edge cases like empty cart or missing address selection gracefully.

## Milestone 25: Backend Endpoint for Placing Orders 🚀

✅ Creating the Place Order Endpoint
Developed a backend endpoint to handle order placement.
The endpoint receives products, user details, and address information.

✅ Retrieving User ID from Email
Extracted the user’s email from the request.
Used the email to retrieve the corresponding _id from the database.

✅ Storing Orders in MongoDB
For each product in the order, created a separate order entry with the same address.
Used the existing order schema to store order details in the MongoDB order collection.

✅ Ensuring Data Integrity & Validation
Implemented validation checks for missing user details, products, or address information.
Ensured each order is successfully stored before responding to the client.

## Milestone 26: Backend Endpoint for Fetching User Orders 🚀

✅ Creating the Get Orders Endpoint
Developed a backend endpoint to retrieve all orders for a specific user.
The endpoint receives the user’s email as input.

✅ Retrieving User ID from Email
Extracted the user’s email from the request.
Used the email to retrieve the corresponding _id from the database.

✅ Fetching User Orders from MongoDB
Queried the database using the user’s _id to retrieve all associated orders.
Sent the retrieved orders as a response to the client.

✅ Ensuring Data Integrity & Validation
Implemented validation checks to ensure the user exists.
Handled cases where no orders were found gracefully.

## Milestone 27: My Orders Page 🚀

✅ Creating the My Orders Page
Developed a frontend page to display all orders placed by the user.
Designed a clean and user-friendly interface for better readability.

✅ Fetching Orders from Backend
Sent a GET request to the /my-orders endpoint created in the previous milestone.
Passed the user’s email to retrieve all associated orders.

✅ Displaying User Orders
Listed all the user’s orders with relevant details like product name, price, quantity, and status.
Ensured a responsive UI for better visibility on all devices.

✅ Adding My Orders Page to Navbar
Integrated the My Orders page into the navigation bar for easy access.
Improved user experience with smooth navigation.

✅ Ensuring Data Integrity & Error Handling
Implemented loading states while fetching orders.
Handled cases where no orders were found or API calls failed.

## Milestone 28: Cancel Order Feature 🛑

✅ Adding Cancel Order Button
Implemented a "Cancel Order" button for each order on the My Orders page.
Ensured that the button is only visible for active orders (not for canceled ones).

✅ Creating Backend Endpoint for Order Cancellation
Developed an API endpoint to handle order cancellation requests.
The endpoint receives the order-id, retrieves the order, updates its status to canceled, and saves the changes.

✅ Updating Order Status in Database
Integrated backend logic to modify the order status in the database.
Ensured that canceled orders are no longer modifiable.

✅ Enhancing User Experience
Improved UI to reflect real-time order status updates.
Disabled/hid the cancel button for orders that have already been canceled.

## Milestone 29: Integrating PayPal Payment Gateway 💳

✅ Setting Up PayPal Developer Account
Created a PayPal developer account and accessed the developer dashboard.
Generated sandbox accounts for testing transactions.
Retrieved and saved the sandbox User ID and Client ID for integration.

✅ Adding Payment Options to Order Confirmation Page
Introduced two payment methods: Cash on Delivery (COD) and Online Payment (PayPal).
Implemented radio buttons for users to select their preferred payment method.

✅ Displaying PayPal Payment Button
Configured the UI to show PayPal buttons only when "Online Payment" is selected.
Prepared the page layout for smooth integration in the next milestone.

## Milestone 30: Implementing PayPal Payment Gateway 💳

✅ Using PayPal API for Online Payments
Integrated the PayPal API using the sandbox Client ID created in the previous milestone.
Enabled secure online payment transactions through PayPal.

✅ Installing and Using react-paypal-js
Installed the react-paypal-js NPM package for PayPal integration.
Utilized the PayPalScriptProvider component to display PayPal payment options, including credit/debit cards.

✅ Displaying PayPal Payment Button
Configured the PayPal payment button to appear when the Online Payment option is selected.
Ensured smooth user experience by handling errors and transaction statuses.

## Milestone 31 Progress 🚀

✅ Redux Setup for Global State Management
Installed and configured Redux in the React project to manage global states efficiently.

✅ Store Configuration
Created a new store folder containing:

store.js: Configured the Redux store with a userReducer to manage user email.

userActions.js: Defined a setEmail action to update the email in the global state.

✅ React-Redux Integration

Installed the react-redux npm package.

Wrapped the App component with the Provider component in index.js and passed the store as a prop to make global state accessible across the app.  