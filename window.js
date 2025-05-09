window.addEventListener('DOMContentLoaded', () => {
    // Get all screens
    const startScreen = document.getElementById('startScreen');
    const nameInputScreen = document.getElementById('nameInputScreen');
    const gameScreen = document.getElementById('gameScreen');

    // Get buttons
    const smallGroupBtn = document.getElementById('smallGroupBtn');
    const largeGroupBtn = document.getElementById('largeGroupBtn');
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const startGameBtn = document.getElementById('startGameBtn');
    const randomQuestionBtn = document.getElementById('randomQuestion');
    const startTimerBtn = document.getElementById('startTimer');

    // Player counter
    let playerCount = 2;

    // Group selection handlers
    smallGroupBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        nameInputScreen.classList.remove('hidden');
    });

    largeGroupBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    });

    // Add player input field
    addPlayerBtn.addEventListener('click', () => {
        if (playerCount < 10) {
            const container = document.querySelector('.name-input-container');
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'player-name';
            input.placeholder = `Player ${playerCount + 1}`;
            container.appendChild(input);
            playerCount++;
        }
        if (playerCount === 10) {
            addPlayerBtn.style.display = 'none';
        }
    });

    // Start game from name input screen
    startGameBtn.addEventListener('click', () => {
        nameInputScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    });

    // Timer functionality
    let timerInterval;
    let timeLeft = 120; // 2 minutes in seconds

    startTimerBtn.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            startTimerBtn.textContent = 'Start Timer';
            timeLeft = 120;
            updateTimerDisplay();
        } else {
            startTimerBtn.textContent = 'Stop Timer';
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    startTimerBtn.textContent = 'Start Timer';
                }
            }, 1000);
        }
    });

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timerDisplay').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
});