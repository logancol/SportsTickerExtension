// Check if the ticker already exists to prevent duplication
if (!document.getElementById('sports-ticker')) {
    // Create a container for the ticker
    const ticker = document.createElement('div');
    ticker.id = 'sports-ticker';
    ticker.className = 'ticker';
    document.body.appendChild(ticker);

    // Function to update the ticker with fake scores
    function updateTicker() {
        const scores = "Team A: 100 - Team B: 98 | Team C: 85 - Team D: 90";
        ticker.textContent = scores;
    }

    // Initial update of the ticker
    updateTicker();
}