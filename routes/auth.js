const express = require('express');
const router = express.Router();

// Signup Route
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const { email, password, role } = req.body;
    // Logic to save user to DB
    console.log(`New ${role} Signup: ${email}`);
    res.redirect('/login');
});

// Login Route
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    // Logic to authenticate user
    console.log(`${role} Login: ${email}`);
    if (role === 'student') res.redirect('/student-dashboard');
    else if (role === 'faculty') res.redirect('/faculty-dashboard');
    else res.redirect('/client-projects');
});

module.exports = router;
