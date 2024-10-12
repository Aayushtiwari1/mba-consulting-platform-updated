const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import route files
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const facultyRoutes = require('./routes/faculty');
const clientRoutes = require('./routes/client');

const app = express();
const PORT = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use route files
app.use(homeRoutes);
app.use(authRoutes);
app.use(studentRoutes);
app.use(facultyRoutes);
app.use(clientRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
