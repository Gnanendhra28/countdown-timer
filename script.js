const startBtn = document.getElementById("startBtn");
const countdownDisplay = document.getElementById("countdown");
const message = document.getElementById("message");

let countdownInterval;

startBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  const userInput = document.getElementById("datetime").value;
  const targetDate = new Date(userInput);

  if (!userInput || targetDate <= new Date()) {
    alert("Please enter a future date and time.");
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate.getTime() - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      message.textContent = "Time's up!";
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    message.textContent = "";
  }, 1000);
});