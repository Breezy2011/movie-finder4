const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes for all HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'movie_finder.html'));
});

app.get('/school', (req, res) => {
    res.sendFile(path.join(__dirname, 'school.html'));
});

app.get('/1v1game', (req, res) => {
    res.sendFile(path.join(__dirname, '1v1game.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Handle 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
}); 