const express = require('express');
const router = express.Router();

// Faculty Dashboard Route
router.get('/faculty-dashboard', (req, res) => {
    const students = [
        { id: 1, name: 'Student A', email: 'studenta@example.com' },
        { id: 2, name: 'Student B', email: 'studentb@example.com' }
    ];
    res.render('faculty-dashboard', { students });
});

// Verify Student Route
router.post('/faculty/verify', (req, res) => {
    const { studentId } = req.body;
    console.log(`Student Verified: ${studentId}`);
    res.redirect('/faculty-dashboard');
});

module.exports = router;
