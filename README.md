
# FakeStore Website

A simple e-commerce website interface that allows users to browse products, add them to a cart, and view the total cost, including discounts, platform fees, and shipping charges. The website fetches product data from the FakeStore API and updates the cart dynamically.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)

## Features
- **Search Functionality**: Search for products in real-time using the search bar.
- **Product Display**: Products are displayed with images, ratings, and prices.
- **Cart Management**: Add and remove products from the cart, and update item quantities.
- **Dynamic Price Calculation**: Total MRP, coupon discounts, platform fees, shipping charges, and the total amount are calculated dynamically.
- **Responsive Design**: The website adapts to different screen sizes.

## Demo
You can view a live demo by visiting the hosted page (link if hosted, otherwise mention it's a local project).

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling of the webpage and layout.
- **JavaScript**: Dynamic cart functionality, product search, and interaction with the FakeStore API.
- **FakeStore API**: External API used to fetch product data.

## Setup and Installation
To get the project running locally on your machine, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sreemanth-21/fakestore-website.git
    ```
   
2. **Navigate to the project directory**:
    ```bash
    cd fakestore-website
    ```

3. **Open the `index.html` file in your browser** to view the website.

    You can either open the file directly or use a local server (recommended):
    - If you have Python installed, you can run:
      ```bash
      python -m http.server
      ```
      This will serve the project on `http://localhost:8000`.

## Usage

1. **Search for Products**: Type the name of the product you want to search in the search bar.
2. **Add Products to Cart**: Click the "Add to Cart" button on any product.
3. **View Cart**: Products added to the cart will appear in the cart section.
4. **Update Cart**: Increase or decrease product quantities, or remove items from the cart.
5. **Place Order**: After reviewing the total amount, click on the "Place Order" button (functionality can be expanded in the future).

## File Structure
```
├── index.html         # Main HTML file
├── style.css          # CSS for styling
├── script.js          # JavaScript for functionality
└── README.md          # Project documentation
```

## Future Enhancements
- **User Authentication**: Implement user login and signup functionality.
- **Payment Integration**: Add real payment gateway for order processing.
- **Improved Discount System**: Dynamically apply discount codes based on user input.
- **Order History**: Allow users to view their order history and previous purchases.
  


Feel free to edit any sections as per your project requirements!
