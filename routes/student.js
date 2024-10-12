const express = require('express');
const router = express.Router();

// Student Dashboard Route
router.get('/student-dashboard', (req, res) => {
    const student = {
        name: 'John Doe',
        projects: [
            { title: 'Market Research Project' },
            { title: 'Business Strategy Development' }
        ]
    };
    res.render('student-dashboard', { student });
});

// Student Assessment Route
router.get('/assessment', (req, res) => {
    res.render('assessment');
});

router.post('/assessment/submit', (req, res) => {
    const { question1, question2, question3 } = req.body;
    console.log(`Assessment submitted: ${question1}, ${question2}, ${question3}`);
    res.redirect('/student-dashboard');
});

module.exports = router;
