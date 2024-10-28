# QuickUnits

QuickUnits is a unit conversion application built with **React.js**, **Bootstrap 5**, and **Firebase**. This app allows users to easily convert various units in daily life, showcasing my skills in modern web development technologies.

## Features

- **User Authentication**: Users can sign up and log in using Firebase Authentication.
- **Unit Conversion**: Convert between various units, including length, weight, temperature, area, and more.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Bootstrap 5**: A CSS framework for responsive and mobile-first design.
- **Firebase**: For authentication and real-time data management.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Y0GESHSHINDE/QuickUnits.git
   cd QuickUnits
   npm install
   ```

2. Create a `.env` file in the root of your project and add your Firebase configuration:

   ```plaintext
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

3. Replace `your_api_key_here`, `your_auth_domain_here`, etc., with your actual Firebase configuration values.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

- **Sign Up / Login**: Use Firebase authentication to create an account or log in.
- **Convert Units**: Use the conversion interface to convert between different units.

## Contributing

If you would like to contribute to QuickUnits, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to Firebase for providing authentication and real-time database services.
- Inspired by various unit conversion applications.
