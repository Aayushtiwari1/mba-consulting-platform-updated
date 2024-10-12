const express = require('express');
const router = express.Router();

// Client Projects Dashboard
router.get('/client-projects', (req, res) => {
    const client = {
        name: 'Client X',
        projects: [
            { title: 'Market Entry Strategy', status: 'Ongoing' },
            { title: 'Competitor Analysis', status: 'Completed' }
        ]
    };
    res.render('client-projects', { client });
});

// Post a Project Route
router.get('/post-project', (req, res) => {
    res.render('post-project');
});

router.post('/post-project', (req, res) => {
    const { title, description, budget } = req.body;
    console.log(`New Project Posted: ${title}, Budget: ${budget}`);
    res.redirect('/client-projects');
});

module.exports = router;
