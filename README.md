AI Safety Incident Dashboard 🚀

A simple, clean, and responsive web app to log and view AI safety incidents, built using React, HTML/CSS, and JavaScript.

This project was created as a take-home assignment for HumanChain to demonstrate frontend skills like state management, user interaction, input validation, and responsive design.

✨ Features
✅ Display a list of mock AI safety incidents (Title, Severity, Date).

✅ Filter incidents by Severity (All, Low, Medium, High).

✅ Sort incidents by Reported Date (Newest First, Oldest First).

✅ Expand/collapse each incident to view full Description.

✅ Submit a new incident using a clean form (with input validation).

✅ Background image with blurred frosted-glass card design.

✅ Fully responsive using Flexbox and Grid layouts.

✅ Smooth hover effects and clean modern UI.

🛠 Tech Stack

Technology	Purpose
React	JavaScript UI framework
HTML5	Markup
CSS3	Styling and layout
JavaScript (ES6+)	Logic and state management


🗂️ Project Structure


├── public/
│   └── background.jpg      
├── src/
│   ├── components/
│   │   ├── IncidentDashboard.jsx
│   │   ├── IncidentForm.jsx
│   │   └── IncidentItem.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
🚀 Getting Started

2. Install Dependencies
npm install
(Make sure you have Node.js and npm installed)

3. Start the Development Server
npm run dev
or
npm start
The app will be available at:
http://localhost:3000/

📸 Screenshots

visit - '\public\screenshots'

🎨 Design Decisions

Blurred Background (Frosted Glass Effect): Modern UI trend, improves aesthetics.

Flexbox/Grid Layouts: Ensures mobile and desktop responsiveness.

Form Validation: Prevents empty incident submissions for better UX.

State Management: Used React’s useState to manage incident data and form input easily.

⚡ Challenges Faced
Handling layout across different screen sizes (solved via Flex/Grid).

Keeping the UI clean and simple without external libraries like Tailwind or Bootstrap.

🧹 Future Improvements
Add pagination for a large number of incidents.

Use localStorage to persist incidents across sessions.

Add search functionality for faster incident lookup.

Add animations (fade-in, slide) to improve user experience.

👨‍💻 Author
Name: Abhishek Singh

Email: abhistr03@gmail.com


📜 License
This project is licensed under the MIT License.

🎯 Final Note
This project is built with love ❤️ for HumanChain to demonstrate clean code, elegant UI, and good frontend practices.