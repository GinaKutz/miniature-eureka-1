const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON body
app.use(express.json());

// Define paths to HTML files
const publicDirPath = path.join(__dirname, 'public');
const notesFilePath = path.join(publicDirPath, 'notes.html');
const indexPath = path.join(publicDirPath, 'index.html');

// Route to serve notes.html
app.get('/notes', (req, res) => {
    res.sendFile(notesFilePath);
});

// Route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(indexPath);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
