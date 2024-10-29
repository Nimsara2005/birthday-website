function startCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.style.display = 'block';
    let countdown = 5; // Set the countdown time (in seconds)

    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = `Loading... ${countdown}`;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.style.display = 'none'; // Hide the countdown
            playAudio(); // Play audio and show modal after countdown
        }
    }, 1000);
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function playAudio() {
    const audio = document.getElementById('birthdayAudio');
    audio.play();
    showModal();
}
