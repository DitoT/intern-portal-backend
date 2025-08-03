const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://ditot.github.io'
}));

const dummyData = {
  name: "Dimitri Tutberidze",
  referralCode: "dimitri2025",
  donations: 420,
  leaderboard: [
    { name: "Alice", donations: 700 },
    { name: "Dimitri Tutberidze", donations: 420 },
    { name: "Bob", donations: 300 },
  ],
};

// API route to get intern data
app.get('/api/intern', (req, res) => {
  res.json({
    name: dummyData.name,
    referralCode: dummyData.referralCode,
    donations: dummyData.donations,
  });
});

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Intern Portal backend API",
    leaderboard: dummyData.leaderboard,
    availableRoutes: ["/api/intern"]
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
