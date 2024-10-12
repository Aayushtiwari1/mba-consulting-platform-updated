const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/assessment', (req, res) => {
    res.render('assessment');
});

// Handle Assessment Submission
app.post('/assessment/submit', (req, res) => {
    const { question1, question2, question3 } = req.body;
    console.log('Assessment Submitted:', { question1, question2, question3 });
    res.send('Assessment submitted successfully!');
});

// Student Profile
app.get('/profile', (req, res) => {
    res.render('profile');
});

app.post('/profile/update', (req, res) => {
    const { name, skills, experience } = req.body;
    console.log('Profile Updated:', { name, skills, experience });
    res.send('Profile updated successfully!');
});

// Client Page
app.get('/client', (req, res) => {
    res.render('client');
});

app.post('/client/post', (req, res) => {
    const { projectTitle, projectDescription, budget } = req.body;
    console.log('Project Posted:', { projectTitle, projectDescription, budget });
    res.send('Project posted successfully!');
});

// Faculty Review
app.get('/faculty_review', (req, res) => {
    res.render('faculty_review');
});

app.post('/faculty/review', (req, res) => {
    const { studentName, assessmentComments } = req.body;
    console.log('Faculty Review Submitted:', { studentName, assessmentComments });
    res.send('Review submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


