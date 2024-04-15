# GETTA-NOTE To-Do App

**GETTA-NOTE** is a simple to-do app built using React Native. It leverages Firebase and Firestore for the backend and utilizes Zustand for global state management.

## Features

- Create, edit, and delete to-do items.
- Set deadlines for tasks.
- Filter tasks based on different criteria.
- User authentication and profile management.
- Responsive design for mobile devices.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd GETTA-NOTE`.
3. Install dependencies: `npm install`.
4. Create a Firebase project and set up Firestore.
5. Configure your Firebase credentials in the app (check `src/config/firebase.js`).
6. Run the app: `npm start`.

## Folder Structure

GETTA-NOTE/

├── node_modules/

├── src/

│   ├── app/

│   │   ├── (home)/

│   │   │   ├── layout.js

│   │   │   ├── addNote.jsx

│   │   │   ├── home.jsx

│   │   │   ├── userProfile.jsx

│   │   │   └── viewNote.jsx

│   │   ├── layout.jsx

│   │   └── index.jsx

│   ├── assets/

│   │   ├── fonts/

│   │   │   ├── IrishGrover-Regular.ttf

│   │   │   ├── SofiaSans-Bold.ttf

│   │   │   ├── SofiaSans-Light.ttf

│   │   │   └── SofiaSans-Regular.ttf

│   │   └── images/

│   │       ├── image.jpg

│   │       ├── logo.png

│   │       └── nonotes.png

│   ├── components/

│   │   ├── deadLinePicker.jsx

│   │   ├── filterButton.jsx

│   │   ├── filterButtons.jsx

│   │   ├── loginForm.jsx

│   │   ├── registerForm.jsx

│   │   ├── searchInput.jsx

│   │   ├── sliceCard.jsx

│   │   └── todoCard.jsx

│   └── features/

│       └── Notes.js

├── .gitignore

├── package.json

└── README.md

## License

This project is licensed under the MIT License - see the LICENSE file for details.
